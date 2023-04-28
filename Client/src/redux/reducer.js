import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

    const initialState ={
        myFavorites: [],
        characters: [],
        allCharactersFav: [],
    }
    
    const reducer =(state=initialState, action)=>{
        switch(action.type){
            case 'ADD_FAV':
                return { ...state,
                        myFavorites: action.payload,
                        allCharacters: action.payload 
                    };

                case REMOVE_FAV:
                    return {
                        ...state,
                        myFavorites: action.payload,
                        allCharacters: action.payload 
                    }
                    // case ADD_CARD:
                    //     return {
                    //         ...state,
                    //         characters: [...state.characters, action.payload]
                    //     }
                        
                    case FILTER:
                        const charactersFilteres  = state.allCharactersFav.filter((char => char.gender === action.payload))
                        const filterCheck =()=>{
                            if(action.payload === "All" && !charactersFilteres.length) return state.allCharactersFav
                            else return charactersFilteres
                        }
                        
                        return {
                            ...state,
                            myFavorites: filterCheck()
                        }
                    case ORDER:
                            const allCharatersFavCopy = [...state.allCharactersFav]
                            
                        return {
                            ...state,
                            myFavorites: action.payload ==="A" 
                            ? allCharatersFavCopy.sort((a, b) => a.id - b.id)
                            : allCharatersFavCopy.sort((a, b) => b.id - a.id)
                        }
                        
                    default:
                        return {...state}
                    }
}

export default reducer;