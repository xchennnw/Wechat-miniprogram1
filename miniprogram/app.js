//app.js
App({

  
    globalData: {//全局变量
      currentID: "",
      login: false
    },




  onLaunch: function () {
    
    wx.cloud.init()
   
    this.globalData = {
      currentID: "",
      login : false
      
    }
  }
})
