/** 英雄精灵节点 */
var HeroSprite = cc.Class({
   extends: cc.Component,

    properties: {
        //名字
        playerName:{
            default:null,
            type:cc.Label
        }
    },
    onLoad: function () {

    }
});

module.exports=HeroSprite;