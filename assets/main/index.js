System.register("chunks:///_virtual/GameMgr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,i,n;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,i=o._decorator,n=o.Component}],execute:function(){var r;e._RF.push({},"f304crMXitM0JixEVE1cLGZ","GameMgr",void 0);var s=i.ccclass;i.property,o("GameMgr",s("GameMgr")(r=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var i=e.prototype;return i.revokePermission=function(){navigator.permissions.query({name:"geolocation"}).then((function(o){console.log(o.state)}))},i.start=function(){this.revokePermission();navigator.geolocation.watchPosition(this.success.bind(this),this.error.bind(this),{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3})},i.success=function(o){this.doSomething(o.coords.latitude,o.coords.longitude)},i.error=function(){alert("Sorry, no position available.")},i.doSomething=function(o,t){console.log("position: ",o,t)},e}(n))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameMgr.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});