System.register("chunks:///_virtual/GameMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "33fd9KcK9FD+rxCBZuNnWYu", "GameMgr", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameMgr = exports('GameMgr', (_dec = ccclass('GameMgr'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameMgr, _Component);

        function GameMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "Plane", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameMgr.prototype;

        _proto.revokePermission = function revokePermission() {
          navigator.permissions.query({
            name: 'geolocation'
          }).then(function (result) {
            console.log("RESULT_T: ", result.state);
          });
        };

        _proto.start = function start() {
          console.log("Version: 3");
          this.revokePermission();
          var options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
          }; // [3]

          var watchID = navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this), options);
        };

        _proto.success = function success(position) {
          this.doSomething(position.coords.latitude, position.coords.longitude);
          console.log("HEADING: ", position.coords.heading);
          console.log("COORDS: ", position.coords); // let euler = this.Plane.getRotation().getEulerAngles();

          if (position.coords.speed != 0) {
            this.Plane.setRotationFromEuler(0, position.coords.heading, 0);
          }
        };

        _proto.error = function error() {
          alert('Sorry, no position available.');
        };

        _proto.doSomething = function doSomething(a, b) {//   console.log("position: ", a, b);
        };

        return GameMgr;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Plane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameMgr.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

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
//# sourceMappingURL=index.js.map