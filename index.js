const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Bad'));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished:  Boolean
});

const Course = mongoose.model('Course', courseSchema);  

async function createCourse() {

    const course = new Course ({
        name: 'C# Course', 
        author: 'JO', 
        tags: ['Back', 'backend'],
        isPublished: true
    });

const result = await course.save();
console.log(result);
    
}

async function getCourses() {
   const courses = await Course.find();
   console.log(courses);
    
}

// createCourse();
getCourses();


