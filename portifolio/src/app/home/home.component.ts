import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../shared/interface/dadosPessoais.interface';
import { ResumeService } from '../shared/service/dados.service';
import { Experiencia } from '../shared/interface/expericencia.interface';
import { Educacao } from '../shared/interface/educação.interface';
import { Habilidades } from '../shared/interface/habilidades.interface';
import { Idiomas } from '../shared/interface/idiomas.interface';
import { Subscription } from 'rxjs';
import { faCode, faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dadosPessoais: DadosPessoais[] | undefined;
  public experiencias: Experiencia[] | undefined;
  public educacao: Educacao[] = [];
  public habilidades: Habilidades[] | undefined;
  public idiomas: Idiomas[] | undefined;
  public subscriptions: Subscription[] = [];
  public faCode = faCode;
  public faLinked = faL;

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

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  obterDadosPessoais() {
    const subscription = this.resumeService
    .getDados()
    .subscribe(
      (response) => {
        this.dadosPessoais = response
        console.log(this, 'dados pessoais')
      }
    )
    this.subscriptions.push(subscription)
  }

  obterExperiencias() {
    const subscription = this.resumeService
      .getExperiencias()
      .subscribe(
        (response) => {
          this.experiencias = response
          console.log(this.experiencias, 'experiencias')
        }
      )
      this.subscriptions.push(subscription)
  }

  obterEducacao() {
    const subscription = this.resumeService
      .getEducacao()
      .subscribe(
        (response) => {
        this.educacao = response
        console.log(this.educacao, 'educacao')
        })
        this.subscriptions.push(subscription)
  }

  obterHabilidades() {
    const subscription = this.resumeService
      .getHabilidades()
      .subscribe(
        (response) => {
          this.habilidades = response
          console.log(this.habilidades, 'habilidades')
        }
      )
      this.subscriptions.push(subscription)
  }

  obterIdiomas() {
    const subscription = this.resumeService
      .getIdiomas()
      .subscribe(
        (response) => {
          this.idiomas = response
          console.log(this.idiomas, 'idiomas')
        }
      )
      this.subscriptions.push(subscription)
  }

  public unsubscribeAll(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}


