const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Public folder serve
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('✅ Cricheroes Overlay Server is Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
