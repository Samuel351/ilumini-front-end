import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Form } from '../../../shared/models/Form';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-form-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.scss'
})
export class FormDetailComponent implements OnInit {

  formService = inject(FormService);

  myForm?: Form;

  readonly id = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(
      map((params) => params.get('id')),
    ),
  );

  ngOnInit(): void {
    if(this.id())
      {
        this.formService.getFormById(this.id()!).subscribe(x => {
          this.myForm = x;
          console.log(x);
        })
      }
  }


  // isFormValid(): boolean {
  //   return Object.keys(this.answers).length === this.form.questions.length;
  // }

  // submitForm(): void {
  //   const response = Object.keys(this.answers).map((questionId) => ({
  //     questionId: questionId,
  //     optionId: this.answers[questionId],
  //     formInstanceId: 'mock-form-instance-id',
  //     recipientId: 'mock-recipient-id',
  //     recipient: 'Usuário Teste',
  //   }));

  //   console.log('Respostas enviadas:', response);
  //   alert('Respostas enviadas com sucesso!');
  // }
}
