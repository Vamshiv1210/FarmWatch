/**
 * Global API wrapper for Firebase services
 * Isolates the app from SDK changes
 */

export const AuthService = {
  loginWithOTP: async (phoneNumber: string) => {
    // TODO: Implement Firebase Auth OTP
    console.log('Logging in with OTP:', phoneNumber);
  },
  verifyOTP: async (code: string) => {
    // TODO: Implement OTP verification
    console.log('Verifying OTP:', code);
  },
  logout: async () => {
    // TODO: Implement logout
  },
};

export const DatabaseService = {
  subscribeToShedData: (shedId: string, callback: (data: any) => void) => {
    // TODO: Implement RTDB Listener
  },
  getAttendanceLogs: async (shedId: string) => {
    // TODO: Implement Firestore Query
  },
};
