// miniprogram/pages/p2/p2.js

const app = getApp()
Page({

  onLoad: function (options) {
    console.log('--index.js--OnLoad--页面加载')
  },
  onReady: function () {
    console.log('--index.js--OnReady--页面初次渲染完成')
  },
  onShow: function () {
    this.setData({
      login: app.globalData.login,
      curID: app.globalData.currentID
    })
    console.log('--index.js--onShow--页面显示')
  },
  onHide: function () {
    console.log('--index.js--ohHide--页面隐藏')
  },
  onUnload: function () {
    console.log('--index.js--onUnload--页面卸载')
  },
  onReachBottom: function () {
    console.log('--index.js--onReachBottom--页面上拉触底')
  },


  data: {
    
    login: app.globalData.login,
    curID: app.globalData.currentID,

    n:[],
    a: false,
    b: true,
    sName: "",


  },

  

  search1: function () {
    var sName = this.data.sName;
    const db = wx.cloud.database()
    const _ = db.command

    db.collection('users').where(_.or([
      {skill:{
        $regex:'.*'+sName
       }},
       {name:{
         $regex:'.*' + sName
       }}
    ]))
    .get({
      success: res =>{
        this.setData({
          n:res.data,
          a: true
        })
        if (Object.keys(res.data).length === 0) {
          this.setData({
            b: false
          })
        } else {
          this.setData({
            b: true
          })
        console.log(res.data);
        }
      }  
    })
  
  },

  getName: function(e){
   this.setData({
     sName :e.detail.value
   })
  }

   
  

})