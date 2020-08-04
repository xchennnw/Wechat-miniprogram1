//index.js
const app = getApp()


Page({

  
  data: {
    login: app.globalData.login,
    curID: app.globalData.currentID

  },

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

})