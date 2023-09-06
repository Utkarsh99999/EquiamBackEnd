import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './userModal';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;
const DB_URI = "mongodb+srv://utkarsh:Utkarsh%40123@cluster0.3p9w8b1.mongodb.net/equiam";

mongoose.connect(DB_URI);
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('DataBase Connection Successful');
});

const app: Express = express();
app.use(cors());
app.use(express.static('public'));


app.get('/userdata', async (req: Request, res: Response) => {
  try {
    const userdata = await User.find();
    if (userdata) {
      res.status(200).send(userdata);
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/post/comment/reply', async (req: Request, res: Response) => {
  try {
    const userdata = await User.find();
    if (userdata) {
      res.status(200).send(userdata);
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/post/replies/reply', async (req: Request, res: Response) => {
  try {
    const userdata = await User.find();
    if (userdata) {
      res.status(200).send(userdata);
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


try {
  app.listen(port, () => {
    console.log(`Server started Port: ${port}`);
  });
} catch (error: any) {
  console.log(`${error.message} did not connect`);
}
