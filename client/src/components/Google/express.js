const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const CLIENT_ID = "325733387892-ftj7uc048l7bsbddhcjuh410csmur1ns.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

app.post("/api/google-signin", async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub, name, email, picture } = payload;

        res.status(200).json({ id: sub, name, email, picture });
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Invalid token" });
    }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
