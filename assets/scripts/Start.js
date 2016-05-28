cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },
    //开始按钮点击事件
    startAction:function(){
        this.node.runAction(cc.fadeOut(1.0));
       //进入游戏主场景
       cc.director.loadScene("MainScene");
    },
    //设置按钮点击事件
    setttingAction:function(){
        
    }
});
