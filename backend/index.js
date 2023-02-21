import express from 'express';
import cors from 'cors';
const PORT = 5000;
const app = express();

const USERS = [];

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'success' });
});

app.post('/', (req, res) => {
	USERS.push(req.body);
	res.json({ message: 'success' });
});

app.listen(PORT, err =>
	err ? console.log(err) : console.log(`Server started on port ${PORT}`)
);
