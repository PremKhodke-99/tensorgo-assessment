const User = require("../model/user.model");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    const { name, role, email, password } = req.body;

    try {
        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).send({
                success: false,
                message: 'User Already Exist'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            role,
            email,
            password: hashedPassword,
        });
        console.log(newUser);
        await newUser.save();

        return res.status(201).send({
            success: true,
            message: 'New User Registered'
        });
    } catch (error) {
        console.error('Internal server error', error.message);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({
                success: false,
                message: 'User not found'
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            return res.status(200).send({
                success: true,
                message: 'Login Successful',
                user,
            });
        } else {
            return res.status(400).send({
                success: false,
                message: 'Wrong Password',
            });
        }

    } catch (error) {
        console.error('Internal server error', error.message);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.send(200).send({
            success: true,
            message: "users fetched",
            users
        })
    } catch (error) {
        console.error('Internal server error', error.message);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const updateUser = async (req, res) => {
    const { name, email, role } = req.body;
    const { id } = req.params;
    try {
        let user = await User.findByIdAndUpdate(id, {
            name, email, role
        });

        if (!user) {
            res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }

        res.status(200).send({
            success: true,
            message: "User updated",
            user
        })
    } catch (error) {
        console.error('Internal server error', error.message);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "User deleted"
        })
    } catch (error) {
        console.error('Internal server error', error.message);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}