import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  // useNewUrlParser: true, useUnifiedTopology: true // Not needed in Mongoose 6+
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});