// require dependencies

const mongoose = mongoose();
const Schema = mongoose.Schema;

// set up schema

const cartSchema = new Schema ({
    qty: Number,
    price: Number,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
