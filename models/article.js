import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const articleSchema = new mongooseSchema({
        _id: mongoose.Schema.Types.ObjectId,
        title: {
                type: String,
                required: true,
        },
        decsription: {
                type: String,
                required: true,
        },
        contentText: {
                type: String,
                required: true,
        },
        imageUrl: {
                type: String,
                required: true,
        },
        type: {
                type: String,
                required: true,
        },
});

export default mongoose.model('ArticleSchema', articlesSchema);
