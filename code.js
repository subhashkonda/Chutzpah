var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var StringBase = (function () {
        function StringBase(content) {
            this.content = content;
            this.vowels = "aeiou";
        }
        return StringBase;
    })();
    var StringPlus = (function (_super) {
        __extends(StringPlus, _super);
        function StringPlus(content) {
            _super.call(this, content);
            this.content = content;
        }
        StringPlus.prototype.countVowels = function () {
            var count = 0;
            for (var i = 0; i < this.content.length; i++) {
                if (this.vowels.indexOf(this.content[i]) > -1) {
                    count++;
                }
            }
            return count;
        };
        StringPlus.prototype.countNs = function () {
            var abcObj = new ABC("asdf");
            return abcObj.return10();
        };
        return StringPlus;
    })(StringBase);
});
