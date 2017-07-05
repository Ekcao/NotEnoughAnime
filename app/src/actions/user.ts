import {
    LOGIN,
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    GET_ANIME_LIST
} from '../constants';
import { MyAnimeList } from '../api';

export interface LoginAction {
    type: LOGIN,
    payload: {
        service: MyAnimeList,
        promise: Promise<string>
    }
}

export type LoginAsyncActions = LOGIN_PENDING | LOGIN_FULFILLED | LOGIN_REJECTED;

export interface GetAnimeListAction {
    type: GET_ANIME_LIST
}

export function login(username: string, password: string): LoginAction {
    const service = new MyAnimeList();

    return {
        type: LOGIN,
        payload: {
            service,
            promise: service.verifyLogin(username, password)
        }
    }
}

export function getAnimeList(): GetAnimeListAction {
    return {
        type: GET_ANIME_LIST
    }
}