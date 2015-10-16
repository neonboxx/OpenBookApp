var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', './models/snippet'], function (require, exports, angular2_1, snippet_1) {
    var SnippetVm = (function (_super) {
        __extends(SnippetVm, _super);
        function SnippetVm() {
            _super.apply(this, arguments);
        }
        SnippetVm = __decorate([
            angular2_1.Component({
                selector: 'snippet',
                inputs: ['id', 'content'],
            }),
            angular2_1.View({
                template: "\n    <div>\n      <span>{{id}}</span>\n      <span>{{content}}</span>\n    </div>\n  "
            })
        ], SnippetVm);
        return SnippetVm;
    })(snippet_1.Snippet);
    exports.SnippetVm = SnippetVm;
});
