import { combineReducers } from 'redux';
import CarrosList from './carros';
import MarcasList from './marcas';

export const rootReducer = combineReducers({
  CarrosList,
  MarcasList,
});

export type RootState = ReturnType<typeof rootReducer>;
