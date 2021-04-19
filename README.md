# FancyTodo-Server
_Fancy todo app berfungsi untuk mendata list apa yang akan user kerjakan._
_Applikasi ini dibuat menggunakan postgre sebagai databasenya._

***Getting Started***

* _Jalankan `npm install` di terminal;_
* _Edit `config.json` sesuai kebutuhan;_
* _Edit `.env-template` menjadi `.env` dan edit credential sesuai kebutuhan;_
* _Jalankan `npm run db:teardown` untuk mendelete database;_
* _Jalankan `npm run db:setup` untuk membuat database dari awal lagi;_
* _Jalankan `npm run dev` untuk menjalankan applikasi._


## Available Endpoint
_Todos_

* `POST /todos`
* `GET /todos`
* `GET /todos/:id`
* `PUT /todos/:id`
* `PATCH /todos/:id`
* `DELETE /todos/:id`

_Users_

* `POST /users/register`
* `POST /users/login`

## RESTful Endpoint

### Add Todo
> Menambahkan todo baru

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  POST
  ```

* _URL Params_

  ```
  None
  ```

* _Data Params_

  ```
  {
    "title": req.body.title,
    "description": req.body.title,
    "status": req.body.status,
    "due_date": req.body.due_date
  }
  ```

* _Response_

  **Code 201**

  Jika request berhasil

  ```
  {
    "id": 1,
    "title": req.body.title,
    "description": req.body.title,
    "status": req.body.status,
    "due_date": req.body.due_date
  }
  ```

  **Code 400**

  Validasi tidak terpenuhi,

  jika ada value attributes berupa `empty string` maka akan mengeluarkan error validasi sesuai attributenya

  ```
  {
    "errors": [
      "Title can't be empty!",
      "Description can't be empty!",
      "Status can't be empty!",
      "Date must not be empty!",
      "Only date format allowed",
      "Can't input yesterday date!"
    ]
  }
  ```

  **Code 500**

  Jika value dari attributes ada yang `tidak ada` atau `null`

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```

### Display todo

> Menampilkan semua todo list dari user 

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  GET
  ```

* _URL Params_

  ```
  None
  ```

* _Data Params_

  ```
  None
  ```

* _Response_

  **Code 200**

  Jika request berhasil

  ```
  [
    {
      "id": 1,
      "title": req.body.title,
      "description": req.body.title,
      "status": req.body.status,
      "due_date": req.body.due_date
    },
    {
      "id": 2,
      "title": req.body.title,
      "description": req.body.title,
      "status": req.body.status,
      "due_date": req.body.due_date
    }
  ]
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```

### Display by id

> Menampilkan todo berdasarkan todo id

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  GET
  ```

* _URL Params_

  ```
  id
  ```

* _Data Params_

  ```
  None
  ```

* _Response_

  **Code 200**

  Jika request berhasil

  ```
  {
    "id": 1,
    "title": req.body.title,
    "description": req.body.title,
    "status": req.body.status,
    "due_date": req.body.due_date
  }
  ```

  **Code 404**

  Jika todo tidak ditemukan

  ```
  {
    "errors": [
      "Todo not found"
    ]
  }
  ```

### Edit todo

> Edit value dari todo yang ditemukan

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  PUT
  ```

* _URL Params_

  ```
  id
  ```

* _Data Params_

  ```
  {
    "title": req.body.title,
    "description": req.body.title,
    "status": req.body.status,
    "due_date": req.body.due_date
  }
  ```

* _Response_

  **Code 200**

  Jika request berhasil

  ```
  {
    "id": 1,
    "title": req.body.title,
    "description": req.body.title,
    "status": req.body.status,
    "due_date": req.body.due_date
  }
  ```

  **Code 400**

  Validasi tidak terpenuhi,

  jika ada value attributes berupa `empty string` maka akan mengeluarkan error validasi sesuai attributenya

  ```
  {
    "errors": [
      "Title can't be empty!",
      "Description can't be empty!",
      "Status can't be empty!",
      "Date must not be empty!",
      "Only date format allowed",
      "Can't input yesterday date!"
    ]
  }
  ```

  **Code 404**

  Jika todo tidak ditemukan

  ```
  {
    "errors": [
      "Todo not found"
    ]
  }
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```  

### Update todo

> Update todo status

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  PATCH
  ```

* _URL Params_

  ```
  id
  ```

* _Data Params_

  ```
  {
    "status": req.body.status
  }
  ```

* _Response_

  **Code 200**

  Jika request berhasil

  ```
  {
    "id": 1,
    "title": "Coding API",
    "description": "Coding RESTful API + JWT + Documentation",
    "status": req.body.status,
    "due_date": "2021-04-14"
  }
  ```

  **Code 400**

  Validasi tidak terpenuhi,

  jika ada value attributes status berupa `empty string` maka akan mengeluarkan error validasi sesuai attributenya

  ```
  {
    "errors": [
      "Status can't be empty!"
    ]
  }
  ```

  **Code 404**

  Jika todo tidak ditemukan

  ```
  {
    "errors": [
      "Todo not found"
    ]
  }
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```

### Delete todo

> Delete todo by id

* _URL_

  ```
  /todos
  ```

* _Method_

  ```
  DELETE
  ```

* _URL Params_

  ```
  id
  ```

* _Data Params_

  ```
  None
  ```

* _Response_

  **Code 200**

  Jika request berhasil

  ```
  { "message": "todo success to delete" }
  ```

  **Code 404**

  Jika todo tidak ditemukan

  ```
  {
    "errors": [
      "Todo not found"
    ]
  }
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```

### User Register

> Buat / daftar user baru

* _URL_

  ```
  /users/register
  ```

* _Method_

  ```
  POST
  ```

* _URL Params_

  ```
  None
  ```

* _Data Params_

  ```
  {
    "email": req.body.email,
    "password": req.body.password
  }
  ```

* _Response_

  **Code 201**

  Jika request berhasil

  ```
  {
    "message": "Success registering"
  }
  ```

  **Code 400**

  Jika validasi tidak terpenuhi

  ```
  {
    "errors": [
      "Email must not be empty",
      "Invalid email address",
      "Password must not be empty",
      "Password should be between 6 to 30 characters"
    ]
  }
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```

  ### User Login

> login ke applikasi

* _URL_

  ```
  /users/login
  ```

* _Method_

  ```
  POST
  ```

* _URL Params_

  ```
  None
  ```

* _Data Params_

  ```
  {
    "email": req.body.email,
    "password": req.body.password
  }
  ```

* _Response_

  **Code 201**

  Jika request berhasil

  ```
  {
    "access_token": access_token
  }
  ```

  **Code 401**

  Jika validasi tidak terpenuhi

  ```
 {
    "errors": [
      "Wrong email or password"
    ]
  }
  ```

  **Code 500**

  Jika request gagal karena server error

  ```
  {
    "errors": [
      "Internal server error"
    ]
  }
  ```