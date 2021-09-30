// require dependencies

const mongoose = mongoose();
const Schema = mongoose.Schema;

// set up schema

const userSchema = new Schema ({
    googleId: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
