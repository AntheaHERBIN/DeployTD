import dotenv from 'dotenv';
dotenv.config();


export default function handler(req, res) {
  const hardCodedUser = {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  };

  const { username, password } = req.body;

  if (username === hardCodedUser.username && password === hardCodedUser.password) {
    res.status(200).json({ message: "Authenticated" });
  } else {
    res.status(401).json({ message: "Authentication failed" });
  }
}
