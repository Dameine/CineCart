const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  //Add movies schame here.
  favMovies: [
    {
      movieId: String,
      title: String,
      poster: String,
      director: String
    }
  ]

});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// When we query as user, we'll also get another field called 'favoriteMoviesCount' with the number of saved books we have.
userSchema.virtual('favoriteMoviesCount').get(function() {
  return this.favMovies.length;
})

const User = model('User', userSchema);

module.exports = User;