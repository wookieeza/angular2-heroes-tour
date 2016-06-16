import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from "./hero";
import { Router } from '@angular/router-deprecated';

//noinspection TypeScriptValidateTypes
@Component({
    selector: 'my-heroes',
    templateUrl:'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']

})
export class HeroesComponent implements OnInit{
    heroes = null;
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService){}

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail(){
        this.router.navigate(['HeroDetail',{id: this.selectedHero.id}]);
    }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

   
}
