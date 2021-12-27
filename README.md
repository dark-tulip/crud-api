# post-api
Cтек технологий: mongoDB, nodeJS, mongoose, API, Postman, express


Add .env file

```DB_CONNECTION='connection_string'```

start the server:

```npm start```

Валидация полей происходит в самой схеме

**1) POST new post - Добавляет по информации из запроса новый документ в БД**

![image](https://user-images.githubusercontent.com/89765480/147493735-3085104d-f27d-479d-8cea-d2274c4c9619.png)

**2) GET documents from mongoDB by sorting (date and price) - Берет элементы из БД отсортированные по умолчанию, по дате создания**

```http://localhost:3000/posts?page=0&sort=-price```

```http://localhost:3000/posts?page=0&sort=-date```

![image](https://user-images.githubusercontent.com/89765480/147493828-34fbd4e8-94e6-4184-a9d6-13e23d60a166.png)

**3) GET by given ID**

По url '/:all?/:postID' если передан all, возращает только одно главное фото, название, цену, и дату создания

```http://localhost:3000/posts/1/61c9f58aaf25fe0e34b8b7b1```


![image](https://user-images.githubusercontent.com/89765480/147494478-f50ddd44-e473-4712-97f7-f539f43f52f2.png)


Если без параметра для вывода всех полей, возращает по умолчанию полный JSON документ
```http://localhost:3000/posts/61c9f58aaf25fe0e34b8b7b1```


![image](https://user-images.githubusercontent.com/89765480/147494564-5e9300e4-d1ab-458e-ada7-02fb489819c0.png)
