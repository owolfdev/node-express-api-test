// api/users.js
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).send("Hello, World! GET request");
  } else if (req.method === "POST") {
    // Handle POST request
    // ...
  }
}
