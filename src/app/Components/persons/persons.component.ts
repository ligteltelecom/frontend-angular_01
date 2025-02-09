import { CommonModule } from '@angular/common';
import { PersonModel } from '../../Models/PersonModels';
import { PersonService } from './../../Services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css',
})
export class PersonsComponent implements OnInit {
  persons: PersonModel[] = [];
  constructor(private pService: PersonService) {}

  ngOnInit(): void {
    this.pService.getPersons().subscribe((result) => {
      this.persons = result;
      console.log(result);
    });
  }

  onEdit(person: PersonModel) {
    console.log(person.id);
  }

  onDelete(pessoa: PersonModel) {
    this.pService.deletePerson(pessoa).subscribe(() => {
      this.pService.getPersons().subscribe((result) => {
        this.persons = result;
        console.log(result);
      });
    });
  }
}
