const User = require("../models/user.model");

const userRepository = {};

userRepository.findOneUser = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
};

userRepository.createUser = async (user) => {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    return savedUser;
};

module.exports = userRepository;
