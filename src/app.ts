import 'dotenv/config';
import express from 'express';
import isValid from './isValid';

export const app = express();

app.use(express.json());

app.get('/api/:dateEntry', (req, res) => {
  const { dateEntry } = req.params;
  let date: Date;

  // check if entry contains only numbers 
  if (/^\d+$/.test(dateEntry)) {
    date = new Date(Number(dateEntry));
  } else {
    date = new Date(dateEntry);
  }
  
  // check if date is valid
  if (!isValid(date.getTime())) {
    return res.status(400).json({"error": "Invalid date"});
  }

  return res.json({
    "unix": date.getTime(),
    "utc": date.toUTCString()
  });
});