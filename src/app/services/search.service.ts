import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Entry {
  topic: string;
  description: string;
  wiki: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // private apiUrl = 'http://localhost:8080/api/v1/mammals/';
  private apiUrl =
    'https://animals-service-96f362179112.herokuapp.com/api/v1/mammals';

  constructor(private http: HttpClient) {}

  async getAllEntries(): Promise<Entry> {
    let data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async getEntryByTopic(species: string): Promise<any | undefined> {
    console.log('ok im in the service method');
    let data = await fetch(this.apiUrl + '/' + species);
    return (await data.json()) ?? {};
  }
}
