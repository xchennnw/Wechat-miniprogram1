// miniprogram/pages/addIn/addIn.js

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

    n: [],
    a: false,
    b: false,
    d: false,
    e: false,
    word: "",
    newTopic: "",
    s:""

  },



  search1: function (e) {
    this.setData({
      a: false,
      b: false,
      d: false,
      e: false,
      word: e.detail.value
      
    })

    var sWord = this.data.word;
    const db2 = wx.cloud.database({ env:'huanjing1-ucojt'})
    const t = db2.collection('users')
    const _ = db2.command
    console.log(sWord)

    t.where({
        topic: {
          $regex: '.*' + sWord
        }
      }).get({
        success: res => {
          this.setData({
            n: res.data,
          })
          console.log(res.data);
          if (Object.keys(res.data).length === 0) {
            this.setData({
              a: false,
            })
          } else {
            this.setData({
              a: true
            })
          }
          console.log(a);
        }
      })
    

  },


  addSubtopic: function (e) {
    this.setData({
      b: true
    })
  },



  getSubtopic: function (e) {
    this.setData({
      s: e.detail.value
   })
  },





  poTopic: function (e) {
    this.setData({
      a: false,
      newTopic: this.data.word
    })

    var sTopic = this.data.newTopic;
    const db2 = wx.cloud.database({ env: 'huanjing1-ucojt' })
    const t2 = db2.collection('users')
    const _ = db2.command

    t2.where({
      topic: sTopic
    }).get({
      success: res => {
        this.setData({
          n: res.data,
        })
        if (Object.keys(res.data).length === 0) {
          t2.add({
            data: {
              type : "话题",
              topic: sTopic,
              subtopic: this.data.s,
              likes: 0
            },
            success: res => {
              this.setData({
               e: true,              
               d: true,
              })
              console.log(d);
            }
          })
        } 
        else {
          this.setData({
            e: true,
            d: false
          })
        }
      }
    })  
  }







})