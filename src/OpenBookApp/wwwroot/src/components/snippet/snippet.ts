//a simple person component
import {Component, View, EventEmitter} from 'angular2/angular2'
import {Snippet} from './models/snippet'
@Component({
    selector: 'snippet',
    inputs: ['id', 'content'],
    //outputs: ['hello']
})
@View({
    template: `
    <div>
      <span>{{id}}</span>
      <span>{{content}}</span>
    </div>
  `
})
export class SnippetVm extends Snippet{




}
