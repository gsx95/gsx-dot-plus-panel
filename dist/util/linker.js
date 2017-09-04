'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, Linker;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Linker', Linker = function () {
        function Linker(panel, linkSrv) {
          _classCallCheck(this, Linker);

          this.panel = panel;
          this.linkSrv = linkSrv;
        }

        _createClass(Linker, [{
          key: 'call',
          value: function call(dots) {
            dots.forEach(this._createScope, this);
            dots.forEach(this._populateScope, this);
            dots.forEach(this._evaluateLink, this);
          }
        }, {
          key: '_createScope',
          value: function _createScope(dot) {
            var scope = Object.assign({}, this.panel.scopedVars);
            dot.linkScope = scope;
          }
        }, {
          key: '_populateScope',
          value: function _populateScope(dot) {
            this.panel.linkVars.forEach(function (variable) {
              var value = dot.name.split('.')[variable.index];
              dot.linkScope[variable.name] = { value: value };
            });
          }
        }, {
          key: '_evaluateLink',
          value: function _evaluateLink(dot) {
            var _linkSrv;

            var links = this.panel.links || [];
            var linkInfo = links[this.panel.linkIndex];

            if (linkInfo === undefined) return;

            var args = [linkInfo, dot.linkScope];
            dot.link = (_linkSrv = this.linkSrv).getPanelLinkAnchorInfo.apply(_linkSrv, args);
          }
        }]);

        return Linker;
      }());

      _export('Linker', Linker);
    }
  };
});
//# sourceMappingURL=linker.js.map