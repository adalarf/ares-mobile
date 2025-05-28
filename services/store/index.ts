import { create } from "zustand";
import {
  createJSONStorage,
  devtools,
  persist,
  StateStorage,
} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const zustandStorage: StateStorage = {
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, value);
  },
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ?? null;
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

interface BearState {
  count: number;
  goal: string;
  avatar: string;
  workout_plan: any;
  stats_info: any;
  authToken: string;
  refreshToken: string;
  parameters: {
    age: number;
    height: number;
    weight: number;
  };
  muscle_groups: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  bmi_data: any;
  training_place: string;
  training_level: string;
  setData: (key: keyof BearState, value: any) => void;
}

const useStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        goal: "",
        avatar: "",
        parameters: {
          age: 0,
          height: 0,
          weight: 0,
        },
        muscle_groups: [],
        bmi_data: {},
        authToken: "",
        refreshToken: "",
        training_place: "",
        training_level: "",
        workout_plan: {},
        stats_info: {},
        setData: (key, value) => set({ [key]: value }),
      }),
      {
        name: "bear-storage",
        storage: createJSONStorage(() => zustandStorage),
      },
    ),
  ),
);

export default useStore;