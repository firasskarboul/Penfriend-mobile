import api from '../../APIs/baseAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = ({ email, password }) => {

    return async (dispatch) => {
        dispatch({ type: 'DO_LOGIN', loading: true })
        await api.post('/login_check', {
            username: email,
            password: password
        })
            .then(async (res) => {
                if (res.status == 200) {
                    try {
                        await AsyncStorage.setItem('token', res.data.token)
                        dispatch({ type: 'DO_LOGIN', token: res.data.token, loading: false, loggedIn: true })
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
            .catch((e) => {
                dispatch({ type: 'ON_ERROR', token: null, loading: false })
                console.log('error')
            })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('token')
            dispatch({ type: 'DO_LOGOUT', token: null, loggedIn: false })
        } catch (e) {
            console.log(e)
        }
    }
}