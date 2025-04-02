import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class AddEntryService {
  // private apiUrl = 'http://localhost:8080/api/v1/entries/';
  private apiUrl =
    'https://animals-service-96f362179112.herokuapp.com/api/v1/entries/';

  constructor(private http: HttpClient) {}

  async addEntry(species: string, description: string, wiki: string) {
    let data = await fetch(this.apiUrl + 'entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        topic: species,
        description: description,
        wiki: wiki,
      }),
    });
  }

  async updateEntryDescription(topic: string, description: string) {
    console.log('got to the service');
    let data = await fetch(this.apiUrl + topic, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        description: description,
      }),
    });
  }
}
