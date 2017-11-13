import testDrive from '../../modules/test-drive.js'
const app = getApp()

Page({
  data:{
    entity:null
  },
  testDrive,
  preview(event){
    const slideName = event.target.dataset.slides
    const index = event.target.dataset.index

    const slides = this.data.entity.meta[slideName]
    const images = []

    slides.map((item) =>{
      images.push(item.image)
    })

    wx.previewImage({
      urls: images,
      current:images[index]
    })
  },

  onLoad(options){
    const id = options.id
    const entity = app.globalData.vehicles.filter((item) => {
      return item.id == id
    })

this.setData({
  entity:entiey[0]
})

wx.setNavigationBarTitle({
  title: this.data.entity.header
})

  }
})