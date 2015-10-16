//our root app component
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2'
import {SnippetService} from '../../services/snippetservice'
import {Snippet} from '../../models/snippet'

@Component({
    selector: 'snippet-list',
    bindings: [SnippetService]
})
@View({
    template: './snippet-list.html',
    directives: [CORE_DIRECTIVES, Snippet]
})
export class SnippetList {
    snippets;
    constructor(public peopleService: SnippetService) {
        peopleService.snippets
            .subscribe(snippets => this.snippets = snippets);
    }
}