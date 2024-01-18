// const jsonServer = require('json-server');
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const express = require('express');
// const fileUpload = require('express-fileupload');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// app.use(cors());
// app.use(fileUpload());
// app.use(middlewares);
// app.use(jsonServer.bodyParser);

// // Define your custom API endpoint
// app.get('/api', (req, res) => {
//     res.json({ message: 'This is your custom API endpoint' });
// });

// app.get('/api/upload', (req, res) => {
//     console.log('Received an upload request');
//     res.send('File uploaded!');
// });

// app.post('/api/upload', (req, res) => {
//     console.log('Received an upload request');

//     if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).send('No files were uploaded.');
//     }

//     const imageFile = req.files.file;
//     const base64Data = imageFile.data.toString('base64');

//     // Find the book in your data based on the provided bookId
//     let bookToUpdate = router.db.get('books').find({ id: '' }).value();

//     // If the book doesn't exist, create a new one with a new id
//     if (!bookToUpdate) {
//         const newBookId = router.db.get('books').length;
//         bookToUpdate = {
//             id: newBookId,
//         };

//         // Add the new book to the list of books
//         router.db.get('books').push(bookToUpdate).write();
//     }

//     // Update the existing book's image property
//     bookToUpdate.image = `data:image/png;base64,${base64Data}`;

//     // Write the updated data back to db.json
//     router.write();

//     res.setHeader('Content-Type', 'text/plain');
//     res.send('File uploaded!');
// });

// app.use(router);

// app.listen(PORT, () => {
//     console.log('JSON Server is running on port 3001');
// });

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');

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

    // Save the image data in JSON format
    const jsonData = {
        image: `data:${imageFile.mimetype};base64,${base64Data}`,
    };

    // Save jsonData to a JSON file
    fs.writeFileSync('imageData.json', JSON.stringify(jsonData));

    res.send('File uploaded and data saved!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
