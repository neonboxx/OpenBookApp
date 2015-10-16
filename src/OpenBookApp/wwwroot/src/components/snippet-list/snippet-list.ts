//our root app component
import {Component, View, CORE_DIRECTIVES, QueryList} from 'angular2/angular2'
import {SnippetService} from '../../services/snippetservice'
import {SnippetVm} from '../../components/snippet/snippet'

@Component({
    selector: 'snippet-list',
    bindings: [SnippetService]
})
@View({
    templateUrl: 'src/components/snippet-list/snippet-list.html',
    directives: [CORE_DIRECTIVES, SnippetVm]
})
export class SnippetList {
    snippets: Array<SnippetVm>;
    constructor(public snippetService: SnippetService) {
        snippetService.snippets
            .subscribe(snippets => this.snippets = snippets);
    }
}