// pages/fansFollow/fansFollow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:true,
    guan:false,
    zzc:true,
    names:"",
    a:1
  },

  // 控制遮罩层显示与隐藏
  zzc(e){
    this.setData({
      zzc:false,
      names:e.target.dataset.id
    })
    console.log("绑定自定义属性 获取用户id 通过用户id绑定查找names用户进行删除")
  },
  // 移除粉丝函数
  delfans(){
    console.log("我是用户"+this.data.names);
    console.log("删除了你的分粉丝" +this.data.names)
    console.log("先发送ajax请求，然后成功后再去掉zzc")
    this.setData({
      zzc: true,
    })
  },
  quxiao(){
     this.setData({
       zzc:true,
       names:""
     })
     console.log("取消了移除用户操作")
  },


  // 关注与粉丝列表之间的切换
  active1(){
    this.setData({
      active:true,
     
    })
    wx.setNavigationBarTitle({
      title:"关注"
    })
  },
  active2(){
    this.setData({
      active:false
    })
    wx.setNavigationBarTitle({
      title: "粉丝"
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //加载成功后先发送ajax请求数据然后展示到桌面上
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