# mongonodeconnection
# MongoDB Guide 

# Back-End First Task Assign 


# Task : 

Connection DB with Node.js.

# Introduction : 

What is Node Js ? 

•	Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

What is a Framework?

•	A framework is a collection of programs that do something useful and which you can use to develop your own applications. A framework guides you on how to do something (like a predefined way of doing things).

What is mongo DB?

•	MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.

How mongo DB works?

•	The document data model – presenting you the best way to work with data.  A distributed systems design – allowing you to intelligently put data where you want it.  A unified experience that gives you the freedom to run anywhere – allowing you to future-proof your work and eliminate vendor lock-in. 

 how data stored in mongo DB?
•	Mongo dB is document oriented database into which data is organized as key value pairs across lightweight BSON documents thereby facilitating flexibility in schema design which is a contributing factor in offering high performance against processing massive volume of data.
•	Term Big data refers to massive volume of data and Mongodb being document oriented database partially supporting relationship and database transactions possess great capability to process massive volume of data at faster rates with support of flexible schema design eliminating need to examine datatype,size and constraints associated to data being stored into database and facilitates fast retrieval of data from database through find operations returning cursor pointing to documents contained into resultset.


 Why MongoDB?

•	Easy: Work with data in a natural, intuitive way Fast: Get great performance without a lot of work
•	 Flexible: Adapt and make changes quickly 
•	Versatile: Supports a wide variety of data and queries
•	Availability: Deliver globally resilient apps through sophisticated replication and self-healing recovery.
•	 Scalability: Grow horizontally through native shading.
•	 Workload Isolation: Run operational and analytical workloads in the same cluster. 
•	Locality: Place data on specific devices and in specific geographies for governance, class of service, and low-latency access. 
•	Portability: Database that runs the same everywhere
•	 Cloud Agnostic: Leverage the benefits of a multi-cloud strategy with no lock-in 
•	Global coverage: Available as a service in 50+ regions across the major public cloud providers

which company use mongo dB ?

•	EA Sport.
•	Nokia 
•	US Government 
•	Google 
•	SEGA
•	Ebay


#Code: 

Linking Node js with MongoDB :

 const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Bad'));


/Playground : is The DataBase Name.
.then() = The then() method returns a promise it take to agreement callback function for the success and failure cases of the promise
.Catch() 



const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished:  Boolean
});

We are defining the database schema in our MongoDB by creating and instance a class 
Then we are passing to this class the key values 


 
const Course = mongoose.model('Course', courseSchema);  

After we creating our schema we need to compile it by use it as model 


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

 so here's our course object that maps to a course document in MongoDB. Now let's save this to our database. So, this course object has a method called save  	 an asynchronous operation, because it's going to take some time to save this course to the database, because we are going to access the file system that's why, we are dealing with an asynchronous operation.


 async function getCourses() {
   const courses = await Course.find();
   console.log(courses);
    
}


Here is a function to find the cources we created we have many option to search 

# Result: 

Connected to MongoDB...
[
  {
    tags: [ 'node', 'backend' ],
    _id: 5d472c7bd69b5167d13ad426,
    name: 'Node.Js Course',
    author: 'Franddy',
    isPublished: true,
    date: 2019-08-04T19:05:31.512Z,
    __v: 0
  },
  {
    tags: [ 'Back', 'backend' ],
    _id: 5d472d475d0bc267f6e38a97,
    name: 'C# Course',
    author: 'JO',
    isPublished: true,
    date: 2019-08-04T19:08:55.347Z,
    __v: 0
  }
]
