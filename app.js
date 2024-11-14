import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/books.js';
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/books', bookRoutes);

const PORT = 4001; //백엔드 서버 돌리고 싶은 포트로 마음대로 설정 가능
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
