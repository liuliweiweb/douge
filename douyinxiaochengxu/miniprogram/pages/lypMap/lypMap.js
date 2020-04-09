// pages/lypMap/lypMap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     marker:[
       {
         id: 1,
         latitude: 39.9033497500,
         longitude: 116.5271759000,
         title: "高碑店村",
         iconPath: "../../images/lypmap.png",
         width: 44,
         height: 44,
         zIndex: 999
       },
       {
         id: 2,
         latitude: 39.9095390000,
         longitude: 116.5316780000,
         title: "高碑店地铁",
         iconPath: "../../images/lypmap.png",
         width: 44,
         height: 44,
         zIndex: 999
       },
       {
         id: 3,
         latitude: 39.9084524000,
         longitude: 116.5156531300,
         title: "四惠东",
         iconPath: "../../images/lypmap.png",
         width: 44,
         height: 44,
         zIndex: 999
       },
       {
         id:4,
         latitude: 39.9092260000,
         longitude: 116.5547061000,
         title: "传媒大学",
         iconPath: "../../images/lypmap.png",
         width: 44,
         height: 44,
         zIndex: 999
       },
       {
         id: 5,
         latitude: 39.9090614000,
         longitude: 116.5445137000,
         title: "远通桥",
         iconPath: "../../images/lypmap.png",
         width: 44,
         height: 44,
         zIndex: 999
       }
     ],
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