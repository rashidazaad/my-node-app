const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
        JSON.stringify({
            message: "Hello, I am Rashid Azaad. and this is my first Node.js App!",
            hostname: require("os").hostname(),
            timestamp: new Date()
        })
    );
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
