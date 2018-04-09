webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown\n            </button>\n            <div class=\"dropdown-menu\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <nav>\n        <a>\n          <img src=\"assets/vinil_disc_image.gif\" height=\"250px\" width=\"310px\"/>\n        </a>\n      </nav>\n    </div>\n    <div class=\"col-lg-6\">\n      <music-player-component></music-player-component>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__genre_service__ = __webpack_require__("../../../../../src/app/genre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__in_memory_genre_data_service__ = __webpack_require__("../../../../../src/app/in-memory-genre-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__music_music_module__ = __webpack_require__("../../../../../src/app/music/music.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__in_memory_genre_data_service__["a" /* InMemoryGenreDataService */], { dataEncapsulation: false }),
                __WEBPACK_IMPORTED_MODULE_8__music_music_module__["a" /* MusicModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__genre_service__["a" /* GenreService */], __WEBPACK_IMPORTED_MODULE_7__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/genre.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var GenreService = (function () {
    function GenreService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.genresUrl = 'api/genres'; // URL to web api
    }
    GenreService.prototype.getGenreById = function (id) {
        var url = this.genresUrl + "/" + id;
        console.log("get genre by id request: " + url);
        return this.http.get(url);
    };
    //todo в реальном серисе реализовать возврат конкретного жанра по имени (в mock сервисе возвращаются все похожие)
    GenreService.prototype.getGenreByName = function (name) {
        var url = this.genresUrl + "?name=" + name;
        console.log("get genre by name request: " + url);
        return this.http.get(url);
    };
    GenreService.prototype.getGenres = function (mainGenre) {
        var url = this.genresUrl + "?main=" + mainGenre.id;
        console.log("get genres request: " + url);
        return this.http.get(url);
    };
    GenreService.prototype.getMainGenres = function () {
        var emptyId = -9;
        var url = this.genresUrl + "?main=" + emptyId;
        console.log("get main genres request: " + url);
        return this.http.get(url);
    };
    GenreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-genre-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryGenreDataService; });
var InMemoryGenreDataService = (function () {
    function InMemoryGenreDataService() {
    }
    InMemoryGenreDataService.prototype.createDb = function () {
        var genres = [
            { id: 1, name: 'Ambient', main: -9 },
            { id: 2, name: 'Ambient Dub', main: 1 },
            { id: 3, name: 'Dark Ambient', main: 1 },
            { id: 4, name: 'Dungeon Synth', main: 1 },
            { id: 5, name: 'Space Ambient', main: 1 },
            { id: 6, name: 'Tribal Ambient', main: 1 },
            { id: 7, name: 'Folk', main: -9 },
            { id: 8, name: 'Contemporary Folk', main: 7 },
            { id: 9, name: 'Traditional Folk Music', main: 7 }
        ];
        var tracks = [
            {
                id: 1, name: 'Beautiful Lie', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 227,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/01%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Beautiful%20Lie.mp3'
            },
            {
                id: 2, name: 'Their War Here', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 276,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/02%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Their%20War%20Here.mp3'
            },
            {
                id: 3, name: 'The Red Capes Are Coming', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 212,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/03%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20The%20Red%20Capes%20Are%20Coming.mp3'
            },
            {
                id: 4, name: 'Day Of The Dead', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 242,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/04%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Day%20Of%20The%20Dead.mp3'
            },
            {
                id: 5, name: 'Must There Be A Superman?', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 243,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/05%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Must%20There%20Be%20A%20Superman_.mp3'
            },
            {
                id: 6, name: 'New Rules', songer: 'Hans Zimmer', album: 'Batman V Superman: Dawn Of Justice',
                duration: 244,
                cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
                url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/06%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20New%20Rules.mp3'
            },
        ];
        return { genres: genres, tracks: tracks };
    };
    return InMemoryGenreDataService;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/music/TrackIterator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackIterator; });
