export function AddCarRequest() {
  return {
    type: 'ADD_TO_CAR_REQUEST',
  };
}
export function AddCarSuccess(car: Object) {
  return {
    type: 'ADD_TO_CAR_SUCCESS',
    car,
  };
}
export function EditCard(car: object) {
  return {
    type: 'EDIT_TO_CAR',
    car,
  };
}
export function RemoveCar(car: object) {
  return {
    type: 'REMOVE_FROM_CAR',
    car,
  };
}
