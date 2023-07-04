const express = require("express");
const app = express();
const port = 3000; // Replace with your desired port number

app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World! get request");
});

// Handle POST requests
app.post("/api/users", (req, res) => {
  // Retrieve data from the request body
  const { name, email } = req.body;

  // Perform any necessary validations or processing
  // ...

  // Create a new user (dummy example)
  const newUser = {
    id: 1,
    name,
    email,
  };

  // Send the response
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
