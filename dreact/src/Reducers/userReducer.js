const userReducer = (state = { isLoggedIn: false }, action) => {

    switch (action.type) {
        case "SET_LOGIN_STATE_FULFILLED":
            state = {
                isLoggedIn: true
            };
            break;

        default:
            state = {
                isLoggedIn: false
            };
            break;
    }

    return state;
};

export default userReducer;