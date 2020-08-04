// miniprogram/pages/interest/interest.js

const app = getApp()
Page({



  onLoad: function (options) {
    this.search1()
    this.setData({
      zan: false
    })
    console.log('--index.js--OnLoad--页面加载')
  },
  onReady: function () {
    console.log('--index.js--OnReady--页面初次渲染完成')
  },
  onShow: function () {
    this.search1()
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

    n: [],
    n2: [],
    a: false,
    s: "",
    zan: false
  },



  search1: function (e) {
    this.setData({
      zan: false
    })
    const db = wx.cloud.database()
    const _ = db.command

    db.collection('users').where({
        type: "话题"
    }).orderBy('likes','desc')
      .get({
        success: res => {
          this.setData({
            n: res.data,
          })
        }
      })


  },


  like1: function (e) {
   
    
    var str = e.currentTarget.dataset.id;

    const db = wx.cloud.database()
    const _ = db.command

    db.collection('users').where(_.and([
      {
        zID: app.globalData.currentID
      },
      {
        zTopic: str
      }
    ]))
      .get({
        success: res => {
          if (Object.keys(res.data).length === 0) {


            this.setData({
              zan: false
            })
            wx.cloud.callFunction({
              name: 'zan111',
              data: {
                a: str,
              },
              success: function (res) {
                console.log("okkkkkk")

              },
              fail: console.error
            })

            db.collection('users').add({
              data: {
                type: "点赞",
                zID: app.globalData.currentID,
                zTopic: str,
              },
              success: res => {
                console.log("added");
              }
            })



          } else {
            this.setData({
              zan: true
            })
            wx.showToast({
              title: '已赞过',
              duration: 1200,
              mask: false
            })


            console.log(res.data);
          }
        }
      })

    this.setData({
      zan: false
    })

    
    if (getCurrentPages().length != 0) {
      //刷新当前页面的数据
     getCurrentPages()[getCurrentPages().length-1].onLoad()
     getCurrentPages()[getCurrentPages().length-1].onLoad() 
    }
  
  },

  
})

 






