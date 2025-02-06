
import {create} from 'zustand';

interface Student {
  id: number;
  name: string;
  team: string;
  caesarCipher?:string|undefined
}

interface StoreState {
  loggedInUser: Student | null;
  setLoggedInUser: (user: Student | null) => void;
}

const useUserStore = create<StoreState>((set) => ({
  loggedInUser: null,
  setLoggedInUser: (user) => set({ loggedInUser: user }),
}));

export default useUserStore;
