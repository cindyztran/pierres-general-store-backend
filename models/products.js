// require dependencies

const mongoose = mongoose();
const Schema = mongoose.Schema;

// set up schema

const productSchema = new Schema ({
    name: String,
    img: String,
    description: String,
    season: String,
    price: Number,
    cart_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
