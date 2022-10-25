const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// const categories = require('./data/categories.json');
 const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Education API Running');
});

// app.get('/news-categories', (req, res) => {
//     res.send(categories)
// });

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// })

 app.get('/courses', (req, res) =>{
     res.send(courses);
 });

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
     res.send(selectedCourse);
 });

app.listen(port, () => {
    console.log('Smart education Server running on port', port);
})