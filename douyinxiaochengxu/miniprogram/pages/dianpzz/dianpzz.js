// pages/dianpzz/dianpzz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[],//保存上传图片的
  },
  // 删除选中的图片
  delImg(event){
     var index=event.target.dataset.id;
     console.log(index)
     //通过删除指定位置的数组元素
     var images=this.data.images;
         images.splice(index,1)
     this.setData({
       images:images
     })
  },
  // 上传前展示图片
  showImg(){
     wx.chooseImage({
       count:9,
       sizeType:["original","compressed"],
       sourceType:["album","camera"],
       success: (res)=>{
         console.log(res.tempFilePaths)
         var list=res.tempFilePaths

       var  rows = this.data.images.concat(list)
        //  限制数组的大小
          
            if(rows.length>9){
              for (var key in rows) {
                if (rows.length > 9) {
               rows.splice(rows.length-1,1)
                }
            }
          }
         this.setData({
           images:rows
         })
         
         
       }
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