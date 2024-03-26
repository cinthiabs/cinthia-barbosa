import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowlegde.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Icone de conhecimento de html'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Icone de conhecimento de css'
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'Icone de conhecimento de sql'
    },
    {
      src: 'assets/icons/knowledge/cloud.svg',
      alt: 'Icone de conhecimento de cloud'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de angular'
    }
  ])
}
