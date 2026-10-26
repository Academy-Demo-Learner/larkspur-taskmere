import request from 'supertest';
import { describe, expect, it } from 'vitest';
import './helpers.js';
import { app } from '../app.js';

describe('POST /api/tasks', () => {
  it('refuses a request with no token', async () => {
    const res = await request(app).post('/api/tasks').send({ title: 'Book venue' });
    expect(res.status).toBe(401);
  });
});
