/**
 * FarmWatch Pro Theme Configuration
 * Rich Aesthetics Design System
 */

export const COLORS = {
  // Primary Greens
  primary: '#064E3B',    // Emerald 900
  secondary: '#10B981',  // Emerald 500
  lightGreen: '#D1FAE5', // Emerald 100

  // Backgrounds (Deep Dark Mode)
  background: '#020617', // Slate 950
  surface: '#0F172A',    // Slate 900
  card: '#1E293B',       // Slate 800
  
  // Text
  textPrimary: '#F8FAFC',  // Slate 50
  textSecondary: '#94A3B8', // Slate 400
  textMuted: '#64748B',    // Slate 500

  // Alerts & Status
  critical: '#BE123C', // Rose 700
  high: '#F59E0B',     // Amber 500
  medium: '#EAB308',   // Yellow 500
  success: '#22C55E',  // Green 500
  info: '#3B82F6',     // Blue 500

  // Accents
  accent: '#10B981',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
};

export const SHADOWS = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  hard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
};

export const theme = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  typography: TYPOGRAPHY,
  shadows: SHADOWS,
};
