import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(e => console.log('MongoDB connection error:', e));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
