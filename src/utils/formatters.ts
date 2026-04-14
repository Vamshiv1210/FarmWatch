import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Formats a timestamp into a human-readable relative string (e.g., "5 mins ago")
 */
export const formatRelativeTime = (timestamp: number | string | Date) => {
  if (!timestamp) return 'Never';
  return dayjs(timestamp).fromNow();
};

/**
 * Formats a percentage value (0-100)
 */
export const formatPercent = (value: number) => {
  return `${Math.round(value)}%`;
};

/**
 * Formats temperature in Celsius
 */
export const formatTemp = (value: number) => {
  return `${value.toFixed(1)}°C`;
};

/**
 * Returns a severity color based on water percentage
 */
export const getWaterColor = (pct: number, colors: any) => {
  if (pct < 10) return colors.critical;
  if (pct < 20) return colors.high;
  if (pct < 50) return colors.medium;
  return colors.success;
};
