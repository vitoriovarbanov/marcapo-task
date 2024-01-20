const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(fileUpload());

app.post('/api/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const imageFile = req.files.file;
    const base64Data = imageFile.data.toString('base64');

    const timestamp = Date.now();
    const filename = `imageData_${timestamp}.json`;

    // Save the image data in JSON format
    const jsonData = {
        image: `data:${imageFile.mimetype};base64,${base64Data}`,
    };

    // Save jsonData to a JSON file
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, JSON.stringify(jsonData));

    res.send('File uploaded and data saved!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
