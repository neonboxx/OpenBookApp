define(["require", "exports", 'angular2/angular2', 'angular2/http', './components/snippet-list/snippet-list'], function (require, exports, angular2_1, http_1, snippet_list_1) {
    angular2_1.bootstrap(snippet_list_1.SnippetList, [http_1.HTTP_BINDINGS])
        .catch(function (err) { return console.error(err); });
});
