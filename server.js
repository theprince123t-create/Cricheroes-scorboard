const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Public folder serve करना
app.use(express.static(path.join(__dirname, 'public')));

// Root URL पर overlay.html भेजना
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'overlay.html'));
});

app.listen(PORT, () => {
  console.log(`✅ CricHeroes Overlay Server running on port ${PORT}`);
});
