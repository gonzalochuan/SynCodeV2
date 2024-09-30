import express from 'express';

const app = express();

app.use("/", (req, res) => {
    res.send("Server is running.");
});

app.listen(3000, () => {
    console.log("Server started");
});
