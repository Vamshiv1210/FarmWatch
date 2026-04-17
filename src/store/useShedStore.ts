import { create } from 'zustand';

export interface SensorData {
  water_level_pct: number;
  temperature_c: number;
  humidity_pct: number;
  last_updated: number;
  esp32_online: boolean;
}

export interface Shed {
  id: string;
  name: string;
  live_state: SensorData;
  last_caretaker_name?: string;
  last_entry_ts?: number;
}

interface ShedState {
  sheds: Shed[];
  selectedShedId: string | null;
  isLoading: boolean;
  setSheds: (sheds: Shed[]) => void;
  selectShed: (id: string) => void;
  updateShedData: (shedId: string, data: Partial<SensorData>) => void;
}

export const useShedStore = create<ShedState>((set) => ({
  sheds: [
    {
      id: '1',
      name: 'Shed 1 - Layers',
      last_caretaker_name: 'Rajesh Kumar',
      last_entry_ts: Date.now() - 3600000,
      live_state: {
        water_level_pct: 72,
        temperature_c: 29.5,
        humidity_pct: 65,
        last_updated: Date.now(),
        esp32_online: true,
      }
    },
    {
      id: '2',
      name: 'Shed 2 - Broilers',
      last_caretaker_name: 'Suresh P.',
      last_entry_ts: Date.now() - 7200000,
      live_state: {
        water_level_pct: 18,
        temperature_c: 32.1,
        humidity_pct: 70,
        last_updated: Date.now(),
        esp32_online: true,
      }
    }
  ],
  selectedShedId: null,
  isLoading: false, // UI-Only Mock Mode
  setSheds: (sheds) => set({ sheds, isLoading: false }),
  selectShed: (id) => set({ selectedShedId: id }),
  updateShedData: (shedId, data) => set((state) => ({
    sheds: state.sheds.map((s) => 
      s.id === shedId ? { ...s, live_state: { ...s.live_state, ...data } } : s
    ),
  })),
}));
