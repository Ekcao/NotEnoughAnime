export * from './anime';

export interface UserAnimeInfo {
    id: number,
    episodesWatched?: number,
    status?: string | number,
    score?: number
}

export interface User {
    id: number,
    username: string | null,
    watching: number,
    completed: number,
    onHold: number,
    dropped: number,
    planToWatch: number,
    animeList?: Map<number, UserAnimeInfo>
}

// export interface StoreState {
//     loggedIn: boolean,
//     user: User,
//     anime: Map<number, Anime>
// }