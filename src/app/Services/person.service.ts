import { PersonModel } from './../Models/PersonModels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private apiUrl = 'http://localhost:5215/person';
  constructor(private http: HttpClient) {}

  getPersons(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(this.apiUrl);
  }

  deletePerson(pessoa: PersonModel): Observable<PersonModel> {
    return this.http.delete<PersonModel>(`${this.apiUrl}/${pessoa.id}`);
  }
}
