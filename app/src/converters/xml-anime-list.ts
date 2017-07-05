import { getTagValue } from './util';
import { Anime, UserAnimeInfo, User } from '../types';

export interface AnimeMaps {
    userAnimeInfoMap: Map<number, UserAnimeInfo>,
    animeMap: Map<number, Anime>
}

export function xmlToUser(xml: Element): User {
    return {
        id: Number(getTagValue(xml, 'user_id')),
        username: getTagValue(xml, 'user_name'),
        watching: Number(getTagValue(xml, 'user_watching')),
        completed: Number(getTagValue(xml, 'user_completed')),
        onHold: Number(getTagValue(xml, 'user_onhold')),
        dropped: Number(getTagValue(xml, 'user_dropped')),
        planToWatch: Number(getTagValue(xml, 'user_plantowatch'))
    };
}

export function xmlToUserAnimeInfo(xml: Element): UserAnimeInfo {
    return {
        id: Number(getTagValue(xml, 'series_animedb_id')),
        episodesWatched: Number(getTagValue(xml, 'my_watched_episodes')),
        status: Number(getTagValue(xml, 'my_status')),
        score: Number(getTagValue(xml, 'my_score'))
    };
}

export function xmlToAnimeMaps(xml: NodeListOf<Element>): AnimeMaps {
    let userAnimeInfoMap: Map<number, UserAnimeInfo> = new Map<number, UserAnimeInfo>();
    let animeMap: Map<number, Anime> = new Map<number, Anime>();

    for (let i = 0; i < xml.length; i++) {
        let animeElement: Element = xml[i];
        let id: number = Number(getTagValue(animeElement, 'series_animedb_id'));

        let userAnimeInfo: UserAnimeInfo = xmlToUserAnimeInfo(animeElement);
        let anime: Anime = Anime.fromXMLElementOld(animeElement);

        userAnimeInfoMap[id] = userAnimeInfo;
        animeMap[id] = anime;
    }

    return { userAnimeInfoMap, animeMap };
}

export default function xmlToAnimeList(xml: string) {
    const domParser: DOMParser = new DOMParser();
    const doc: Document = domParser.parseFromString(xml, 'application/xml');

    let user: User = xmlToUser(doc.getElementsByTagName('myinfo')[0]);
    let animeMaps: AnimeMaps = xmlToAnimeMaps(doc.getElementsByTagName('anime'));
}