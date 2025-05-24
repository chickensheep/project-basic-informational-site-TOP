const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	let fileName;

	let fileExtension;

	switch (req.url) {
		case "/":
			fileName = "index.html";
			break;
		case "/about":
			fileName = "about.html";
			break;
		case "/contact-me":
			fileName = "contact-me.html";
			break;
		default:
			fileName = "404.html";
	}

	fs.readFile(path.join(__dirname, "public", fileName), (err, content) => {
		res.writeHead(200, { "content-type": "text/html" });
		res.end(content);
	});
});

server.listen(3000, () => {
	console.log("server is running");
});
