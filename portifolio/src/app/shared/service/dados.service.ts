import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosPessoais } from '../interface/dadosPessoais.interface';
import { Educacao } from '../interface/educação.interface';
import { Experiencia } from '../interface/expericencia.interface';
import { Habilidades } from '../interface/habilidades.interface';
import { Idiomas } from '../interface/idiomas.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  // caso queira usar o mocky.io pegar o arquivo dentro da pasta assets e colocar no mocky.io
  // private readonly Dados = '';
  // caso queira usar o arquivo localmente, descomentar a linha abaixo e comentar a linha acima
  private readonly dados = '../assets/object.json'
  private readonly educacao = '../assets/educacao.json'
  private readonly experiencia = '../assets/experiencias.json'
  private readonly habilidades = '../assets/habilidades.json'
  private readonly idiomas = '../assets/idiomas.json'

  constructor(private http: HttpClient) { }

  getDados(): Observable<DadosPessoais> {
    return this.http.get<DadosPessoais>(this.dados);
  }
  getEducacao(): Observable<Educacao> {
    return this.http.get<Educacao>(this.educacao);
  }
  getExperiencias(): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.experiencia);
  }
  getHabilidades(): Observable<Habilidades> {
    return this.http.get<Habilidades>(this.habilidades);
  }
  getIdiomas(): Observable<Idiomas> {
    return this.http.get<Idiomas>(this.idiomas);
  }
}
