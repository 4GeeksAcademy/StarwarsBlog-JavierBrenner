//----------- Store ---------//

export const initialStore=()=>{
  return{
      characters: [],
      locations: [],
      favorites: []

  }
}


//----------- reducer es el dispatch---------//
export default function storeReducer(store, action = {}) {
  switch(action.type){
    
    case 'get_characters':
      return {
        ...store,
        characters: action.payload
      }

    case 'get_location':
      return {
        ...store,
        locations: action.payload
      }

      case 'set_favorites':
    const exist = store.favorites.find((fav) => fav.name === action.payload.name);
    let updatedFavorites;
    if (exist) {
        updatedFavorites = store.favorites.filter((fav) => fav.name !== action.payload.name);
    } else {
        updatedFavorites = [...store.favorites, action.payload];
    }
    return {
        ...store,
        favorites: updatedFavorites
    };

    default:
      throw Error('Unknown action.');
  }    

}
