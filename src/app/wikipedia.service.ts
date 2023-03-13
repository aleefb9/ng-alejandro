import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wikipedia } from './wikipedia';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }
  
  getWikipedia(url: string): Observable<Wikipedia[]> {
    return this.http.get<Wikipedia[]>(url);
  }

  verContribuidores(){
    
  }
}