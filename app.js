const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>DevOps CI/CD Demo By Rashid Azaad</title>
<style>
body{
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f7fb;
    margin:0;
}
.container{
    width:700px;
    margin:60px auto;
    background:white;
    padding:40px;
    border-radius:10px;
    box-shadow:0 0 15px rgba(0,0,0,.2);
    text-align:center;
}
h1{
    color:#0d6efd;
}
.success{
    color:green;
    font-size:22px;
    font-weight:bold;
}
.info{
    text-align:left;
    margin-top:30px;
    font-size:18px;
}
.footer{
    margin-top:30px;
    color:gray;
}
</style>
</head>

<body>

<div class="container">

<h1>🚀 Node.js CI/CD Demo</h1>

<p class="success">
Application is Running Successfully
</p>

<hr>

<div class="info">
<p><strong>Application:</strong> Node.js</p>
<p><strong>Container:</strong> Docker</p>
<p><strong>Source Code:</strong> GitHub</p>
<p><strong>CI Tool:</strong> Jenkins</p>
<p><strong>Container Registry:</strong> Docker Hub</p>
<p><strong>Version:</strong> Build #7</p>
</div>

<hr>

<h2>Pipeline Status</h2>

✅ GitHub Push<br>
✅ Jenkins Build<br>
✅ Docker Image Created<br>
✅ Docker Hub Push<br>

<p class="footer">
Developed by <strong>Rashid Shabbir Azaad</strong><br>
DevOps CI/CD Learning Project with docker
</p>

</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
