import { Anime } from '../../src/types';
import { AnimeTagsOld } from '../../src/constants';

const animeXML = document.createElement("anime");
const idTag = document.createElement(AnimeTagsOld.ID);
idTag.appendChild(document.createTextNode('123'));
const titleTag = document.createElement(AnimeTagsOld.TITLE);
titleTag.appendChild(document.createTextNode('Madoka Magica'));
const totalEpisodesTag = document.createElement(AnimeTagsOld.TOTAL_EPISODES);
totalEpisodesTag.appendChild(document.createTextNode('12'));
const imageTag = document.createElement(AnimeTagsOld.IMAGE);
imageTag.appendChild(document.createTextNode('image.png'));

animeXML.appendChild(idTag);
animeXML.appendChild(titleTag);
animeXML.appendChild(totalEpisodesTag);
animeXML.appendChild(imageTag);

describe('class: Anime', () => {
    describe('Anime::fromXMLElementOld', () => {
        it('creates an Anime instance from XML element', () => {
            const anime = Anime.fromXMLElementOld(animeXML);
            expect(anime.id).toBe(123);
            expect(anime.title).toBe('Madoka Magica');
            expect(anime.totalEpisodes).toBe(12);
            expect(anime.image).toBe('image.png');
            expect(anime.englishTitle).toBeNull();
        });
    });
});