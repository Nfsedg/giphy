import { useReducer } from 'react'

export default function useForm() {

    const ACTIONS = {
      UPDATE_KEYWORD: 'update_keyword',
      UPDATE_RATING: 'update_rating'
    }
  
    const reducer = (state, action) => {
      switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
          return {
            ...state,
            keyword: action.payload,
            times: state.times + 1
          };
        case ACTIONS.UPDATE_RATING:
          return {
            ...state,
            rating: action.payload,
            times: state.times + 1
          };
        default:
          return state
      }
    }
  
    const [state, dispatch] = useReducer(reducer, {
      keyword: '',
      rating: 'g',
      times: 0
    });
  
    const { keyword, times, rating } = state;
  
    return {
      keyword,
      times,
      rating,
      updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
      updateRating: rating => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: rating })
    }
  }