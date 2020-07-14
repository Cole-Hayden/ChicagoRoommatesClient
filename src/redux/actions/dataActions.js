import axios from 'axios';
const LOADING_DATA = 'LOADING_DATA';

export const getScreams = () => (dispatch) => {
    console.log('testing!');
    dispatch({ type: LOADING_DATA });
    axios.get('/screams')
    .then(res => {
        dispatch({
            type: 'SET_SCREAMS',
            payload: res.data
        })
    })
    .catch(err => {
        console.log('testing!');
        dispatch({
            type: 'SET_SCREAMS',
            payload: []
        });
    });
}


// Like a scream
export const likeScream = (screamId) => dispatch => {
    axios.get(`/scream/${screamId}/like`)
    .then(res => {
        console.log('LIKED');
        dispatch({
            type: 'LIKE_SCREAM',
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}

//Post a scream
export const postScream = (newScream) => (dispatch) => {
    dispatch({ type: 'LOADING_UI'});
    axios.post('/scream', newScream)
    .then(res=> {
        console.log('test!');
        dispatch({
            type: 'POST_SCREAM',
            payload: res.data
        });
        dispatch({ type: 'CLEAR_ERRORS'});
    })
    .catch(err => {
        console.log('test! false');
        dispatch({
            
            type: 'SET_ERRORS',
            payload: err.response.data
        })
    })
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
  };

// Unlike a scream

export const unlikeScream = (screamId) => dispatch => {
    axios.get(`/scream/${screamId}/unlike`)
    .then(res => {
        dispatch({
            type: 'UNLIKE_SCREAM',
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

export const deleteScream = (screamId) => (dispatch) => {
    axios.delete(`/scream/${screamId}`).then(() => {
        dispatch({type: 'DELETE_SCREAM', payload: screamId})
    })
    .catch(err => console.log(err));
}