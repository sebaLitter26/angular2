import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AutoresComponent} from './autores.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
                <courses></courses>
                <autores></autores>`,
    directives: [CoursesComponent,AutoresComponent]    //array 
})
export class AppComponent { }