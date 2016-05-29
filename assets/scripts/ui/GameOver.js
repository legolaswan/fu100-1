cc.Class({
    extends: cc.Component,

    properties: {
    },
    // use this for initialization
    onLoad: function () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
    },
    //重新开始按钮
    replayAction:function(){
        this.node.off(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        cc.director.loadScene("StartScene");
    },
    //触摸事件
    touchStart:function(touch){
        return false;
    }
});
