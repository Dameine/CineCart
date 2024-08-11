const axios = require('axios');
const {User} = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getMovies: async (_, args) => {
        const apiKey = process.env.API_KEY;
        const query = 'The Matrix';
        const url = `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`; 
        const response = await axios.get(url);
        console.log(response.data);
        const movie = response.data;
            return {
                Title: movie.Title,
                Poster: movie.Poster,
                Director: movie.Director,
                Genre: movie.Genre,
                shortPlot: movie.Plot,
                imdbRating: movie.imdbRating,
            };

    },

  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
