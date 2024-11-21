import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form, Option } from '../../../shared/models/Form';
import { FormService } from '../../../shared/services/form.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, DragDropModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  formulario: FormGroup;
  formService = inject(FormService);
  router = inject(Router);
  escalas: Option[] = [
  {
    position: 0,
    statement: "Concordo totalmente",
  },
  {
    position: 1,
    statement: "Concordo",
  },
  {
    position: 2,
    statement: "Não concordo, nem discordo",
  },
  {
    position: 3,
    statement: "Discordo",
  },
  {
    position: 4,
    statement: "Discordo totalmente",
  },
];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', Validators.required], // Título do formulário
      description: [''], // Descrição do formulário (opcional)
      questions: this.fb.array([]), // Lista de perguntas
    });
  }

  // Getter para acessar as perguntas
  get perguntas(): FormArray {
    return this.formulario.get('questions') as FormArray;
  }

  // Adiciona uma nova pergunta
  adicionarPergunta(): void {
    const perguntaForm = this.fb.group({
      statement: [''], // Título da pergunta
    });
    this.perguntas.push(perguntaForm);
  }

  // Remove uma pergunta pelo índice
  removerPergunta(index: number): void {
    this.perguntas.removeAt(index);
  }

  // Reordena as perguntas
  reordenarPerguntas(event: CdkDragDrop<FormGroup[]>): void {
    const perguntasArray = this.perguntas.controls;
    moveItemInArray(perguntasArray, event.previousIndex, event.currentIndex);
  }

  // Salva o formulário
  onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Formulário Criado:', this.formulario.value);

      var form = this.formulario.value as Form
      var count
      form.questions.forEach((x, index) => {
        x.isOpcional = false;
        x.position = index;
        x.options = this.escalas;
      })

      console.log(form);

      this.formService.createForm(form).subscribe(x => {
        alert('Formulário salvo com sucesso!');
        this.router.navigate(['form']);
      });
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  goToForm(){
    this.onSubmit();
  }
}
