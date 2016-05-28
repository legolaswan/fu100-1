/** NPC精灵节点 */
var NpcSprite = cc.Class({
   extends: cc.Component,

    properties: {
        //名字
        npcName:{
            default:null,
            type:cc.Label
        }
    },
    onLoad: function () {
        this.move();
    },
    /** 移动方法 */
    move:function(){
        var moveAct = cc.sequence(cc.moveTo(2,cc.p(this.node.width/2,0),10),cc.callFunc(function(target){
            this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        },this));
        this.node.runAction(moveAct);
    },
    //触摸事件
    touchStart:function(touch) {
        touch.node.removeFromParent();
        this.mainUI.randomEvent();
    }
});


module.exports=NpcSprite;