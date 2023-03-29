import Cookies from "js-cookie"
import { setAuth, setId } from "../redux/authSlice"
import store from "../redux/store"

export const logOut = () => {
    Cookies.remove('Token')
    store.dispatch(setAuth(''))
}