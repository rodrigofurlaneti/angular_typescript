import { HttpHeaders } from '@angular/common/http';
export class HeadersUtils {
    constructor(){}
    getRequestHeards(): HttpHeaders{
        let headers = new HttpHeaders;
        headers = headers.set('Access-Control-Allow-Origin', '*');
        return headers;
    }
    getRequestHeardsIbova(): HttpHeaders{
        let headers = new HttpHeaders;
        headers = headers.set('Content-Type', 'application/xml') 
        headers = headers.set('Accept', 'application/xml');
        headers = headers.set('responseType', 'text')
        //headers = headers.set('Cache-Control', 'Private');
        //headers = headers.set('Content-Type', 'text/xml');
        //headers = headers.set('Accept', 'text/xml');
        //headers = headers.set('Expires', 'Sat, 01 Aug 2020 16:41:33 GMT');
        //headers = headers.set('Set-Cookie', 'ASPSESSIONIDQQBDQSBA=MELBMIMCFKMJMAJJEFBAHFIB; path=/');
        //headers = headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        //headers = headers.set('Access-Control-Allow-Origin', '*');
        //headers = headers.set('Access-Control-Request-Method', 'POST,GET');
        //headers = headers.set('Set-Cookie', 'dtCookie=v_4_srv_1_sn_CE71FAB615161BEBD2C33EFDB0A3A3EA_perc_100000_ol_0_mul_1; Path=/; Domain=.bmfbovespa.com.br');
        //headers = headers.set('Date', 'Sat, 01 Aug 2020 16:42:33 GMT');
        //headers = headers.set('Content-Length', '269');
        //headers = headers.set('X-XSS-Protection', '1; mode=block');        
        //headers = headers.set('Set-Cookie', 'TS01871345=016e3b076f2f7b1f465a6b1145fd52b78cb4fa8fb234190af9f21d6c7ec78be1c6cf7193465b5b05d01d3905d6e5343ea31920196687cc0e9aa9eca937cd44ad4be7d8c436; Path=/');  
        //headers = headers.set('Set-Cookie', 'TS01e3f871=016e3b076f56638756556f73fc8047034906cdb6f234190af9f21d6c7ec78be1c6cf7193467a4e08f3e8dcf32a601954a58f9f9819ed1d86db60762984d5f80d7346807657; path=/; domain=.bmfbovespa.com.br');        
        return headers;
    }
}