import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { TEAM_A, tokenFor } from './helpers.js';
import { app } from '../app.js';

const auth = () => `Bearer ${tokenFor({ team: TEAM_A })}`;

describe('POST /api/tasks validation', () => {
  it('rejects a task with no title before touching the database', async () => {
    const res = await request(app).post('/api/tasks').set('Authorization', auth()).send({ title: '' });
    expect(res.status).toBe(400);
  });

  it('rejects a due date that is not a date', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', auth())
      .send({ title: 'Book venue', dueDate: 'next-ish' });
    expect(res.status).toBe(400);
  });
});
