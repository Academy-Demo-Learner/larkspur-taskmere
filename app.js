import express from 'express';
import helmet from 'helmet';
import { requireAuth } from './middleware/auth.js';
import { errorHandler } from './middleware/errors.js';
import { auth } from './routes/auth.js';
import { tasks } from './routes/tasks.js';

export const app = express();
app.use(helmet());
app.use(express.json({ limit: '50kb' }));

app.use('/api/auth', auth);
app.use('/api/tasks', requireAuth, tasks);
app.use(errorHandler); // last, after every route
