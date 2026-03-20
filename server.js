import http from "http"

const server = http.createServer((req, res)=> {
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("Hello nodejs from http ")
}).listen(4000)