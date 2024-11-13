import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
