import { all } from 'redux-saga/effects';
import carros from './carros/sagas';
import marcas from './marcas/sagas';

export default function* rootSaga() {
  return yield all([carros, marcas]);
}
