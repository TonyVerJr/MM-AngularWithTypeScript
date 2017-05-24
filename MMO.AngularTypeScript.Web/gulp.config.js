module.exports = function () {

    var base = {
        webroot: "./wwwroot/",
        node_modules: "./node_modules/"
    };

    var config = {
        angular: base.node_modules + "@angular/**/*.js",

        appHtml: "./src/app/**/*.html",
        appJs: "./src/app/**/*.js",
        appJsMap: "./src/app/**/*.js.map",

        appIndex: "./src/index.html",
        appFavIcon: "./src/favicon.ico",

        systemJsConfig: "./src/systemjs.config.js",

        appDest: base.webroot + "app",
        appDestBase: base.webroot,

        js: base.webroot + "js/*.js",
        jsDest: base.webroot + 'js',

        css: base.webroot + "css/*.css",
        cssDest: base.webroot + 'css',

        lib: base.webroot + "lib/",

        node_modules: base.node_modules,

        angularWebApi: base.node_modules + "angular2-in-memory-web-api/*.js",
        corejs: base.node_modules + "core-js/client/shim*.js",
        zonejs: base.node_modules + "zone.js/dist/zone*.js",
        reflectjs: base.node_modules + "reflect-metadata/Reflect*.js",
        systemjs: base.node_modules + "systemjs/dist/*.js",
        rxjs: base.node_modules + "rxjs/**/*.js",
        jquery: base.node_modules + "jquery/dist/*.min.js",
        jasminejs: base.node_modules + "jasmine-core/lib/jasmine-core/*.*",

        bootstrapcss: base.node_modules + "bootstrap/dist/css/*.*",
        bootstrapjs: base.node_modules + "bootstrap/dist/js/*.min.js",
    };

    return config;
};