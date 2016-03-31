/**
 * Created by bzx on 4/1/16.
 */

class TargetSprite extends eui.Component {

    constructor() {
        super();
        this.touchChildren = false;
        this.$graphics = new egret.Graphics();
        this.$graphics.$setTarget(this);
        this.width = 100;
        this.height = 100;
    }

    /**
     * @private
     */
    $graphics: egret.Graphics;

    $strokeWeight:number = 40;

    $strokeColor:number = 0xff0000;

    $strokeAlpha:number = 250;

    $fillColor:number = 0xff0000;

    $ellipseWidth:number = 60;

    $fillAlpha:number = 250;
    public get graphics(): egret.Graphics {
        return this.$graphics;
    }

    /**
     * @copy eui.UIComponent#updateDisplayList
     *
     * @version Egret 2.5.5
     * @version eui 1.0
     * @platform Web,Native
     */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        console.log("fuck----");
        var g = this.graphics;
        g.clear();
        if (this.$strokeWeight > 0) {
            g.beginFill(this.$fillColor, 0);
            g.lineStyle(this.$strokeWeight, this.$strokeColor, this.$strokeAlpha, true, "normal", "square", "miter");
            if (this.$ellipseWidth == 0) {
                g.drawRect(this.$strokeWeight / 2, this.$strokeWeight / 2, unscaledWidth - this.$strokeWeight, unscaledHeight - this.$strokeWeight);
            } else {
                g.drawRoundRect(this.$strokeWeight / 2, this.$strokeWeight / 2, unscaledWidth - this.$strokeWeight, unscaledHeight - this.$strokeWeight, this.$ellipseWidth, 0);
            }
            g.endFill();
        }
        g.beginFill(this.$fillColor, this.$fillAlpha);
        g.lineStyle(this.$strokeWeight, this.$strokeColor, 0, true, "normal", "square", "miter");
        if (this.$ellipseWidth == 0) {
            g.drawRect(this.$strokeWeight, this.$strokeWeight, unscaledWidth - this.$strokeWeight * 2, unscaledHeight - this.$strokeWeight * 2);
        } else {
            g.drawRoundRect(this.$strokeWeight, this.$strokeWeight, unscaledWidth - this.$strokeWeight * 2, unscaledHeight - this.$strokeWeight * 2, this.$ellipseWidth, 0);
        }
        g.endFill();
        this.$invalidateContentBounds();
    }
}