// authController.js
import { registerUser, loginUser } from "../services/authService.js";

export async function signup(req, res) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUser(email, password);
        res.status(200).json({ success: true, user, token });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}