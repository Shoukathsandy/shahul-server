import express from "express";
import User from "../models/user.js"; // Assuming the User model is defined in a file called user.js in the models directory

const router = express.Router();

router.post("/register", async function (req, res) {
    try {
        const { email, password } = req.body;
        const result = new User({ email: email, password: password });
        console.log(result);
        await result.save();
        res.status(200).send("user created successfully");
    } catch (error) {
        console.log(error)
        res.status(500).send("internal server error");
    }
});

router.post("/login", async function (req, res) {
    try {
        const { email, password } = req.body;
        const result = await User.findOne({ email: email, password: password });
        if (result) {
            res.status(200).send("user login successfully");
        } else {
            res.status(400).send("user not found");
        }
    } catch (error) {
        res.status(500).send("internal server error");
    }
})


export const ProjectRouter = router;