export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DO_LOGIN':
            return {
                ...state,
                token: action.token,
                loading: action.loading,
                loggedIn: action.loggedIn
            }
        case 'DO_LOGOUT':
            return {
                ...state,
                token: action.token,
                loggedIn: action.loggedIn
            }
        case 'ON_ERROR':
            return {
                ...state,
                appError: action.payload,
                loading: action.loading
            }
        default:
            return state
    }
}