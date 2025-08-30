const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['fiction', 'non-fiction', 'comics', 'biography']
  },
  copies: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    default: function () {
      return this.copies;
    }
  }
});

const Book = mongoose.model('Book', BookSchema);
const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  booksIssued: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const Member = mongoose.model('Member', MemberSchema);