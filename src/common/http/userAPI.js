import {$authHost} from "./index";
import jwt_decode from "jwt-decode";

export const check = async () => {
    const {data} = await $authHost.get('api/auth/refresh' )
    localStorage.setItem('jwtToken', data.token)
    return jwt_decode(data.token)
}