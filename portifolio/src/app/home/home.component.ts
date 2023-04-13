import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../shared/interface/dadosPessoais.interface';
import { ResumeService } from '../shared/service/dados.service';
import { Experiencia } from '../shared/interface/expericencia.interface';
import { Educacao } from '../shared/interface/educação.interface';
import { Habilidades } from '../shared/interface/habilidades.interface';
import { Idiomas } from '../shared/interface/idiomas.interface';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dadosPessoais: DadosPessoais | undefined;
  public experiencias: Experiencia | undefined;
  public educacao: any[] = [];
  public habilidades: Habilidades | undefined;
  public idiomas: Idiomas | undefined;
  public subscriptions: Subscription[] = [];


  constructor(
    public resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.obterDadosPessoais()
    this.obterExperiencias()
    this.obterEducacao()
    this.obterIdiomas()
    this.obterHabilidades()
  }

  obterDadosPessoais() {
  this.resumeService
    .getDados()
    .subscribe(
      (response) => {
        this.dadosPessoais = response
        console.log(this.dadosPessoais)
      }
    )
  }

  obterExperiencias() {
    this.resumeService
      .getExperiencias()
      .subscribe(
        (response) => {
          this.experiencias = response
          console.log(this.experiencias)
        }
      )
  }

  obterEducacao() {
    const subscription = this.resumeService
      .getEducacao()
      .subscribe((response) => {
        this.educacao.push(response)
        console.log(this.educacao)
        })
        this.subscriptions.push(subscription)
  }

  obterHabilidades() {
    this.resumeService
      .getHabilidades()
      .subscribe(
        (response) => {
          this.habilidades = response
          console.log(this.habilidades)
        }
      )
  }

  obterIdiomas() {
    this.resumeService
      .getIdiomas()
      .subscribe(
        (response) => {
          this.idiomas = response
        }
      )
  }

}


