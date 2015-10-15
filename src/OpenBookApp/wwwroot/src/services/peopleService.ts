//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
    people;
  constructor(http:Http) {
    this.people = http.get('api/people.json').map(res => res.json());
  }
}