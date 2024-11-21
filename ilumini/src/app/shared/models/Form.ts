export interface Form {
  id?: string
  name: string
  description: string
  questions: Question[]
}

export interface Question {
  id?: string,
  formId?: string
  statement: string
  position: number
  isOpcional: boolean
  options: Option[]
}

export interface Option {
  id?: string,
  questionId?: string
  statement: string
  position: number
}
