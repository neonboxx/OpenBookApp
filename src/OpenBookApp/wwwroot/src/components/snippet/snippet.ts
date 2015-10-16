//a simple person component
import {Component, View, EventEmitter} from 'angular2/angular2'
@Component({
    selector: 'snippet-vm',
    inputs: ['id', 'content'],
    //outputs: ['hello']
})
@View({
    template: `<div>
      <span style="display:none;">{{id}}</span>
      <span>{{content}}</span>
    </div>`
})
export class SnippetVm{
    id: string;
    content: string;
}
