//a simple service
import {Injectable, QueryList} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {SnippetVm} from 'src/components/snippet/snippet'
@Injectable()
export class SnippetService {
    snippets: any;
    constructor(http: Http) {
        this.snippets = http.get('http://localhost:49629/api/snippet').map(res => res.json());
    }
}