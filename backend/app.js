require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const customerRoutes = require('./routes/customerRoutes');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', customerRoutes);

app.get('/', (req, res) => {
  res.send("Server is running!");
});

app.get('/customers', (req, res) => {
  res.send("customerPage!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
