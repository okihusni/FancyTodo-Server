# FancyTodo-Server
Fancy Todo - Server
* RESTful endpoint for Todo CRUD operation
* RESTful endpoint for User register and login
* Initiate `npm init` to install all dependency required

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
Adding new todo to the list

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

  ```
  { "error": "SequelizeValidationError" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
  ```

### Display todo

> Display all todo list

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

  ```
  { "error": "Internal Server Error" }
  ```

### Display by id

> Display todo by id

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

  ```
  { "error": "not found" }
  ```

### Edit todo

> Edit all todo element by id

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

  ```
  { "error": "not found" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
  ```  

### Update todo

> Update todo status by id

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

  ```
  { "error" : "SequelizeValidationError" }
  ```

  **Code 404**

  ```
  { "error" : "not found" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
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

  ```
  { "message": "todo success to delete" }
  ```

  **Code 404**

  ```
  { "error": "not found" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
  ```

### User Register

> Create / register new user

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

  ```
  {
    "message": "Success registering"
  }
  ```

  **Code 400**

  ```
  { "error": "SequelizeValidationError" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
  ```

  ### User Login

> login to app

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

  ```
  {
    "access_token": access_token
  }
  ```

  **Code 401**

  ```
  { "error": "Invalid email or password" }
  ```

  **Code 500**

  ```
  { "error": "Internal Server Error" }
  ```