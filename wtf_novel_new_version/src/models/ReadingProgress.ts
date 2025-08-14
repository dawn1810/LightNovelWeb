import mongoose, { Schema, Document } from 'mongoose';

export interface IReadingProgress extends Document {
  userId: mongoose.Types.ObjectId;
  novelId: mongoose.Types.ObjectId;
  currentChapterId?: mongoose.Types.ObjectId; // Optional as a user might start but not finish a chapter
  createdAt: Date;
  updatedAt: Date;
}

const ReadingProgressSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  novelId: { type: Schema.Types.ObjectId, ref: 'Novel', required: true, index: true },
  currentChapterId: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ReadingProgress = mongoose.models.ReadingProgress || mongoose.model<IReadingProgress>('ReadingProgress', ReadingProgressSchema);

export default ReadingProgress;