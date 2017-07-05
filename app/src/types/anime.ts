import { getTagValue } from '../converters';
import { AnimeTagsOld } from '../constants';

export class Anime {
    public id: number;
    public title: string | null;
    public englishTitle: string | null;
    public totalEpisodes: number;
    public overallScore: number | null;
    public status: string | number | null;
    public synopsis: string | null;
    public image: string | null;

    public static fromXMLElementOld(xml: Element) {
        return new Anime(
            Number(getTagValue(xml, AnimeTagsOld.ID)),
            getTagValue(xml, AnimeTagsOld.TITLE),
            Number(getTagValue(xml, AnimeTagsOld.TOTAL_EPISODES)),
            getTagValue(xml, AnimeTagsOld.IMAGE)
        );
    }

    public constructor(
        id: number,
        title: string | null,
        totalEpisodes: number,
        image: string | null
    ) {
        this.id = id;
        this.title = title;
        this.englishTitle = null;
        this.totalEpisodes = totalEpisodes;
        this.overallScore = null;
        this.status = null;
        this.synopsis = null;
        this.image = image;
    }
}
