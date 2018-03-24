
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        // var startMenuItem=new cc.MenuItemFont('开始',function(){
        //     cc.log("let us begain！");
        // },this);
        // var stopMenuItm=new cc.MenuItemFont('停止',function(){
        //     cc.log("now stop it！");
        // },this);
        // var  tab=new cc.LabelTTF("重置","",30);
        // tab.setFontFillColor(cc.color.BLUE);
        // tab.enableStroke(cc.color.RED,2);
        // tab.enableShadow(cc.color.YELLOW,15,15,15);
        //
        // var reset=new cc.MenuItemLabel(tab,function(){
        //     cc.log("it has been already reset ！");
        // },this);
        // var menu=new cc.Menu(startMenuItem,stopMenuItm,reset);
        // this.addChild(menu);
        // menu.alignItemsHorizontallyWithPadding(size.width*0.8);

        var play=new cc.MenuItemImage(res.PlayBtnNormal_png,res.PlaytBtnSelected_png,function(){
            cc.log("this is play!");
        },this);
            var stop=new cc.MenuItemImage(res.AboutBtnNormal_png,res.AboutBtnSelected_png,function(){
                cc.log("this is about!");
            },this);
            var score=new cc.MenuItemImage(res.HightScoresBtnNormal_png,res.HighScoresBtnSelected_png,function(){
            cc.log("highMenuItem");
        },this);
            var menu1=new cc.Menu(play,stop,score);
            this.addChild(menu1)
            menu1.alignItemsHorizontallyWithPadding(50);
            menu1.alignItemsVerticallyWithPadding(60);

























        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

