
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    labor:null,
    second:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var labor=new cc.LabelTTF('玩家1:','',64);
        labor.x=50;
        labor.y=size.height-50;
        labor.setAnchorPoint(0,1);
        this.addChild(labor);

        labor.setFontFillColor(cc.color.RED);
        labor.setFontSize(50);
        labor.enableStroke(cc.color.YELLOW,3);
        this.labor=labor;

        this.schedule(this.CallBack,1,cc.REPEAT_FOREVER,0);
        return true;
    },
    CallBack:function(dt){
      this.second+=1;
      if(this.second<61)
      {this.labor.setString("玩家："+this.second);}
      else{
          this.unschedule(this.CallBack);
      }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

