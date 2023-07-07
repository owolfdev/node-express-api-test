const express = require("express");
const app = express();
const port = 8080; // Replace with your desired port number
const cors = require("cors");
const axios = require("axios");
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// replace with your own database ID
const databaseId = process.env.NOTION_DATABASE_ID;

app.use(express.json());
app.use(cors());

//routes

// handle GET requests
app.get("/api/users", (req, res) => {
  res.send({ message: "Hello, World! get request" });
});

// Handle POST requests
app.post("/api/users", (req, res) => {
  const { project, email } = req.body;

  const variable = process.env.VARIABLE_NAME;

  const newUser = {
    id: 1,
    project,
    email,
    variable,
  };

  res.status(201).json(newUser);
});

// app.post("/api/post", async (req, res) => {
//   const { title, body } = req.body;

//   const variable = process.env.NOTION_KEY;

//   try {
//     const notionData = {
//       project,
//       email,
//       variable,
//     };

//     res.status(201).json(notionData);
//   } catch (error) {
//     console.error("Error creating post:", error);
//     res.status(500).json({ error: "Failed to create post" });
//   }
// });

app.post("/api/notion", async (req, res) => {
  const { projectId } = req.body;

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  try {
    //
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    //const notionData = response.data;
    res.status(200).json(response.results);
    // res.status(200).json({ message: "Hello, World! post request notion data" });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
});

// end routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
