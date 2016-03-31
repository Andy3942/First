/**
 * Created by bzx on 4/1/16.
 */
var TargetSprite = (function (_super) {
    __extends(TargetSprite, _super);
    function TargetSprite() {
        _super.call(this);
        this.$strokeWeight = 40;
        this.$strokeColor = 0xff0000;
        this.$strokeAlpha = 250;
        this.$fillColor = 0xff0000;
        this.$ellipseWidth = 60;
        this.$fillAlpha = 250;
        this.touchChildren = false;
        this.$graphics = new egret.Graphics();
        this.$graphics.$setTarget(this);
        this.width = 100;
        this.height = 100;
    }
    var d = __define,c=TargetSprite,p=c.prototype;
    d(p, "graphics"
        ,function () {
            return this.$graphics;
        }
    );
    /**
     * @copy eui.UIComponent#updateDisplayList
     *
     * @version Egret 2.5.5
     * @version eui 1.0
     * @platform Web,Native
     */
    p.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        console.log("fuck----");
        var g = this.graphics;
        g.clear();
        if (this.$strokeWeight > 0) {
            g.beginFill(this.$fillColor, 0);
            g.lineStyle(this.$strokeWeight, this.$strokeColor, this.$strokeAlpha, true, "normal", "square", "miter");
            if (this.$ellipseWidth == 0) {
                g.drawRect(this.$strokeWeight / 2, this.$strokeWeight / 2, unscaledWidth - this.$strokeWeight, unscaledHeight - this.$strokeWeight);
            }
            else {
                g.drawRoundRect(this.$strokeWeight / 2, this.$strokeWeight / 2, unscaledWidth - this.$strokeWeight, unscaledHeight - this.$strokeWeight, this.$ellipseWidth, 0);
            }
            g.endFill();
        }
        g.beginFill(this.$fillColor, this.$fillAlpha);
        g.lineStyle(this.$strokeWeight, this.$strokeColor, 0, true, "normal", "square", "miter");
        if (this.$ellipseWidth == 0) {
            g.drawRect(this.$strokeWeight, this.$strokeWeight, unscaledWidth - this.$strokeWeight * 2, unscaledHeight - this.$strokeWeight * 2);
        }
        else {
            g.drawRoundRect(this.$strokeWeight, this.$strokeWeight, unscaledWidth - this.$strokeWeight * 2, unscaledHeight - this.$strokeWeight * 2, this.$ellipseWidth, 0);
        }
        g.endFill();
        this.$invalidateContentBounds();
    };
    return TargetSprite;
}(eui.Component));
egret.registerClass(TargetSprite,'TargetSprite');
