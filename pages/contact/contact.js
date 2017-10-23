Page({
  data:{
    // text:"这是一个页面"
    isHiddenToast:true,
    messages:[
      {
        groupName:"新朋友",
        icon:"/images/close.png",
        number:"0/0"
      },
      {
        groupName:"特别关心",
        icon:"/images/close.png",
       number:"1/1"
      },
      {
        groupName:"我的好友",
        icon:"/images/close.png",
        number:"41/53"
        },
      {
        groupName:"花开",
        icon:"/images/close.png",
        number:"4/10"
      },
      {
        groupName:"若相惜",
        icon:"/images/close.png",
        number:"10/20"
         },
      {
        groupName:"花凋",
        icon:"/images/close.png",
        number:"10/22"
        },
      {
        groupName:"为谁祭",
        icon:"/images/close.png",
        number:"4/9"
        },
      {
        groupName:"安安静静",
        icon:"/images/close.png",
        number:"12/13"
        },
      {
        groupName:"陪在你身边",
        icon:"/images/close.png",
        number:"3/8"
        },
      {
        groupName:"老同学",
        icon:"/images/close.png",
        number:"4/9"
         },
      {
        groupName:"老朋友",
        icon:"/images/close.png",
        number:"6/13"
        },
      {
        groupName:"不常用联系人",
        icon:"/images/close.png",
        number:"1/3"
        }
    ]
  },

  isShowToast:function(){
    this.setData({
      isHiddenToast:false
    })
  },
  toastChange:function(){
    this.setData({
      isHiddenToast:true
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindtap:function(event){
wx.navigateTo({
  url: "/pages/message/search/search"
})
  },
})