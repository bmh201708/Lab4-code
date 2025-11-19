// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result : "",
    lastResult : "",
    lastOp : "" ,
    NumFlag : true,
  },

  addNum : function(e){
    if(!this.data.NumFlag) {
      this.setData({
        result : "",
        NumFlag : true,
      })
    }
    this.setData ({
      result: this.data.result + e.currentTarget.dataset.num,
    })
  },

  multiply : function(e) {
    if (this.data.NumFlag) {
      var data = this.data.result;
      var lastOp = this.data.lastOp;
      var lastResult = this.data.lastResult;

      switch(lastOp){
        case "+" : data = data + lastResult; break;
        case "-" : data = lastResult - data; break;
        case "*" : data = data * lastResult; break;
        case "/" : data = lastResult / data; break;
      }

      lastResult = data;
      lastOp = "*";

      this.setData({
        result : data,
        lastResult : lastResult,
        lastOp : lastOp,
        NumFlag : false
      })
    }
  },

  clearall : function(e) {
    this.setData({
      result : "",
      lastResult : "",
      lastOp : "" ,
      NumFlag : true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})