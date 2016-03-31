/**
 * Created by bzx on 4/1/16.
 */

class GameView extends eui.Group {

    public constructor() {
        super();
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }

    protected createChildren() {
        super.createChildren();
        this.loadBg();
        this.loadTarget();
    }

    protected loadBg(){
        var bg:eui.Rect = new eui.Rect();
        this.addChild(bg);
        bg.top = 0;
        bg.bottom = 0;
        bg.left = 0;
        bg.right = 0;
    }

    protected loadTarget(){
        var radius:number = 130;
        var i:number = 1;
        for(var r = radius; r > 0; r -= 26) {
            var re:eui.Rect = new eui.Rect();
            this.addChild(re);
            re.horizontalCenter = 0;
            re.verticalCenter = 0;
            re.ellipseHeight = r;
            re.ellipseWidth = r;
            re.width = r;
            re.height = r;
            if(i++ % 2 == 0){
                re.fillColor = 0xffffff;
            }else {
                re.fillColor = 0xff0000;
            }
        }
    }
}