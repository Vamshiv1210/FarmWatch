const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * setOwnerClaim
 * Sets the initial { role: 'admin' } claim for the first user.
 */
exports.setOwnerClaim = onCall(async (request) => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Must be logged in');

  const listing = await admin.auth().listUsers(1);
  const adminExists = listing.users.some(u => u.customClaims?.role === 'admin');
  
  if (adminExists) throw new HttpsError('already-exists', 'Admin already provisioned');

  await admin.auth().setCustomUserClaims(request.auth.uid, { role: 'admin' });
  await admin.auth().revokeRefreshTokens(request.auth.uid);
  
  return { success: true };
});

/**
 * setUserRole
 * Grants or revokes viewer access.
 */
exports.setUserRole = onCall(async (request) => {
  if (request.auth?.token?.role !== 'admin')
    throw new HttpsError('permission-denied', 'Admin only');

  const { targetUid, role } = request.data;
  await admin.auth().setCustomUserClaims(targetUid, role ? { role } : {});
  await admin.auth().revokeRefreshTokens(targetUid);
  
  return { success: true };
});
