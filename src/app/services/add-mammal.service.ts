import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './search.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class AddMammalService {
  // private apiUrl = 'http://localhost:8080/api/v1/mammals/';
  private apiUrl =
    'https://animals-service-96f362179112.herokuapp.com/api/v1/mammals/';

  constructor(private http: HttpClient) {}

  async addMammal(species: string, description: string, wiki: string) {
    let data = await fetch(this.apiUrl + 'mammal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        species: species,
        description: description,
        wiki: wiki,
      }),
    });
  }

  async updateMammalDescription(species: string, description: string) {
    console.log('got to the service');
    let data = await fetch(this.apiUrl + species, {
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
