import express from "express"
import path from "node:path"

const app = express();
const port = 3000;



// listening to the port or (starting the server)
app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});

// adding things to the website or server
app.get("/", (req, res)=> {
    res.send("<h1> Hello from the server app </h1> ");
})
// adding new endport to website
app.get("/about", (req, res)=> {
    res.send("<h1> Hello from the server - about site </h1> ");
})

// Serve static files form the public directory
app.use(express.static(path.join(import.meta.dirname, "public")));

// adding a endport html file to website static html
app.get("/web", (req, res)=> {
    res.sendFile(path.join(import.meta.dirname,"public", "index.html"));
});



