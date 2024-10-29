const express = require('express');
const app = express();
const PORT = 4999;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    console.log('GET request received');
});

app.delete('/', (req, res) => {
    console.log('DELETE request received');
});