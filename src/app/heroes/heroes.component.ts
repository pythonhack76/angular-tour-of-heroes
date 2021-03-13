import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Wizard } from '../wizard';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   heroes = HEROES;
   //hero = 'Windostorm';
   hero: Hero = {
     id: 1,
     name: 'Windostorm'
   };

   wizard: Wizard = {
    id: 1,
    name: 'Merlino'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
