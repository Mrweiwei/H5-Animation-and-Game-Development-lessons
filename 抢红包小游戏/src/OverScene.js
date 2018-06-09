var OverLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;
        // this.addChild(new cc.LayerColor(cc.color.YELLOW));
        var bg=new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.x=size.width/2;
        bg.y=size.height/2;
        this.addChild(bg);

        var kuang=new cc.Sprite(res.JieShuKuang);
        kuang.x=size.width/2;
        kuang.y=size.height/2;
        this.addChild(kuang);

        var zailaiMenuItem=new cc.MenuItemImage(res.ZaiLaiAnNiu_png,res.ZaiLaiAnNiuB_png,function(){
            cc.director.runScene(new MainScene());
        },this);
        zailaiMenuItem.x=size.width*0.3;
        zailaiMenuItem.y=size.height*0.24;


        var zMenuItem=new cc.MenuItemImage(res.XuanYaoAnNiu_png,res.XuanYaoAnNiuB_png,function(){
            cc.director.runScene(new StartScene());

        },this);
        zMenuItem.x=size.width*0.7;
        zMenuItem.y=size.height*0.24;
        var menu=new cc.Menu(zailaiMenuItem,zMenuItem);
        menu.x=0;
        menu.y=0;
        this.addChild(menu);


        var scoreLabel=new cc.LabelTTF("","",size.width/2);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.width*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);


        var score=cc.sys.localStorage.getItem("currenScore");
        scoreLabel.setString(score);
        scoreLabel.scale=0;
        var scaleAction=cc.scaleTo(0.5,1.0).easing((cc.easeElasticInOut(0.5)));
        var seq=cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);

        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});
