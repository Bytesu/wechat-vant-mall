// pages/goodDetail/index.js
Page({
  data: {
    images: [
      '/images/home/good-1.png',
      '/images/home/good-2.png'
    ],
    num: 8,
    isShowPopup: false,
    activeIndex: 1,
    goodItem: {
      id: 1,
      name: '商品名称1',
      num: 1,
      price: 199.00,
      active: true,
      styles: [
        { id: 1, name: '保温管' },
        { id: 2, name: '双活接球阀' },
        { id: 3, name: '保温管' },
        { id: 4, name: '保温管' },
        { id: 5, name: '保温管' },
      ]
    }
  },
  onLoad: function (options) {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  addShop: function() {
    this.setData({
      num: ++this.data.num
    })
  },
  toShop: function() {
    wx.navigateTo({
      url: '../main/index?activeIndex=1',
    })
  },
  showPopup: function() {
    this.setData({
      isShowPopup: true
    })
  },
  closePopup: function() {
    this.setData({
      isShowPopup: false
    })
  },
  changStyle: function(e) {
    const activeIndex = e.currentTarget.dataset.index
    this.setData({
      activeIndex
    })
  },
  changeStepper(e) {
    const operation = e.currentTarget.dataset.operation
    let num = this.data.num
    if (num <= 1 && operation === 'down') return
    if (operation === 'up') {
      num = ++num
    } else {
      num = --num
    }
    this.setData({
      num
    })
  },
})