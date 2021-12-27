const mongoose = require('mongoose');


function arrayLimit(val) {
    return val.length <= 3;
}

// Валидация полей: не больше 3 ссылок на фото, описание не больше 1000 символов, название не больше 200 символов;
// Принимает все вышеперечисленные поля: 
// название, описание, несколько ссылок на фотографии, цена;

// Describe the props of schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
    }, 
    description: {
        type: String,
        required: true,
        maxlength: 1000,
    }, 
    photo: {
        type: Array,
        required: true,
        validate: [arrayLimit, '`{PATH}` ypu can load not more than 3 links of photo']
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Post', PostSchema);
