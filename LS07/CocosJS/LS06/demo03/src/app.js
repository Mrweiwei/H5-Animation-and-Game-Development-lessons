
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        var layer4=new cc.LayerColor(cc.color.GREEN,200,200);
        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        layer3.ignoreAnchor=false;
        layer4.ignoreAnchor=false;


        //layer3.ignoreAnchor=false;
        layer1.setAnchorPoint(0,0);
        layer2.setAnchorPoint(0.5,0.5);
        layer3.setAnchorPoint(1,1);
        layer4.setAnchorPoint(0.5,0.5);


        // layer2.runAction(cc.rotateBy(2,360).repeatForever());
        // layer2.runAction(cc.moveBy(10,500,0));
        // layer1.runAction(cc.rotateBy(2,180).repeatForever());

        layer1.setPosition(0,0);
        layer2.setPosition(200,200);
        layer3.setPosition(500,500);
        layer4.setPosition(300,300);

        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer3);
        this.addChild(layer4);

        // layer1.setScale(0.5);
        // layer2.setScale(0.5,02);






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

