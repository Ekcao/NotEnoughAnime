export interface Anime {
    id: number,
    title: string,
    englishTitle?: string,
    totalEpisodes?: number,
    overallScore?: number,
    status?: string,
    synopsis?: string,
    image?: string
}

export interface UserAnime {
    id: number,
    episodesWatched?: number,
    status?: 'watching' | 'completed' | 'onhold' | 'dropped' | 'plantowatch' | 1 | 2 | 3 | 4 | 6,
    score?: number
}

export interface MALUser {
    id: number,
    username: string,
    watching: number,
    completed: number,
    onHold: number,
    dropped: number,
    planToWatch: number,
    animeList: Map<number, UserAnime>
}

export interface StoreState {
    loggedIn: boolean,
    user: MALUser,
    anime: Map<number, Anime>
}