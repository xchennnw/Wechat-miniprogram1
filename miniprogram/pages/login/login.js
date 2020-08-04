// miniprogram/pages/login/login.js
const app = getApp()


Page({


  data: {
    login: app.globalData.login,
    curID: app.globalData.currentID,

    name: "",
    id: "",
    well: true,
    n: []

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


  getName: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },

  getID: function (e) {
    this.setData({
      id: e.detail.value,
    })
  },


  search1: function () {
    var sName = this.data.name
    var sID = this.data.id

    const db = wx.cloud.database()
    const _ = db.command

    db.collection('users').where(_.and([
      {
        staffID: sID
      },
      {
        name: sName
      }
    ]))
      .get({
        success: res => {
          this.setData({
            n: res.data,
          })
          console.log(res.data);
          if (Object.keys(res.data).length === 0) {
            this.setData({
              well: false
            })
          } else {
            this.setData({
              well: true
            })
            app.globalData.currentID = sID
            app.globalData.login = true
          }

          console.log(app.globalData)
        }
      })

  },

  switch: function (e) {
    wx.switchTab({
      url: '../../pages/index/index'
    })
  },










})