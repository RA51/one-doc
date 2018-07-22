import { Inject, Injectable } from "@angular/core";
import { Socket } from "net";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject } from "@angular/core/src/render3";

@Injectable()
export class CoreServices {
    
    public endspoints:any={
        'ONEDOC_SOCKET': {'socket':'', 'SOCKET': new Subject<string>()}
    };
    public constructor(public http: HttpClient){
        
    }
    public httpGet(url){
        const authorizationHeaders = { 'Authorization': localStorage.getItem('user') };
        return this.http.get('http://localhost:8080/' + url);
    }
    public httpPost(url,body){
        const authorizationHeaders = { 'Authorization': localStorage.getItem('user') };
        return this.http.post('http://localhost:8080/' + url,body);
    }
}