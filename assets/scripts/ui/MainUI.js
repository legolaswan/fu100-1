var TopUI = require("TopUI");

var Main = cc.Class({
    extends: cc.Component,

    properties: {
        topNode:{
            default:null,
            type:TopUI
        },
        //英雄显示节点预制资源
        heroPrefab:{
            default:null,
            type:cc.Prefab
        },
        //NPC预制资源节点
        npcPrefab:{
            default:null,
            type:cc.Prefab
        },
        //得分特效预制资源
        scoreEffectPrefab:{
            default:null,
            type:cc.Prefab
        },
        //成功率
        scoreRate:0,
        //得分
        incrScoreUnit:0,
        //扣分
        decrScoreUnit:0
    },
    // use this for initialization
    onLoad: function () {
        this.hero = cc.instantiate(this.heroPrefab);
        this.node.addChild(this.hero);
        this.hero.x = -this.hero.width/2;
        //添加一个NPC
        this.addNpc();
    },
    /** 添加NPC */
    addNpc:function(){
        this.npc = cc.instantiate(this.npcPrefab);
        this.node.addChild(this.npc);
        var size = cc.winSize;
        this.npc.x = size.width/2-this.npc.width/2;
        this.npc.y = 0;
        this.npc.getComponent("NpcSprite").mainUI = this;
    },
    /** 随机事件 */
    randomEvent:function(){
        var num = cc.random0To1()*100;
        cc.log(num);
        var arg = this.topNode.getMoney();
        if(num<=this.scoreRate){
           this.topNode.setMoney(arg+this.incrScoreUnit);
           this.showScoreEffect("+"+this.incrScoreUnit);
        }else{
            this.topNode.setMoney(arg-this.decrScoreUnit);
            this.showScoreEffect("-"+this.decrScoreUnit);
        }
        this.topNode.updateShow();
    },
    /** 飘一个分数特效 */
    showScoreEffect:function(arg){
        var scoreEff = cc.instantiate(this.scoreEffectPrefab);
        scoreEff.getComponent(cc.Label).string = arg.toString();
        scoreEff.x = this.hero.x;
        scoreEff.y = this.hero.y + this.hero.height/2 + scoreEff.height/2;
        this.node.addChild(scoreEff);
        //得分特效
        var moveAct = cc.sequence(cc.moveTo(1,cc.p(scoreEff.x,scoreEff.y+100),10),cc.callFunc(function(target){
            target.removeFromParent();
        },this));
        scoreEff.runAction(moveAct);
    }
});
