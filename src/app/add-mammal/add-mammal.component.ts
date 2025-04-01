import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { AddEntryService } from '../services/add-entry.service';

@Component({
  selector: 'app-add-mammal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-mammal.component.html',
})
export class AddMammalComponent {
  speciesForm = new FormGroup({
    species: new FormControl(''),
    funFact: new FormControl(''),
    wiki: new FormControl(''),
  });
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private addEntryService: AddEntryService
  ) {}

  ngOnInit() {
    this.speciesForm = this.fb.group({
      species: ['', Validators.required],
      funFact: ['', Validators.required],
      wiki: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.addEntryService.addEntry(
      '' + this.speciesForm.get('species')?.value,
      '' + this.speciesForm.get('funFact')?.value,
      '' + this.speciesForm.get('wiki')?.value
    );
  }

  addAnother() {
    this.isSubmitted = false;
  }
}
