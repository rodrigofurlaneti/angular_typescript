import { HttpHeaders } from '@angular/common/http';
export class HeadersUtils {
    constructor(){}
    getRequestHeards(): HttpHeaders{
        let headers = new HttpHeaders;
        headers = headers.set('Access-Control-Allow-Origin', '*');
        return headers;
    }
}