import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProject.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProject = signal<IProjects[]>([
    {
      src:'assets/img/projects/vfull.png',
      alt:'API Tracking',
      title:'API Tracking Order',
      width:'60px',
      height:'51px',
      description:'Este projeto consiste em uma API para consulta, inclusão de pedidos e alteração do status do pedido. Implementado autenticação JWT, arquitetura DDD (Domain-Driven Design) e Swagger para documentação.',
      links:[
        {
          name:'Conheça o projeto',
          href:'https://github.com/cinthiabs/api-tracking-order',
        },
      ],
    },
    {
      src:'assets/img/projects/vfull.png',
      alt:'Serviço Importador de XML da Nota Fiscal',
      title:'Serviço Importador de XML da Nota Fiscal',
      width:'60px',
      height:'51px',
      description:'Este projeto consiste em um serviço que realiza a leitura de arquivos XML de pedidos de nota fiscal para a base de dados a partir de um diretório. Implementado arquitetura DDD (Domain-Driven Design).',
      links:[
        {
          name:'Conheça o projeto',
          href:'https://github.com/cinthiabs/Service-Import-xml-files',
        },
      ],
    },
    {
      src:'assets/img/projects/vfull.png',
      alt:'Sistema Cadastro de Funcionários',
      title:'Sistema Cadastro de Funcionários',
      width:'100px',
      height:'51px',
      description:'Este projeto é uma aplicação desenvolvida em Angular (Single Page Application) permitindo o cadastro, atualização, visualização e exclusão de registros de funcionários através de uma API em .NET core. Foi implementado Cypress para testes end-to-end (E2E).',
      links:[
        {
          name:'Conheça o projeto',
          href:'https://github.com/cinthiabs/project_employee',
        },
      ],
    },
    {
      src:'assets/img/projects/vfull.png',
      alt:'Sistema Cadastro de Funcionários',
      title:'Sistema Cadastro de Funcionários',
      width:'100px',
      height:'51px',
      description:'Este projeto é uma aplicação desenvolvida em Angular (Single Page Application) permitindo o cadastro, atualização, visualização e exclusão de registros de funcionários através de uma API em .NET core. Foi implementado Cypress para testes end-to-end (E2E).',
      links:[
        {
          name:'Conheça o projeto',
          href:'https://github.com/cinthiabs/project_employee',
        },
      ],
    },
    {
      src:'assets/img/projects/vfull.png',
      alt:'Sistema Cadastro de Funcionários',
      title:'Sistema Cadastro de Funcionários',
      width:'100px',
      height:'51px',
      description:'Este projeto é uma aplicação desenvolvida em Angular (Single Page Application) permitindo o cadastro, atualização, visualização e exclusão de registros de funcionários através de uma API em .NET core. Foi implementado Cypress para testes end-to-end (E2E).',
      links:[
        {
          name:'Conheça o projeto',
          href:'https://github.com/cinthiabs/project_employee',
        },
      ],
    },
  ]);
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
