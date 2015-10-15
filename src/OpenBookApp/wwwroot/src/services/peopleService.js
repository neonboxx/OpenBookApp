var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var PeopleService = (function () {
        function PeopleService(http) {
            this.people = http.get('api/people.json').map(function (res) { return res.json(); });
        }
        PeopleService = __decorate([
            angular2_1.Injectable()
        ], PeopleService);
        return PeopleService;
    })();
    exports.PeopleService = PeopleService;
});
