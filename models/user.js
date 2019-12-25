import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const userSchema = new mongooseSchema({
        _id: mongoose.Schema.Types.ObjectId,
        userName: {
                type: String,
                required: true,
        },
        password: {
                type: String,
                required: true,
        },
});
