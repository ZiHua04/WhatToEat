// pages/chose/chose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cafe : ["一餐","二餐","美广"],
    tempcafe:"",
    isShowInput: false,
    inputValue: '',
  },
  inputConfirm:function(e){
    this.setData({cafe:this.data.cafe.concat(e.detail.value)});
    this.setData({isShowInput:false});
    console.log("zhuijia");
  },
  outputConfirm:function(e){
    var cafes = this.data.cafe;
    cafes.pop();
    this.setData({cafe:cafes});
    this.setData({isShowInput:false});

  },
  replace:function(){
    this.setData({
      inputValue: ""
    });
  },
  handleAdd: function() {
    this.setData({
      isShowInput: true
    })
  },
  
  handleInput: function(event) {
    this.setData({
      inputValue: event.detail.value
    })
  },
  handleCancel: function() {
    this.setData({
      isShowInput: false,
      inputValue: ''
    })
  },
  random:function(){
    var Index = Math.floor(Math.random() * this.data.cafe.length);
    let content = this.data.cafe[Index];
    wx.showModal({
      title:"帮你决定好了",
      content: `您今天吃 ${content} `
    })
  },
  chosetoeat: function(e)
  {
    let content = e.currentTarget.dataset.item;
    //console.log(e.currentTarget.dataset.item);
    if(content === "+"){
    }
    else{
      wx.showModal({
        title: '提示',
        content: `您今天吃 ${content} `,
        showCancel: false,
        confirmText: '知道了',
        success: (res) => {
          // 如果用户点击了确认按钮
          if (res.confirm) {
            console.log('用户点击了确认按钮')
          }
        }
      })
    }
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