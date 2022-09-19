import {makeAutoObservable} from "mobx";

export default class userStore {
    constructor() {
        this._isAuth = false;
        this._group = 0;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setGroup(group) {
        this._group = group;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get group() {
        return this._group;
    }
}