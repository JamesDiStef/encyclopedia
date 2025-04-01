import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { AddMammalService } from '../services/add-mammal.service';

@Component({
    selector: 'app-add-mammal',
    imports: [ReactiveFormsModule],
    templateUrl: './add-mammal.component.html'
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
    private addMammalService: AddMammalService
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
    this.addMammalService.addMammal(
      '' + this.speciesForm.get('species')?.value,
      '' + this.speciesForm.get('funFact')?.value,
      '' + this.speciesForm.get('wiki')?.value
    );
  }

  addAnother() {
    this.isSubmitted = false;
  }
}
