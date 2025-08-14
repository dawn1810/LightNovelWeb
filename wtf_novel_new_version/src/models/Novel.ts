import mongoose from 'mongoose';

const NovelSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  chapterCount: {
    type: Number,
    default: 0,
  },
  summary: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  status: {
    type: String,
    default: 'Đang ra',
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Genre',
    },
  ],
});

const Novel = mongoose.models.Novel || mongoose.model('Novel', NovelSchema);

export default Novel;