import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ map} from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';
// import {getApiHash} from 'marvel-api-hash-generator';

@Injectable({
  providedIn: 'root'
})

export class MarvelApiService {

  PRIVATE_KEY = '97ddd45f1e346a34cfc579ff11c52b35bdccacf3'
  PUBLIC_KEY = '2fcd3bf6294fe222c07aa34d6b37b323';
  HASH = 'fed7002319f3c949c09793419e26ec8c';
  timeStamp = 1;
  BASE_URL = `https://gateway.marvel.com:443/v1/public/events`;
  SESSION= `ts=${this.timeStamp}&apikey=${this.PUBLIC_KEY}&hash=`;

  constructor(
    private http: HttpClient,
    ) { }

    getAllCharacters(): Observable<any>{
      const md5 = new Md5();

      const hash = md5.appendStr(this.timeStamp+this.PRIVATE_KEY+this.PUBLIC_KEY).end();

      return this.http.get<any>(this.BASE_URL+ "?"+this.SESSION + hash).pipe(map((data:any)=> data.data.results));
    }

    getAllCharactersId(comicId:any): Observable<any>{
      const md5 = new Md5();

      const hash = md5.appendStr(this.timeStamp+this.PRIVATE_KEY+this.PUBLIC_KEY).end();

      return this.http.get<any>(`${this.BASE_URL}/${comicId}/comics?limit=25&offset=1&${this.SESSION + hash}`).pipe(map((data:any)=> data.data.results));
    }
}
