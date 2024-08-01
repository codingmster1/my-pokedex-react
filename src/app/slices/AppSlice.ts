import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/constants";

const initialState: AppTypeInitialState = {
    toasts: [],
    currentPokemonTab: pokemonTabs.description,
    isLoading: true,
    userInfo: undefined,
     
  };

  export const AppSlice = createSlice({
    name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserStatus: (
      state,
      action: PayloadAction<{ email: string } | undefined>
    ) => {
      state.userInfo = action.payload;
    },
    setToast: (state, action: PayloadAction<string>) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
    setPokemonTab: (state, action) => {
      state.currentPokemonTab = action.payload;
      },  
    },
  });

  export const {
    setLoading,
    setUserStatus,
    setToast,
    clearToasts,
    setPokemonTab,
  } = AppSlice.actions;

  