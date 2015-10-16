var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', '../../services/snippetservice', '../../models/snippet'], function (require, exports, angular2_1, snippetservice_1, snippet_1) {
    var SnippetList = (function () {
        function SnippetList(peopleService) {
            var _this = this;
            this.peopleService = peopleService;
            peopleService.snippets
                .subscribe(function (snippets) { return _this.snippets = snippets; });
        }
        SnippetList = __decorate([
            angular2_1.Component({
                selector: 'snippet-list',
                bindings: [snippetservice_1.SnippetService]
            }),
            angular2_1.View({
                template: './snippet-list.html',
                directives: [angular2_1.CORE_DIRECTIVES, snippet_1.Snippet]
            })
        ], SnippetList);
        return SnippetList;
    })();
    exports.SnippetList = SnippetList;
});
