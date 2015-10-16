//a simple person component
import {Component, View, EventEmitter} from 'angular2/angular2'
@Component({
    selector: 'snippet-vm',
    inputs: ['id', 'content'],
    //outputs: ['hello']
})
@View({
        template: `<div class="oaerror info">
                <strong>{{$index}}</strong>{{content}}
            </div>`
})
export class SnippetVm{
    id: string;
    content: string;
}
