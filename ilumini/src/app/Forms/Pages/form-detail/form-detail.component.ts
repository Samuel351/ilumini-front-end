import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-detail',
  standalone: true,
  imports: [],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.scss'
})
export class FormDetailComponent {
  form: any = {
    name: 'Feedback de Atendimento',
    description: 'Formulário para coletar opiniões sobre a qualidade do atendimento.',
    questions: [
      {
        id: 'q1',
        statement: 'Como você avalia o atendimento que recebeu?',
        options: [
          { id: 'o1', statement: 'Excelente' },
          { id: 'o2', statement: 'Bom' },
          { id: 'o3', statement: 'Regular' },
          { id: 'o4', statement: 'Ruim' },
        ],
      },
      {
        id: 'q2',
        statement: 'Você foi atendido dentro do prazo esperado?',
        options: [
          { id: 'o5', statement: 'Sim' },
          { id: 'o6', statement: 'Não' },
        ],
      },
      {
        id: 'q3',
        statement: 'Você recomendaria nosso serviço para outra pessoa?',
        options: [
          { id: 'o7', statement: 'Sim' },
          { id: 'o8', statement: 'Não' },
        ],
      },
    ],
  };
  answers: { [questionId: string]: string } = {};
  loading = true;
  error: string | null = null;

  isFormValid(): boolean {
    return Object.keys(this.answers).length === this.form.questions.length;
  }

  submitForm(): void {
    const response = Object.keys(this.answers).map((questionId) => ({
      questionId: questionId,
      optionId: this.answers[questionId],
      formInstanceId: 'mock-form-instance-id',
      recipientId: 'mock-recipient-id',
      recipient: 'Usuário Teste',
    }));

    console.log('Respostas enviadas:', response);
    alert('Respostas enviadas com sucesso!');
  }
}
