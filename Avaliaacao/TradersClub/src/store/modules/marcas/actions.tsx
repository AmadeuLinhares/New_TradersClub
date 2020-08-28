export function AddBrandsRequest() {
  return {
    type: 'ADD_TO_BRANDS_REQUEST',
  };
}

export function AddBrandsSuccess(marcas: object) {
  return {
    type: 'ADD_TO_BRANDS_SUCCESS',
    marcas,
  };
}
