// miniprogram/pages/p1/p1.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    
    items: [
      { value: '唱' },
      { value: '跳' },
      { value: 'rap' },
      { value: '篮球' },
      { value: '金融' },
      { value: '电竞' },
    ],

    skills:"",
    a : false

  },

  onLoad: function (options) {
    console.log('--index.js--OnLoad--页面加载')
  },
  onReady: function () {
    console.log('--index.js--OnReady--页面初次渲染完成')
  },
  onShow: function () {
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

  
    checkboxChange: function(e) {
      var s=""
      var i 
      for (i=0; i<e.detail.value.length; i++){
        s= s+e.detail.value[i]+" "
      }
     
      this.setData({
        skills: s,
        a: false
      })

      console.log('checkbox发生change事件，携带value值为：', this.data.skills)
  },

  update1: function () {
    var skills = this.data.skills
    var cID = app.globalData.currentID
   wx.cloud.callFunction({
     name:'update111',
     data:{
       s: skills,
       c: cID
     },
     success: function(res){
       console.log(res.result)     
     },
     fail: console.error

   })
     this.setData({
      a: true
     })
     console.log(skills)
     console.log(cID)

  },








})













