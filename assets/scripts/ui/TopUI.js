/** 界面UI顶部布局 */
var Top = cc.Class({
    extends: cc.Component,
    /** 生命值 */
    _life:0,
    /** 金币 */
    _money:0,
    properties: {
        /** 血量 */
        lifeNode:{
            default:null,
            type:cc.ProgressBar
        },
        /** 金币 */
        moneyNode:{
            default:null,
            type:cc.ProgressBar
        },
        /** 生命上限 */
        lifeMax:0,
        /** 金币上限 */
        moneyMax:0
    },
    onLoad: function () {
        this.init();
    },
    /** 初始化节点显示 */
    init:function(){
        this._life = 0;
        this._money = 0;
        this.updateShow();
    },
    /** 获取生命值 */
    getLife:function(){
        return this._life;
    },
    /** 设置生命值  */
    setLife:function(arg){
        if(arg<=0) arg = 0;
        this._life = arg;
    },
    /** 获取金币值 */
    getMoney:function(){
        return this._money;
    },
    /** 设置金币值 */
    setMoney:function(arg){
        if(arg<=0) arg = 0;
        this._money = arg;
    },
    /** 更新显示  */
    updateShow:function(){
        this.lifeNode.progress = this._life/this.lifeMax;
        var val = this.lifeNode.node.getChildByName("val");
        val.getComponent(cc.Label).string = this._life+"/"+this.lifeMax;
        this.moneyNode.progress = this._money/this.moneyMax;
        val = this.moneyNode.node.getChildByName("val");
        val.getComponent(cc.Label).string = this._money+"/"+this.moneyMax;
    }
});
