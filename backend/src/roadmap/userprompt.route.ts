import {Router} from "express"
import UserPrompt from "./userprompt.model";

const userPromptRouter = Router();

userPromptRouter.get('/history', async (req, res) => {
    try {
        const userPrompts = await UserPrompt.find();
        res.json(userPrompts);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

export default userPromptRouter;