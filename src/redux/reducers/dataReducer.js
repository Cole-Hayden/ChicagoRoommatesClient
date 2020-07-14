const initialState = {
    screams: [],
    scream: {},
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case 'LOADING DATA':
            console.log('loading test');
        return {
            
            ...state,
            loading: true
        };
        case 'SET_SCREAMS':
            console.log('loading screams');
            return {
                ...state,
                screams: action.payload,
                loading: false
            };
            case 'SET_SCREAM':
      return {
        ...state,
        scream: action.payload
      };
        case 'LIKE_SCREAM':
        case 'UNLIKE_SCREAM':
            let index = state.screams.findIndex(
                (scream) => scream.screamId === action.payload.screamId
                );
            state.screams[index] = action.payload;
            if (state.scream.screamId === action.payload.screamId) {
                state.scream = action.payload;
              }
            return {
                ...state
            };
        case 'DELETE_SCREAM':
            index = state.screams.findIndex(scream => scream.screamId === action.payload);
            state.screams.splice(index, 1);
            return {
                ...state
            };
        case 'POST_SCREAM':
            return {
                ...state,
                screams: [
                    action.payload,
                    ...state.screams
                ]
            }
        default: return state;
    }
}