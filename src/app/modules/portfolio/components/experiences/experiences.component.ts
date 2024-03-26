import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]> ([
    {
      summary:{
        strong:'Desenvolvedora de sistema Pleno',
        p:'Edesoft | Set 2020 - Present'
      },
      text:'<p>Colaboração com o time de desenvolvedores no setor Logístico.</p><p>Contribuição no desenvolvimento em sistemas internos (Front end - Angular/ Back end - API .Net Core)</p>',
    },
    {
      summary:{
        strong:'Desenvolvedora .Net',
        p:'Sequoia | Set 2020 - 2023'
      },
      text:'<p>Acompanhamento de suporte aos usuários na área de TI. Auxiliar a operação técnica em TI.</p>'
    },
    {
      summary:{
        strong:'Analista de suporte técnico',
        p:'Sequoia | Set 2019 - 2020'
      },
      text:'<p>Acompanhamento de suporte aos usuários na área de TI. Auxiliar a operação técnica em TI.</p>'
    }
  ])
}
