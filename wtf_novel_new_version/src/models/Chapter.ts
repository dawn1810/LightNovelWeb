import mongoose, { Schema, Document, Model } from 'mongoose';

interface IChapter extends Document {
  novelId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ChapterSchema: Schema<IChapter> = new Schema(
  {
    novelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Novel',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Chapter: Model<IChapter> = mongoose.models.Chapter || mongoose.model<IChapter>('Chapter', ChapterSchema);

export default Chapter;