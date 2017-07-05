export function getTagValue(element: Element, tagName: string): string | null {
    if (element.getElementsByTagName(tagName).length === 0) {
        return null;
    }
    
    return element.getElementsByTagName(tagName)[0].childNodes[0].nodeValue;
}