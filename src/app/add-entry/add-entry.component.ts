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
  templateUrl: './add-entry.component.html',
})
export class AddEntryComponent {
  entryForm = new FormGroup({
    topic: new FormControl(''),
    description: new FormControl(''),
    wiki: new FormControl(''),
  });
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private addEntryService: AddEntryService
  ) {}

  ngOnInit() {
    this.entryForm = this.fb.group({
      topic: ['', Validators.required],
      description: ['', Validators.required],
      wiki: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.addEntryService.addEntry(
      '' + this.entryForm.get('topic')?.value,
      '' + this.entryForm.get('description')?.value,
      '' + this.entryForm.get('wiki')?.value
    );
  }

  addAnother() {
    this.isSubmitted = false;
  }
}
