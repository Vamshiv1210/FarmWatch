/**
 * Global Type Definitions for FarmWatch Pro
 */

export interface User {
  uid: string;
  phoneNumber?: string;
  email?: string;
  name: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  type?: 'business' | 'home';
  role: 'admin' | 'viewer' | null;
}

export interface SensorData {
  water_level_pct: number;
  temperature_c: number;
  humidity_pct: number;
  last_updated: number;
  esp32_online: boolean;
  ntp_synced: boolean;
}

export interface Shed {
  id: string;
  name: string;
  live_state: SensorData;
  last_caretaker_name?: string;
  last_entry_ts?: number;
}

export interface AttendanceLog {
  id: string;
  shed_id: string;
  rfid_card_id: string;
  caretaker_name: string;
  timestamp: any; // Firestore Timestamp
  entry_type: 'normal' | 'late' | 'outside_window' | 'unknown_card';
  timestamp_reliable: boolean;
}

export interface Alert {
  id: string;
  shed_id: string;
  type: 'low_water' | 'critical_water' | 'high_temp' | 'low_temp' | 'high_humidity' | 'missed_entry' | 'outside_window_entry' | 'unknown_card' | 'camera_offline' | 'esp32_offline';
  severity: 'critical' | 'high' | 'medium';
  message: string;
  timestamp: any;
  resolved: boolean;
  expire_at: any;
}
