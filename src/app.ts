import 'dotenv/config';
import express from 'express';
import isValid from './isValid';

const app = express();

app.use(express.json());

app.get('/api/:dateEntry', (req, res) => {
  const { dateEntry } = req.params;
  const date = new Date(dateEntry);

  // check if date is valid
  if (isValid(date.getTime())) {
    return res.json({
      "unix": date.getTime(),
      "utc": date.toUTCString()})
  } else {
    return res.status(400).json({"error": "Invalid date"})
  }
});

app.listen(process.env.PORT, () => (
  console.log(
    `🚀 Server is running at localhost:${process.env.PORT}`
  )
));