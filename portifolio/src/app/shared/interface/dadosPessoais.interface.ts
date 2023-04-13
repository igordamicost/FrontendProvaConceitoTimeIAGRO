import { Educacao } from "./educação.interface";
import { Experiencia } from "./expericencia.interface";
import { Habilidades } from "./habilidades.interface";
import { Idiomas } from "./idiomas.interface";

export interface DadosPessoais {
  nome: string,
  email: string,
  telefone: string,
  endereco: string,
  cep: string,
  mensagem: string,
  experiencia: Experiencia[],
  educacao: Educacao[],
  idiomas: Idiomas[],
  habilidades: Habilidades[]
}
