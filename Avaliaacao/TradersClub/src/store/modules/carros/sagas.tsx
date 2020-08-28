import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { AddCarSuccess } from './actions';
import { ActionsTypesProdutos } from './interfacesActtions';

// type Parametros = {
//   id: string;
// };

// function* AddCar({ id }: ReturnType<typeof AddProdutoRequest>) {
//   const response = yield call(api.get, 'cars');
//   yield put(AddProdutoSuccess(response));
// }
// // export default all([takeLatest('ADD_TO_CAR_REQUEST', AddProduto)]);

// export default all([takeLatest(ActionsTypesProdutos.ADD_Request, AddCar)]);

type Parametros = {
  id: string;
};

function* AddCar() {
  const { data } = yield call(api.get, 'cars');
  localStorage.setItem('@listaCarros', JSON.stringify(data));
  for (let i = 0; i < data.length; i++) {
    yield put(AddCarSuccess(data[i]));
  }
}
// export default all([takeLatest('ADD_TO_CAR_REQUEST', AddProduto)]);

export default all([takeLatest('ADD_TO_CAR_REQUEST', AddCar)]);
