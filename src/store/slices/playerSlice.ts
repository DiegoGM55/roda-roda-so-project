import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../hooks/gameLogic/gameLogic";

// Define the initial state using that type
interface PlayersState {
  playerList: Player[];
}

// Define the initial state using that type
const initialState: PlayersState = {
  playerList: [{
    name: "",
    points: 0,
    color: "",
  },
  {
    name: "",
    points: 0,
    color: "",
  }],
};

export const playerSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.playerList.push(action.payload);
    },
    removePlayer: (state, action) => {
      state.playerList = state.playerList.filter((player) => player.name !== action.payload);
    },
  },
});