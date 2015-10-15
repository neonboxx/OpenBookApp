define(["require", "exports", 'angular2/angular2', 'angular2/http', './app'], function (require, exports, angular2_1, http_1, app_1) {
    angular2_1.bootstrap(app_1.App, [http_1.HTTP_BINDINGS])
        .catch(function (err) { return console.error(err); });
});
