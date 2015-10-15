//our root app component
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {PeopleService} from './services/peopleService'
import {Person} from './models/person'

@Component({
  selector: 'my-app',
  bindings: [PeopleService]
})
@View({
  template: `
    <div>
      <h2>Hello Angular2!</h2>
      <my-person 
        *ng-for="#person of people" 
        [name]="person.name"
        (hello)="saidHello($event)">
      </my-person>
    </div>
  `,
  directives: [CORE_DIRECTIVES, Person]
})
export class App {
  people;
  constructor(public peopleService:PeopleService) {
    peopleService.people
      .subscribe(people => this.people = people);
  }
  saidHello($event){
    alert(`You said hello to ${$event}`)
  }
}