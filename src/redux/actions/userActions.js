import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';


export const loginUser = (userData, history) => (dispatch) => {
    console.log('here');

    dispatch({ type: 'LOADING_UI'});
    axios
    .post('/login', userData)
    .then((res) => {
        setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
      console.log('success');
    })
    .catch((err) => {
        console.log('error');
        dispatch({
            type: 'SET_ERRORS',
            payload: err.response.data
    })
    });
};
export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    axios
      .post('/user', userDetails)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  };


export const signupUser = (newUserData, history) => (dispatch) => {

    dispatch({ type: 'LOADING_UI'});
    console.log(newUserData);

    
    axios
    .post('/signup', newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch((err) => {
        console.log('HERE');
        console.log(err);
        dispatch({
            type: 'SET_ERRORS',
            payload: err.response.data
    })
    });
};

export const uploadImage = (formData) => (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    console.log("THIS" + formData);
    axios.post('/user/image', formData)
    .then(() => {
        dispatch(getUserData());
    })
    .catch(err => console.log(err));
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    console.log(FBIdToken);
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = `FBIdToken`;
};

export const logoutUser = () => (dispatch) => {
    console.log('here');
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: 'SET_UNAUTHENTICATED' });
};

export const getUserData = () => (dispatch) => {
    console.log('here');
    dispatch({ type: 'LOADING_USER' });
    axios.get('/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err =>{ console.log('its an error'); console.log(err)});
};