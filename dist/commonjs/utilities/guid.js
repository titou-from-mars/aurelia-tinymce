'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Guid = exports.Guid = function () {
    function Guid() {
        _classCallCheck(this, Guid);

        this.internalGuid = '';

        this.setRandomInternalGuid();
    }

    Guid.prototype.toString = function toString() {
        return this.internalGuid;
    };

    Guid.newGuid = function newGuid() {
        return new Guid();
    };

    Guid.prototype.setRandomInternalGuid = function setRandomInternalGuid() {
        this.internalGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    };

    return Guid;
}();