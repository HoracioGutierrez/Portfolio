const express = require("express")
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");
const path = require("path")

const app = express()

app.use(connectLivereload())
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.listen(8000)
liveReloadServer.watch(path.join(__dirname, 'public'))
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
});