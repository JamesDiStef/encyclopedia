import { Component, inject } from '@angular/core';
import { SelectedAnimalComponent } from './selected-animal/selected-animal.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Animal, SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  imports: [SelectedAnimalComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  providers: [HttpClient],
})
export class SearchComponent {
  isSelected = false;
  applyForm = new FormGroup({
    species: new FormControl(''),
  });

  query: string = 'abb';
  result!: Animal | undefined;

  url = 'http://localhost:3000/animals';

  searchService: SearchService = inject(SearchService);
  animalNotFound: boolean = false;

  constructor() {}

  async go() {
    let animal = await this.searchService.getAnimalBySpecies(
      '' + this.applyForm.get('species')?.value
    );
    if (animal?.species) {
      this.result = animal;
      this.animalNotFound = false;
    } else this.animalNotFound = true;
    this.isSelected = true;
  }
}
