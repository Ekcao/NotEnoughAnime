import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class MyAnimeList {
    private axiosInstance: AxiosInstance;
    private axiosConfig: AxiosRequestConfig;
    
    constructor(private username: string, private password: string) {
        this.axiosConfig = {
            baseURL: 'http://myanimelist.net',
            auth: {
                username: this.username,
                password: this.password
            },
            responseType: 'text'
        };

        this.axiosInstance = axios.create(this.axiosConfig);
    }

    public getAnimeList() {
        let params = {
            params: {
                u: this.username,
                status: 'all',
                type: 'anime'
            }
        };

        return this.axiosInstance.get('malappinfo.php', params);
    }

    public addAnime(id: number, status: number) {
        
    }
}