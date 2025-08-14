import mongoose, { Schema, Document } from 'mongoose';

export interface ISlider extends Document {
  novelId: mongoose.Types.ObjectId;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const SliderSchema: Schema = new Schema({
  novelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Novel',
    required: true,
    index: true, // Add index to novelId
  },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Slider = mongoose.models.Slider || mongoose.model<ISlider>('Slider', SliderSchema);

export default Slider;