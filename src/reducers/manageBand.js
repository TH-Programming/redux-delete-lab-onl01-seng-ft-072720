import uuid from 'react-uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
      const band = {name: action.name, id: uuid()}
      console.log(band)
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return({...state, bands: state.bands.filter((band) => band.id !== action.payload)})

    default:
      return state;
  }
};
