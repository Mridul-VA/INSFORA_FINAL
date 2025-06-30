const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

const distPath = path.resolve(__dirname, 'dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ INSFORA site is live at http://localhost:${PORT}`);
});
