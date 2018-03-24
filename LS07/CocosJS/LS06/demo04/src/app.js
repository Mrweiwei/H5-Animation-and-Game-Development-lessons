
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    layer1:null,
    speed:10,
    ctor:function () {

            this._super();
            var size = cc.winSize;
            var layer1=new cc.LayerColor(cc.color.RED,200,200);
            layer1.ignoreAnchor=false;
            layer1.setAnchorPoint(0.5,0.5);
            layer1.setPosition(size.width/2,size.height/2);
            this.layer1=layer1;
            this.addChild(layer1);

            this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);


            return true;
},
        myCallBack:function(){
            // this.layer1.x+=20;
            // if(this.layer1.x400)
            // {
            //     this.unschedule(this.myCallBack);
            // }
            this.layer1.y-=this.speed;
            if(this.layer1.y<0){
                this.speed=-this.speed;
            }else{
                this.speed+=0.2;
            }
        }

    // update:function (dt){
    //     this.layer1.x+=1;
    //
    // },



});



























var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

