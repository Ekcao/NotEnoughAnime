import { getTagValue } from '../../src/converters';

const XML = document.createElement('XML');
const nameTag = document.createElement('name');
nameTag.appendChild(document.createTextNode('Eric Cao'));
XML.appendChild(nameTag);

describe('fn: getTagValue(element: Element, tagName: string)', () => {
    it('returns string value if tag name is found', () => {
        const name = getTagValue(XML, 'name');
        expect(name).toBeDefined();
        expect(name).toBe('Eric Cao');
    });

    it('returns null if tag name is not found', () => {
        const title = getTagValue(XML, 'title');
        expect(title).toBeNull();
    });
});