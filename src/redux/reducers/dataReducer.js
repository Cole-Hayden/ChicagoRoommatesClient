const initialState = {
    screams: [],
    scream: {},
    loading: false
};

export default function(state = initialState, actions){
    switch(actions.type){
        case 'LOADING DATA':
        return {
            ...state,
            loading: true
        }
        case 'SET_SCREAMS':
            return {
                ...state,
                screams: action.payload,
                loading: false
            }
        case LIKE_SCREAM:

    }
}