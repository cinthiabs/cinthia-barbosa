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
        strong:'Desenvolvedora de Sistema Pleno',
        p:'Edesoft | Set 2020 - Present'
      },
      text:'<p>Colaboração com o time de desenvolvedores no setor Logístico.</p><p>Contribuição no desenvolvimento em sistemas internos (Front end - Angular/ Back end - API .Net Core)</p><p>Desenvolvimento de soluções para importação e exportação de dados, incluindo xml, txt, csv e json.</p><p>Criação de documentações detalhadas e estabelecimento de processos padronizados.</p><p>Liderança no desenvolvimento na área Implantação de Clientes em serviços, APIs, WebService, e conexão com FTP e SFTP.</p><hr><p>Colaboração com o time de qualidade no sistema ERP.</p><p>Desenvolvimento dos cenários de testes usando a ferramenta Test Plan no Devops.</p><p>Testes de caixa preta, unidade, regressão e funcionais.</p>',
    },
    {
      summary:{
        strong:'Desenvolvedora .NET',
        p:'Sequoia | Set 2020 - 2023'
      },
      text:'<p>Colaboração com time de desenvolvedores Back End no setor Logístico.</p><p>Desenvolvimento e melhorias em Sistemas C#/.NET, API e Web Service.</p><p>Desenvolvimento e manutenção de Stored Procedure, Queries, Functions e Jobs SQL Server.</p><p>Suporte a sistemas legados.</p>'
    },
    {
      summary:{
        strong:'Analista de suporte técnico',
        p:'Cast Group | Set 2019 - 2020'
      },
      text:'<p>Acompanhamento de suporte aos usuários na área de TI. Auxiliar a operação técnica em TI, Funções:</p><p>- Abertura do incidente BMC Remedy resolvendo problemas técnicos.<p/><p>- Permissões de usuário via Active Directory AD.</p><p>- Controle Remoto, Citrix VDI, VPN.</p><p>-  Reparação, configuração, suporte em Pacote Office.</p>'
    }
  ])
}
