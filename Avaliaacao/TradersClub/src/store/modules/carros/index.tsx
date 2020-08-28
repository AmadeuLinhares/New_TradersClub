import produce from 'immer';

interface InfosCarRquestInterface {
  brand: string;
  color: string;
  id: number;
  idBrand: number;
  km: number;
  model: string;
  price: number;
  title: string;
  year: number;
}

interface Actions {
  type: string;
  car: InfosCarRquestInterface;
}
export default function AddCar(state = [], action: Actions) {
  switch (action.type) {
    case 'ADD_TO_CAR_SUCCESS':
      return produce(state, (draft: InfosCarRquestInterface[]) => {
        draft.push(action.car);
      });
    case 'EDIT_TO_CAR':
      return produce(state, (draft: InfosCarRquestInterface[]) => {
        const findIndex = draft.findIndex(c => c.id === action.car.id);

        if (findIndex >= 0) {
          draft[findIndex].brand = action.car.brand;
          draft[findIndex].color = action.car.color;
          draft[findIndex].idBrand = action.car.idBrand;
          draft[findIndex].km = action.car.km;
          draft[findIndex].model = action.car.model;
          draft[findIndex].price = action.car.price;
          draft[findIndex].title = action.car.title;
          draft[findIndex].year = action.car.year;
        }
      });

    case 'REMOVE_FROM_CAR':
      return produce(state, (draft: InfosCarRquestInterface[]) => {
        const findIndex = draft.findIndex(c => c.id === action.car.id);

        if (findIndex >= 0) {
          draft.splice(findIndex, 1);
        }
      });

    default:
      return state;
  }
}

// export default function todosReducer(state = [], action: Actions) {
//   return produce(state, (draft: InfosCarRquestInterface) => {
//     switch (action.type) {
//       case 'ADD_TO_CAR_SUCCESS':
//         const findIndex = draft.findIndex(i => i.id === action.car.id);
//         break;
//     }
//   });
// }
