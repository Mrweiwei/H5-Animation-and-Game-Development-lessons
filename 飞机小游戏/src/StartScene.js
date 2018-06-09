var StartLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        var size = cc.winSize;
        var layercolor=new cc.LayerColor(cc.color.GRAY);
        this.addChild(layercolor);
        var startLabel = new cc.LabelTTF("Begain");
        startLabel.setFontSize(size.width / 8);
        startLabel.setFontFillColor(cc.color.BLUE);
        startLabel.enableStroke(cc.color.YELLOW, 5);

        var startItem = new cc.MenuItemLabel(startLabel, function () {
            cc.director.runScene(new MainScene());
        }, this);

        var menu = new cc.Menu(startItem);
        menu.y = size.height / 5;
        this.addChild(menu);

        var logo = new cc.LabelTTF("Hide the aircraft game  ");
        logo.setFontSize(size.width / 12);
        logo.enableStroke(cc.color.RED, 5);
        logo.x = size.width / 1.9;
        logo.y = size.height * 0.8;
        this.addChild(logo);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});