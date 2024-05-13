const express = require('express');
const path = require('path');

const app = express();

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each HTML file
app.get('/form1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form1.html'));
});

app.get('/form2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form2.html'));
});

app.get('/form3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form3.html'));
});

app.get('/form4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form4.html'));
});

app.get('/form5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form5.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
