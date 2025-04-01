import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Animal {
  species: string;
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

  async getAllAnimals(): Promise<Animal> {
    let data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async getAnimalBySpecies(species: string): Promise<Animal | undefined> {
    let data = await fetch(this.apiUrl + '/' + species);
    return (await data.json()) ?? {};
  }
}
