// Importing required modules
const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

// Creating an instance of express app
const app = express();

// Using cors middleware to allow cross-origin requests
app.use(cors());

// Parsing incoming request body as JSON
app.use(express.json());

// Defining a route to handle POST requests on '/capitalize'
app.post('/capitalize', (req, res) => {

  // Extracting text from the request body
  const text = req.body.text;

  // Spawning a new child process to run a Python script named 'capitalize.py' with the given text as an argument
  const pythonProcess = spawn('python', ['./capitalize.py', text]);

  // Listening to the 'data' event on the stdout stream of the child process
  pythonProcess.stdout.on('data', (data) => {

    // Converting the data received from the stdout stream to a string and trimming it to remove whitespace
    const capitalizedText = data.toString().trim();

    // Sending the capitalized text as JSON response to the client
    res.json({ capitalizedText: capitalizedText });
  });
});

// Starting the server and listening on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


/*This code sets up an HTTP server using the Express framework in Node.js,
and defines a route to handle POST requests to '/capitalize'.
The route extracts a 'text' field from the request body and spawns a
new child process to run a Python script named 'capitalize.py'
with the given text as an argument. The stdout of the child process 
is then piped back to the parent process and sent as a JSON response to the client.
*/