import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import { createdAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })

        const userSaved = await newUser.save();
        const token = await createdAccessToken({ id:userSaved._id });

        res.cookie("token", token);
        res.json({
            user: {
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
                createdAt: userSaved.createdAt,
                updatedAt: userSaved.updatedAt,
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = (req, res) => res.send("login")