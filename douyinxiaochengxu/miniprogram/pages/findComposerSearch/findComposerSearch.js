// pages/findComposer/findComposer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [
      {
        id: '0',
        text: "作词"
      },
      {
        id: '1',
        text: '作曲'
      },
      {
        id: '2',
        text: '编曲'
      },
      {
        id: '3',
        text: '后期'
      }, {
        id: '4',
        text: '录音'
      },
      {
        id: '5',
        text: '制作'
      },
      {
        id: '6',
        text: '演唱'
      },
      {
        id: '7',
        text: '乐器'
      },
      {
        id: '8',
        text: '配音'
      },
      {
        id: '9',
        text: '主播'
      },
      {
        id: '10',
        text: '会员打折'
      },
      {
        id: '11',
        text: '歌曲餐厅'
      },
      {
        id: '12',
        text: '宣传发行'
      },
      {
        id: '13',
        text: '特色服务'
      },
      {
        id: '14',
        text: '认证服务'
      },
      {
        id: '15',
        text: '音乐教学'
      }, {
        id: '16',
        text: '二手交易'
      }
    ],
    num:0
  },
  showlist(e){
     var id=e.target.dataset.id;
     console.log(id);
     this.setData({
       num:id
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