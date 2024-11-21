import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Form } from '../models/Form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  http = inject(HttpClient)
  baseUrl = "http://localhost:5041/api" + "/Form"

  createForm(form: Form) : Observable<Form>{
    return this.http.post<Form>(this.baseUrl, form);
  }

  getFormById(id: string) : Observable<Form>{
    return this.http.get<Form>(this.baseUrl+"/"+id);
  }

  getAll() : Observable<Form[]>{
    return this.http.get<Form[]>(this.baseUrl);
  }

  constructor() { }
}
