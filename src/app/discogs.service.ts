import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscogsService {

  constructor(private http: HttpClient) { }

  getCollection(): Observable<any>{
    return this.http.get("https://api.discogs.com/users/ausamerika/collection/folders/0/releases");
  }
}
