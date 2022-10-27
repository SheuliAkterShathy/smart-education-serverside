const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


 const courses = require('./data/courses.json');
 const checkouts=require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('Education API Running');
});

 app.get('/courses', (req, res) =>{
     res.send(courses);
 });

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
     res.send(selectedCourse);
 });

app.get('/checkouts/:id', (req, res) => {
    const id = req.params.id;
    const checkoutCourse = checkouts.find(c => c.id === id);
     res.send(checkoutCourse);
 });


app.listen(port, () => {
    console.log('Smart education Server running on port', port);
})