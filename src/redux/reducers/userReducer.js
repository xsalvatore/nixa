const INIT_STATE = {
    user: null,
}

const userReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                user: payload,
            };
        default: 
            return state;
        
    }
}

export default userReducer;