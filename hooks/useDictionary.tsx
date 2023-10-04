import { create } from "zustand";

const baseAPI = "https://api.dictionaryapi.dev/api/v2/entries/en";

export interface DictionaryState {
  result: any;
  error: any;
  search: Function;
  loading: boolean;
}

const useDictionary = create<DictionaryState>((set) => ({
  result: null,
  loading: false,
  error: null,
  search: async (word: string) => {
    set({ loading: true });
    fetch(`${baseAPI}/${word}`)
      .then((r) => r.json())
      .then((result) => {
        if (result?.length) {
          set({ result: result[0], error: null });
        } else if (result.resolution) {
          // Not found
          set({ result: null, error: result });
        } else {
          set({ result: null, error: null });
        }
      })
      .finally(() => set({ loading: false }));
  },
}));

export default useDictionary;
