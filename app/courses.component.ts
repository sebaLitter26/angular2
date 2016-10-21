import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component(             //function 
     {                  // object
    selector: 'courses',            //css component
    template: `<h2>Cursos</h2>     
                {{title}}
                <input type="text" autoGrow />
                <ul>
                    <li *ngFor="#course of courses">
                    {{ course }}
                    </li>
                </ul>
                `,
    providers: [CourseService],
    directives: [AutoGrowDirective]

})

export class CoursesComponent {
     title: string = "El titulo de la pagina de cursos";
     courses;

     constructor(courseService: CourseService){
         this.courses = courseService.getCourses();
     };

}
