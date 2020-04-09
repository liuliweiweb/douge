// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     youhui:[
       {money:100,dk:500},
       {money:200,dk:1800},
       {money:500,dk:3000},
       {money:1000,dk:6000},
       {money:2000,dk:15000},
       {money:3000,dk:25000},
       {money:5000,dk:45000},
       {money:8000,dk:78000},
       {money:10000,dk:98000},
     ],
     num:0,
     money:100
  },
 active(e){
   var num = e.target.dataset.num; 
   console.log(num)
     var money=this.data.youhui[num].money
     console.log(money)
     this.setData({
       num:num,
       money:money
     })
     

 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})