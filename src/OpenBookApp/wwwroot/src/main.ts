//main entry point
import {bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {SnippetList} from './components/snippet-list/snippet-list'

bootstrap(SnippetList,  [HTTP_BINDINGS])
  .catch(err => console.error(err));