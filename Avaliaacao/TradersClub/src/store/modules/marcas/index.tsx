interface Actions {
  type: string;
  marcas: Object;
}
export default function AddMarcasList(state = [], action: Actions) {
  switch (action.type) {
    case 'ADD_TO_BRANDS_SUCCESS':
      return [...state, action.marcas];
    default:
      return state;
  }
}
