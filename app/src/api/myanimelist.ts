export default class MyAnimeList {
    private baseURL: string = 'https://myanimelist.net';
    private header: Headers;
    private username: string;

    public getAnimeList(): Promise<string> {
        let params = `?u=${this.username}&status=all&type=anime`;

        return fetch(`${this.baseURL}/malappinfo.php${params}`, {
            method: 'GET',
        }).then((response: Response) => {
            if (response.ok) {
                return response.text();
            }

            throw new Error('Network response was not ok.');
        });
    }

    public verifyLogin(username: string, password: string): Promise<string> {
        let header = this.basicAuthHeader(username, password);
        
        return fetch(`${this.baseURL}/api/account/verify_credentials.xml`, {
            method: 'GET',
            headers: header
        }).then((response: Response) => {
            if (response.ok) {
                this.header = header;
                this.username = username;
                return response.text();
            }

            throw new Error('Network response was not ok.');
        });
    }

    private basicAuthHeader(username: string, password: string): Headers {
        let header = new Headers();
        header.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        return header;
    }
}