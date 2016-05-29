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
        //挑战失败提示节点
        gameOverNode:{
            default:null,
            type:cc.Node
        },
        //成功率
        scoreRate:0,
        //得分
        incrScoreUnit:0,
        //扣分
        decrScoreUnit:0,
        //得分音效
        scoreAudio:{
            default:null,
            url:cc.AudioClip
        },
        //碰撞音效
        stopAudio:{
            default:null,
            url:cc.AudioClip
        },
        //战斗音效
        fightAudio:{
            default:null,
            url:cc.AudioClip
        }
    },
    // use this for initialization
    onLoad: function () {
        //播放战斗音效
        this.fightMusic = cc.audioEngine.playEffect(this.fightAudio,true);
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
    /** 播放停止特效 */
    playStopAudio:function(){
         cc.audioEngine.playEffect(this.stopAudio,false);
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
        this.addNpc();
        if(this.topNode.getMoney()<=0)
        {
            this.gameOverNode.active = true;
            cc.audioEngine.stopEffect(this.fightMusic);
            return;
        }
    },
    /** 飘一个分数特效 */
    showScoreEffect:function(arg){
        var scoreEff = cc.instantiate(this.scoreEffectPrefab);
        scoreEff.getComponent(cc.Label).string = arg.toString();
        scoreEff.x = this.hero.x;
        scoreEff.y = this.hero.y + this.hero.height/2 + scoreEff.height/2;
        this.node.addChild(scoreEff);
        //播放一下得分音效
        cc.audioEngine.playEffect(this.scoreAudio,false);
        //得分特效
        var moveAct = cc.sequence(cc.moveTo(1,cc.p(scoreEff.x,scoreEff.y+100),10),cc.callFunc(function(target){
            target.removeFromParent();
        },this));
        scoreEff.runAction(moveAct);
    }
});
