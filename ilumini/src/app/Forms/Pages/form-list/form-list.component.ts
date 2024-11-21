import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/models/Form';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss'
})
export class FormListComponent {

  forms: Form[] = [];
  formService = inject(FormService);

  constructor(){
    this.formService.getAll().subscribe(x => {
      this.forms = x;
    })
  }

}
