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
      alt:'Meu projeto',
      title:'Meu projeto',
      width:'100px',
      height:'51px',
      description:'descricao meu projeto',
      links:[
        {
          name:'Conheça o blog',
          href:'https://www.google.com',
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
