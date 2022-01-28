export const logInUser = () => async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());

    dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: res,
    });                 
}
