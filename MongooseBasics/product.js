const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('Connection Open!')
    })
    .catch(err => {
      console.log('Oh no! Error!!!')
      console.log(err)
    })

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default:0
    }
  }
});

productSchema.methods.greet = function () {
  console.log('Hey, Hi, How yur durin?')
}

productSchema.statics.fireSale = function() {
 return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema)

// const bike = new Product({name: 'Racing Bike', price: 2999.50, categories: ['Cycling', 'Safety']})
// bike.save()
//   .then(data => {
//     console.log('It worked!')
//     console.log(data)
//   })
//   .catch(err => {
//     console.log('Oh no! Error!')
//     console.log(err)
//   })

  Product.fireSale().then(res => console.log(res))