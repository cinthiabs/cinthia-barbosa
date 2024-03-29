import { Component, signal } from '@angular/core';
import { IArticles } from '../../interface/IArticles.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  public arrayArticles = signal<IArticles[]>([
    {
      src:'assets/img/postman.png',
      alt:'How to export collection in Postman',
      title:'How to export collection in Postman',
      width:'100%',
      height:'100%',
      href:'https://dev.to/cinthiabs/how-to-export-files-in-postman-2mi7',
    },
    {
      src:'assets/img/githubpages.png',
      alt:'Deploy Angular website to GitHub Pages',
      title:'Deploy Angular website to GitHub Pages',
      width:'100%',
      height:'100%',
      href:'https://dev.to/cinthiabs/deploy-angular-website-to-github-pages-3lhj',
    },
    {
      src:'assets/img/githubpages.png',
      alt:'Deploy Angular website to GitHub Pages',
      title:'Deploy Angular website to GitHub Pages',
      width:'100%',
      height:'100%',
      href:'https://dev.to/cinthiabs/deploy-angular-website-to-github-pages-3lhj',
    }

  ])
}
