/**
 * Created by bzx on 4/1/16.
 */
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        _super.call(this);
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }
    var d = __define,c=GameView,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.loadBg();
        this.loadTarget();
    };
    p.loadBg = function () {
        var bg = new eui.Rect();
        this.addChild(bg);
        bg.top = 0;
        bg.bottom = 0;
        bg.left = 0;
        bg.right = 0;
    };
    p.loadTarget = function () {
        var radius = 130;
        var i = 1;
        for (var r = radius; r > 0; r -= 26) {
            var re = new eui.Rect();
            this.addChild(re);
            re.horizontalCenter = 0;
            re.verticalCenter = 0;
            re.ellipseHeight = r;
            re.ellipseWidth = r;
            re.width = r;
            re.height = r;
            if (i++ % 2 == 0) {
                re.fillColor = 0xffffff;
            }
            else {
                re.fillColor = 0xff0000;
            }
        }
    };
    return GameView;
}(eui.Group));
egret.registerClass(GameView,'GameView');
