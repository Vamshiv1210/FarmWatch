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
  sheds: [],
  selectedShedId: null,
  isLoading: true,
  setSheds: (sheds) => set({ sheds, isLoading: false }),
  selectShed: (id) => set({ selectedShedId: id }),
  updateShedData: (shedId, data) => set((state) => ({
    sheds: state.sheds.map((s) => 
      s.id === shedId ? { ...s, live_state: { ...s.live_state, ...data } } : s
    ),
  })),
}));
