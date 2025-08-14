import mongoose, { Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const GenreSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Genre = mongoose.models.Genre || mongoose.model<IGenre>('Genre', GenreSchema);

export default Genre;