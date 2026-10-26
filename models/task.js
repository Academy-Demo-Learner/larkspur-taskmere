import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  title: { type: String, required: true, trim: true, maxlength: 200 },
  status: { type: String, enum: ['open', 'done'], default: 'open' },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  dueDate: Date,
  comments: [{ author: String, text: String, at: Date }],
}, { timestamps: true });

// Equality fields first, then the sort field: the ESR rule
taskSchema.index({ team: 1, status: 1, dueDate: 1 });

export const Task = model('Task', taskSchema);
