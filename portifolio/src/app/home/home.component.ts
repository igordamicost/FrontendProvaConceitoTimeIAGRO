import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../shared/interface/dadosPessoais.interface';
import { ResumeService } from '../shared/service/dados.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dadosPessoais: DadosPessoais | undefined;

  constructor(
    public resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.obterDadosPessoais()
  }

  obterDadosPessoais() {
  this.resumeService
    .getResume()
    .subscribe(
      (response) => {
        this.dadosPessoais = response;
      }
    )
  }

}


