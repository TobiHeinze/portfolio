import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      image: './assets/img/join-laptop.png',
      codebase: 'JavaScript | HTML | CSS',
      description:
        'Task management tool inspired by the Kanban System. Easily create and organize tasks using drag-and-drop functions and assign them to users or categories.',
      link: 'https://tobias-heinze.com/join/',
      github: '',
      direction: false,
    },
    {
      name: 'Sharkie',
      image: './assets/img/sharkie-laptop.png',
      codebase: 'JavaScript (OOP) | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the orca.',
      link: 'https://tobias-heinze.com/sharkie/',
      github: '',
      direction: true,
    },
    {
      name: 'Pokédex',
      image: './assets/img/pokedex-laptop.png',
      codebase: 'JavaScript | HTML | CSS | API',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokémon information.',
      link: 'https://tobias-heinze.com/pokedex/',
      github: '',
      direction: false,
    },
  ];
}
