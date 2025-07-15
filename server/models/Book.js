const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  genre: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Romance', 'Biography', 'History', 'Self-Help']
  },
  coverImage: {
    type: String,
    default: 'no-photo.jpg'
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);