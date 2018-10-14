import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export  class CoreServices {
    
    public endspoints:any={
        'ONEDOC_SOCKET': {'socket':'', 'SOCKET': new Subject<string>()}
    };
    public constructor(public http: HttpClient){
        
    }
    public httpGet(url){
        const authorizationHeaders = { 'Authorization': localStorage.getItem('user') };
        return this.http.get('http://localhost:420/api/' + url);
    }
    public httpPost(url,body){

        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
             });    
             let options = {
            headers: httpHeaders
             };        
        const authorizationHeaders = { 'Authorization': localStorage.getItem('user') };
        // return this.http.post('http://localhost:8080/' + url,body, options);
        return this.http.post('http://localhost:4200/api/' + url,body, options);
        
    }
}