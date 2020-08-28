import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { AddBrandsSuccess, AddBrandsRequest } from './actions';

type Parametros = {
  id: string;
};

function* RequestBrands() {
  const { data } = yield call(api.get, '/brands');

  localStorage.setItem('@listaMarcas', JSON.stringify(data));
  for (let i = 0; i < data.length; i++) {
    yield put(AddBrandsSuccess(data[i]));
  }
  // yield put(AddBrandsSuccess(data));
}
// export default all([takeLatest('ADD_TO_CAR_REQUEST', AddProduto)]);

export default all([takeLatest('ADD_TO_BRANDS_REQUEST', RequestBrands)]);
