var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var SnippetVm = (function () {
        function SnippetVm() {
        }
        SnippetVm = __decorate([
            angular2_1.Component({
                selector: 'snippet-vm',
                inputs: ['id', 'content'],
            }),
            angular2_1.View({
                template: "<div class=\"oaerror info\">\n                <strong>{{$index}}</strong>{{content}}\n            </div>"
            })
        ], SnippetVm);
        return SnippetVm;
    })();
    exports.SnippetVm = SnippetVm;
});
