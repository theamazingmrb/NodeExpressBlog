import mongoose from 'mongoose';
import ArticleSchema from '../models/article';

// create new article
export function createArticle(req, res) {
        const article = new article({
                _id: mongoose.Types.ObjectId(),
                title: req.body.title,
                description: req.body.description,
                contentText: req.body.contentText,
                imageUrl: req.body.imageUrl,
                type: req.body.type,
        });

        return article
                .save()
                .then(newArticle =>
                        res.status(201).json({
                                success: true,
                                message: 'new Article created successfully',
                                Article: newArticle,
                        })
                )
                .catch(error => {
                        res.status(500).json({
                                success: false,
                                message: 'Server error. Please try again.',
                                error: error.message,
                        });
                });
}
