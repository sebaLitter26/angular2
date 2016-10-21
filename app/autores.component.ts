import {Component} from 'angular2/core'
import {AutorService} from './autor.service'

@Component(             //function 
     {                  // object
    selector: 'autores',            //css component
    template: ` <h2>Autores</h2>     
                {{title}}
                <ul>
                    <li *ngFor="#autor of autores">
                    {{ autor }}
                    </li>
                </ul>
                `,
    providers: [AutorService]   

})


export class AutoresComponent {
     title: string = "El titulo de la pagina de Autores";
     autores;

     constructor(autorService: AutorService){
         this.autores = autorService.getAutores();
     };
}