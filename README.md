# post-api
Cтек технологий: mongoDB, nodeJS, mongoose, API, Postman, express
Пушим, патчим и делетим данные с модельки в mongoDB

Add .env file

```DB_CONNECTION='connection_string'```

start the server:

```npm start```

Валидация полей происходит в самой схеме

**1) POST new post - Добавляет по информации из запроса новый документ в БД**

<img src="https://user-images.githubusercontent.com/89765480/147493735-3085104d-f27d-479d-8cea-d2274c4c9619.png" width=60% height=60%>


**2) GET documents from mongoDB by sorting (date and price) - Берет элементы из БД отсортированные по умолчанию, по дате создания**

```http://localhost:3000/posts?page=0&sort=-price```

```http://localhost:3000/posts?page=0&sort=-date```


<img src="https://user-images.githubusercontent.com/89765480/147493828-34fbd4e8-94e6-4184-a9d6-13e23d60a166.png" width=60% height=60%>


**3) GET by given ID**

По url '/:all?/:postID' если передан all, возращает только одно главное фото, название, цену, и дату создания

```http://localhost:3000/posts/1/postID```

<img src="https://user-images.githubusercontent.com/89765480/147494478-f50ddd44-e473-4712-97f7-f539f43f52f2.png" width=60% height=60%>



Если без параметра для вывода всех полей, возращает по умолчанию полный JSON документ
```http://localhost:3000/posts/postID```

<img src="https://user-images.githubusercontent.com/89765480/147494564-5e9300e4-d1ab-458e-ada7-02fb489819c0.png" width=60% height=60%>



**4)DELETE Удаление записи из БД по postID**

<img src="https://user-images.githubusercontent.com/89765480/147495312-022b0d07-bafd-4681-af79-b1ada87cdd9e.png" width=60% height=60%>


**5)PATCH Обновление записи по postID**

<img src="https://user-images.githubusercontent.com/89765480/147496109-40d0e329-cb8f-40a1-bbfa-7f12dd0cd7a1.png" width=60% height=60%>
