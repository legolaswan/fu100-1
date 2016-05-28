var TopUI = require("TopUI");
var MainUI = require("MainUI");


/** 界面UI管理器 */
cc.Class({
    extends: cc.Component,

    properties: {
        //顶部节点
        topNode:{
            default:null,
            type:TopUI
        },
        //主节点
        mainNode:{
            default:null,
            type:MainUI
        }
    },
    // use this for initialization
    onLoad: function () {

    }
});
