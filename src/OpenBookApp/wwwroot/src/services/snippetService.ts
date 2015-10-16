//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class SnippetService {
    snippets;
    constructor(http: Http) {
        this.snippets = http.get('http://localhost:49629/api/snippet').map(res => res.json());
    }
}