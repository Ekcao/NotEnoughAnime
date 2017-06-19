import * as Actions from './action-types';
import MyAnimeList from '../api/myanimelist';

export interface LoginAction {
    type: Actions.Login,
    payload: {
        service: MyAnimeList,
        promise: Promise<string>
    }
}

export type LoginAsyncActions = Actions.LoginPending | Actions.LoginFulfilled | Actions.LoginRejected;

export interface GetAnimeListAction {
    type: Actions.GetAnimeList
}

export function login(username: string, password: string): LoginAction {
    const service = new MyAnimeList();

    return {
        type: Actions.LOGIN,
        payload: {
            service,
            promise: service.verifyLogin(username, password)
        }
    }
}

export function getAnimeList(): GetAnimeListAction {
    return {
        type: Actions.GET_ANIME_LIST
    }
}