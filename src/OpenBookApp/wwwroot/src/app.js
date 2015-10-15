var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', './services/peopleService', './models/person'], function (require, exports, angular2_1, peopleService_1, person_1) {
    var App = (function () {
        function App(peopleService) {
            var _this = this;
            this.peopleService = peopleService;
            peopleService.people
                .subscribe(function (people) { return _this.people = people; });
        }
        App.prototype.saidHello = function ($event) {
            alert("You said hello to " + $event);
        };
        App = __decorate([
            angular2_1.Component({
                selector: 'my-app',
                bindings: [peopleService_1.PeopleService]
            }),
            angular2_1.View({
                template: "\n    <div>\n      <h2>Hello Angular2!</h2>\n      <my-person \n        *ng-for=\"#person of people\" \n        [name]=\"person.name\"\n        (hello)=\"saidHello($event)\">\n      </my-person>\n    </div>\n  ",
                directives: [angular2_1.CORE_DIRECTIVES, person_1.Person]
            })
        ], App);
        return App;
    })();
    exports.App = App;
});