var TrackIterator = (function () {
    function TrackIterator(tracks) {
        this.tracks = tracks;
        this.current = 0;
        this.lastReturnedIndex = -1;
        this.size = tracks.length;
    }
    TrackIterator.prototype.next = function () {
        this.lastReturnedIndex = this.current;
        return this.tracks[this.current++];
    };
    TrackIterator.prototype.prev = function () {
        this.lastReturnedIndex -= 1;
        this.current -= 1;
        return this.tracks[this.lastReturnedIndex];
    };
    TrackIterator.prototype.hasNext = function () {
        return this.current != this.size;
    };
    TrackIterator.prototype.hasPrev = function () {
        return this.lastReturnedIndex > 0;
    };
    TrackIterator.prototype.lastReturned = function () {
        return this.tracks[this.lastReturnedIndex];
    };
    TrackIterator.prototype.hasLastReturned = function () {
        return this.lastReturnedIndex > 0;
    };
    return TrackIterator;
}());



/***/ }),

/***/ "../../../../../src/app/music/music-details/music-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.details h3{\r\n  text-align: center;\r\n  padding: 50px 10px;\r\n  margin: 0;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music-details/music-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\r\n  <h3>{{title}}</h3>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/music/music-details/music-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicDetailsComponent = (function () {
    function MusicDetailsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MusicDetailsComponent.prototype, "title", void 0);
    MusicDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'music-details',
            template: __webpack_require__("../../../../../src/app/music/music-details/music-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/music/music-details/music-details.component.css")],
        })
    ], MusicDetailsComponent);
    return MusicDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music-player-component/complex-music-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music-player-component/complex-music-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"backgroundStyle\">\r\n  <music-details\r\n    [title]=\"title\"\r\n  ></music-details>\r\n\r\n  <music-player\r\n    (backward)=\"handleBackward()\"\r\n    (forward)=\"handleForward()\"\r\n    (pauseplay)=\"handlePausePlay()\"\r\n    (stop)=\"handleStop()\"\r\n    [paused]=\"paused\"\r\n  ></music-player>\r\n\r\n  <music-progress\r\n    [current]=\"position\"\r\n    [elapsed]=\"elapsed\"\r\n    [total]=\"duration\"\r\n  ></music-progress>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/music/music-player-component/complex-music-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexMusicPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_music_service__ = __webpack_require__("../../../../../src/app/music/shared/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TrackIterator__ = __webpack_require__("../../../../../src/app/music/TrackIterator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplexMusicPlayerComponent = (function () {
    function ComplexMusicPlayerComponent(musicService) {
        this.musicService = musicService;
        this.paused = true;
    }
    ComplexMusicPlayerComponent.prototype.ngOnInit = function () {
        console.log("Player init");
        this.loadTracks();
        this.musicService.audio.onended = this.handleEnded.bind(this);
        this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
        this.paused = true;
    };
    ComplexMusicPlayerComponent.prototype.loadTracks = function () {
        var _this = this;
        this.musicService.getRandomTracks().subscribe(function (tracks) {
            console.log("Player component: loaded traks: " + JSON.stringify(tracks));
            _this.tracks = new __WEBPACK_IMPORTED_MODULE_2__TrackIterator__["a" /* TrackIterator */](tracks);
            _this.setTrack(_this.tracks.next());
        });
    };
    ComplexMusicPlayerComponent.prototype.setTrack = function (track) {
        this.musicService.load(track.url);
        this.title = track.name;
        if (!this.paused) {
            this.musicService.audio.play();
        }
    };
    ComplexMusicPlayerComponent.prototype.handleEnded = function (e) {
        console.log("handle ended");
        this.playNextTrack();
    };
    ComplexMusicPlayerComponent.prototype.handleForward = function () {
        console.log("handle forward");
        this.playNextTrack();
    };
    ComplexMusicPlayerComponent.prototype.playNextTrack = function () {
        if (this.tracks.hasNext()) {
            this.setTrack(this.tracks.next());
        }
        else {
            this.loadTracks();
        }
    };
    ComplexMusicPlayerComponent.prototype.handlePausePlay = function () {
        console.log("hande pause/play");
        if (this.musicService.audio.paused) {
            this.paused = false;
            this.musicService.audio.play();
        }
        else {
            this.paused = true;
            this.musicService.audio.pause();
        }
    };
    ComplexMusicPlayerComponent.prototype.handleStop = function () {
        console.log("handle stop");
        this.musicService.audio.pause();
        this.musicService.audio.currentTime = 0;
        this.paused = true;
    };
    ComplexMusicPlayerComponent.prototype.handleBackward = function () {
        console.log("handle backward");
        this.playPrevTrack();
    };
    ComplexMusicPlayerComponent.prototype.playPrevTrack = function () {
        console.log("PlayPrev: prev track");
        if (this.tracks.hasPrev()) {
            this.setTrack(this.tracks.prev());
        }
        else {
            this.loadTracks();
        }
    };
    ComplexMusicPlayerComponent.prototype.handleTimeUpdate = function (e) {
        console.log("handle time update");
        this.timeUpdate();
    };
    ComplexMusicPlayerComponent.prototype.timeUpdate = function () {
        var elapsed = this.musicService.audio.currentTime;
        var duration = this.musicService.audio.duration;
        this.elapsed = this.musicService.formatTime(elapsed);
        if (duration > 0) {
            this.position = elapsed / duration;
            this.duration = this.musicService.formatTime(duration);
        }
        else {
            var track = this.tracks.lastReturned();
            this.duration = this.musicService.formatTime(track.duration);
            this.position = 0;
        }
    };
    ComplexMusicPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'music-player-component',
            template: __webpack_require__("../../../../../src/app/music/music-player-component/complex-music-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/music/music-player-component/complex-music-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_music_service__["a" /* MusicService */]])
    ], ComplexMusicPlayerComponent);
    return ComplexMusicPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music-player/music-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player{\r\n  text-align: center;\r\n  margin-top: 40px;\r\n}\r\n\r\n.player div{\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n.player .player__backward button, .player .player__forward button{\r\n  background: transparent;\r\n  border: 1px solid rgb(190,190,190);\r\n  color: rgb(190,190,190);\r\n  width: 75px;\r\n  height: 75px;\r\n  border-radius: 100%;\r\n  font-size: 35px;\r\n  outline: none;\r\n}\r\n\r\n.player .player__backward button{\r\n  border-left: none;\r\n}\r\n\r\n.player .player__forward button{\r\n  border-right: none;\r\n}\r\n\r\n.player .player__main button:hover, .player .player__backward button:hover, .player .player__forward button:hover{\r\n  color: rgb(190,190,190);\r\n  border: 1px solid rgb(190,190,190);\r\n}\r\n\r\n.player .player__main {\r\n  border: 1px solid rgb(190,190,190);\r\n}\r\n\r\n.player .player__main button {\r\n  color: rgb(190,190,190);\r\n  background: transparent;\r\n  width: 75px;\r\n  height: 75px;\r\n  border: none;\r\n  font-size: 35px;\r\n  outline: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music-player/music-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\r\n  <div class=\"player__backward\">\r\n    <button (click)=\"backward.emit()\"><i class=\"fa fa-backward\"></i></button>\r\n  </div>\r\n\r\n  <div class=\"player__main\">\r\n    <button *ngIf=\"paused\" (click)=\"pauseplay.emit()\"><i class=\"fa fa-play\"></i></button>\r\n    <button *ngIf=\"!paused\" (click)=\"pauseplay.emit()\"><i class=\"fa fa-pause\"></i></button>\r\n    <button (click)=\"stop.emit()\"><i class=\"fa fa-stop\"></i></button>\r\n  </div>\r\n\r\n  <div class=\"player__forward\">\r\n    <button (click)=\"forward.emit()\"><i class=\"fa fa-forward\"></i></button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/music/music-player/music-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicPlayerComponent = (function () {
    function MusicPlayerComponent() {
        this.backward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.pauseplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.forward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.stop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "paused", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "backward", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "pauseplay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "forward", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], MusicPlayerComponent.prototype, "stop", void 0);
    MusicPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'music-player',
            template: __webpack_require__("../../../../../src/app/music/music-player/music-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/music/music-player/music-player.component.css")],
        })
    ], MusicPlayerComponent);
    return MusicPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music-progress/music-progress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n  text-align: center;\r\n  margin-top: 40px;\r\n  color: white;\r\n  background-color: transparent;\r\n  display: block;\r\n}\r\n\r\n.progress progress[value] {\r\n  /* Reset the default appearance */\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n\r\n  width: 390px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.progress progress[value]::-webkit-progress-bar {\r\n  background-color: #eee;\r\n  border-radius: 2px;\r\n  box-shadow: 0 2px 5px rgb(96,96,96) inset;\r\n}\r\n\r\n.progress progress[value]::-webkit-progress-value {\r\n  background-color: rgb(96,96,96);\r\n  border-radius: 2px;\r\n  background-size: 35px 20px, 100% 100%, 100% 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music-progress/music-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <span class=\"player__time-elapsed\">{{elapsed}}</span>\r\n  <progress\r\n    value=\"{{current}}\"\r\n    max=\"1\"></progress>\r\n  <span class=\"player__time-total\">{{total}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/music/music-progress/music-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicProgressComponent = (function () {
    function MusicProgressComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MusicProgressComponent.prototype, "elapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MusicProgressComponent.prototype, "total", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], MusicProgressComponent.prototype, "current", void 0);
    MusicProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'music-progress',
            template: __webpack_require__("../../../../../src/app/music/music-progress/music-progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/music/music-progress/music-progress.component.css")],
        })
    ], MusicProgressComponent);
    return MusicProgressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/music/music.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_player_music_player_component__ = __webpack_require__("../../../../../src/app/music/music-player/music-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_details_music_details_component__ = __webpack_require__("../../../../../src/app/music/music-details/music-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_progress_music_progress_component__ = __webpack_require__("../../../../../src/app/music/music-progress/music-progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__music_player_component_complex_music_player_component__ = __webpack_require__("../../../../../src/app/music/music-player-component/complex-music-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_music_service__ = __webpack_require__("../../../../../src/app/music/shared/music.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MusicModule = (function () {
    function MusicModule() {
    }
    MusicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__music_details_music_details_component__["a" /* MusicDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__music_player_music_player_component__["a" /* MusicPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__music_progress_music_progress_component__["a" /* MusicProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_6__music_player_component_complex_music_player_component__["a" /* ComplexMusicPlayerComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__music_details_music_details_component__["a" /* MusicDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__music_player_music_player_component__["a" /* MusicPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__music_progress_music_progress_component__["a" /* MusicProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_6__music_player_component_complex_music_player_component__["a" /* ComplexMusicPlayerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__shared_music_service__["a" /* MusicService */]
            ]
        })
    ], MusicModule);
    return MusicModule;
}());



/***/ }),

/***/ "../../../../../src/app/music/shared/music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var MusicService = (function () {
    function MusicService(http) {
        this.http = http;
        this.tracksUrl = 'api/tracks';
        this.audio = new Audio();
    }
    MusicService_1 = MusicService;
    /*
    * todo добавить формирование url с ограничением по кличеству объектов
    * */
    MusicService.prototype.getRandomTracks = function () {
        console.log("MusicService: load random tracks (count: " + MusicService_1.MAX_TRACK_COUNT + ")");
        return this.http.get(this.tracksUrl);
    };
    MusicService.prototype.load = function (url) {
        console.log("MusicService: load track - " + url);
        this.audio.src = url;
        this.audio.load();
    };
    MusicService.prototype.formatTime = function (seconds) {
        console.log("MusicService: format time: " + seconds);
        var minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    };
    MusicService.MAX_TRACK_COUNT = 20;
    MusicService = MusicService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MusicService);
    return MusicService;
    var MusicService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map