import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosPessoais } from '../interface/dadosPessoais.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  // caso queira usar o mocky.io pegar o arquivo dentro da pasta assets e colocar no mocky.io
  private readonly resumeUrl = 'https://run.mocky.io/v3/4e3148d1-49ca-4bcf-bf0e-92fd8369486d';
  // caso queira usar o arquivo localmente, descomentar a linha abaixo e comentar a linha acima
  // private readonly resumeUrl = '../assets/object.json';

  constructor(private http: HttpClient) { }

  getResume(): Observable<DadosPessoais> {
    return this.http.get<DadosPessoais>(this.resumeUrl);
  }
}
