var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Person = (function () {
        function Person() {
            this.hello = new angular2_1.EventEmitter();
        }
        Person.prototype.sayHello = function (e) {
            this.hello.next(this.name);
        };
        Person = __decorate([
            angular2_1.Component({
                selector: 'my-person',
                inputs: ['name'],
                outputs: ['hello']
            }),
            angular2_1.View({
                template: "\n    <div>\n      <span>{{name}}</span>\n      <button (click)=\"sayHello()\">Say Hello</button>\n    </div>\n  "
            })
        ], Person);
        return Person;
    })();
    exports.Person = Person;
});
