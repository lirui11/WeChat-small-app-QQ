var focus
var isShowView
Page({
  data:{
    // text:"这是一个页面"
    focus:false,
    isShowView:true,
    messages:[
      {
        title:"我的电脑",
        url:"/images/icon.png",
        message:"你已在电脑登录，可传文件到电脑。",
        time:"21:15",
        count:0
      },
      {
        title:"一个人",
        url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
        message:"我是一个人",
        time:"15:15",
        count:5
      },
      {
        title:"两个人",
        url:"http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
        message:"我是两个人",
        time:"15:15",
        count:22
        },
      {
        title:"一声问候",
        url:"/images/icon1.png",
        message:"朋友生日要到了，送个祝福吧",
        time:"14:23",
        count:0
      },
      {
        title:"三个人",
        url:"http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
        message:"我是三个人",
        time:"12:13",
        count:1
         },
      {
        title:"四个人",
        url:"http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
        message:"我是四个人",
        time:"12:11",
        count:0
        },
      {
        title:"五个人",
        url:"http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
        message:"我是五个人",
        time:"11:35",
        count:0
        }  
    ]
  },
  bindtap:function(event){
wx.navigateTo({
  url: "search/search"
})
  },
  bindfocus:function(){
    this.setData({
         focus:true
    })
    this.setData({
      isShowView:false
    })
  },
  bindblur:function(){

          this.setData({
      focus:false
    })
    this.setData({
           isShowView:true
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
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
  }
})