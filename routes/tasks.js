import { Router } from 'express';
import { z } from 'zod';
import { Task } from '../models/task.js';

const newTask = z.object({
  title: z.string().trim().min(1).max(200),
  dueDate: z.coerce.date().optional(),
});

export const tasks = Router();

tasks.post('/', async (req, res) => {
  const body = newTask.parse(req.body);
  const task = await Task.create({ ...body, team: req.user.team });
  res.status(201).json(task);
});
