cc.Class({
    extends: cc.Component,

    properties: {
        //顶部布局
        topLayout:{
            default:null,
            type:cc.Node
        },
        //左布局
        leftLayout:{
            default:null,
            type:cc.Node
        },
        //右布局
        rightLayout:{
            default:null,
            type:cc.Node
        },
        //底部布局
        bottomLayout:{
            default:null,
            type:cc.Node
        },
        //物品节点
        propNodePrefab:{
            default:null,
            type:cc.Prefab
        }
    },
    
    // use this for initialization
    onLoad: function () {
        this.initLeft();
    },
    //初始化左边
    initLeft:function(){
      this.initBundle();  
    },
    //初始化包裹
    initBundle:function(){
        var pnode = null;
        var row = 6;
        var column = 8;
        for(var i=0;i<row;i++){
            for(var j=0;j<column;j++){
                pnode = cc.instantiate(this.propNodePrefab);
                pnode.x = pnode.width*j;
                pnode.y = pnode.height*(-i);
                pnode.setTag(i*row+j);
                this.leftLayout.addChild(pnode);
            }
        }
    }
});
