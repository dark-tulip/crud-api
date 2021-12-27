const express = require('express');
const router = express.Router(); 
const Post = require('../models/Post');
// 3 метода: получение списка объявлений, получение одного объявления, создание объявления;


router.get('/', async (req, res) =>  {
    try {
        // Главная страница начинается с нуля (First page)
        const pageOptions = {
            page: parseInt(req.query.page, 10) || 0,
            limit: parseInt(req.query.limit, 10) || 10,  // Пагинация: на одной странице должно присутствовать 10 объявлений;
            sort: req.query.sort || 'date',
        }

        // Поля в ответе: название объявления, ссылка на главное фото (первое в списке), цена.
        const posts = await Post.find({}, { '_id': 0, "title": 1, "photo": { $slice: 1 }, "price": 1, "date": 1 })
                                .skip(pageOptions.page * pageOptions.limit)
                                .limit(pageOptions.limit)
                                .sort(req.query.sort);  // Cортировки: 
                                                        // по цене: по возрастанию price / по убывание -price)
                                                        // дате создания: возрастание date / убывание -date;
        res.json(posts);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


// SPECIFIC POST -- получение одного объявления,
router.get('/:all?/:postID', async (req, res) => {  // postID is dynamic param
    try {
        const post = (req.params.all != 1) ? 
            await Post.findById(req.params.postID) : 
            await Post.findById(req.params.postID, { '_id': 0, "title": 1, "photo": { $slice: 1 }, "price": 1, "date": 1 });

        res.json(post);

    } catch (err) {
        res.json({ message: 'Object not found' });
    }
});


// SUBMIT A POST -- создание объявления;
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        price: req.body.price
    });

    try {
        const savedPost = await post.save();

        // Возвращает ID созданного объявления и код результата (ошибка или успех).
        res.status(200).json(savedPost);
        console.log("New post created")

    } catch(err) {
        // Код состояния 403 (Запрещено) указывает, что сервер понял запрос, но отказывается авторизовать его. 
        res.status(403).send('Не удалось загрузить объявление машины');
    }
});


// TO DELETE POST
router.delete('/:postID', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postID });
        console.log("Deleted " +req.params.postID)
        res.json( removedPost );

    } catch (err) {
        res.json({ message: err });
    }         
});


// UPDATE a post
router.patch('/:postID', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postID },
            { $set: { 
                title: req.body.title, 
                description: req.body.description,
                photo: req.body.photo,
                price: req.body.price } 
            }
        );
        res.json(await Post.findById(req.params.postID));
        console.log("Updated " + req.params.postID)

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;