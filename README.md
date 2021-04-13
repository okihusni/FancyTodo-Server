# FancyTodo-Server
Fancy Todo - Server
* RESTful endpoint for CRUD operation
* Initiate `npm init` to install all dependency required

## Available Endpoint
* `POST /todos`
* `GET /todos`
* `GET /todos/:id`
* `PUT /todos/:id`
* `PATCH /todos/:id`
* `DELETE /todos/:id`

## RESTful Endpoint

### POST /todos

> Create new todo

* _Request Body_

  ```json
  {
    "title": "Learning",
    "description": "Learning RESTful API",
    "status": "open",
    "due_date": "2021-04-20"
  }
  ```

* _Response_

  **Code 201**

  ```json
  {
    "id": 1,
    "title": "Learning",
    "description": "Learning RESTful API",
    "status": "open",
    "due_date": "2021-04-20"
  }
  ```

  **Code 400**

  ```
  { error : "SequelizeValidationError" }
  ```

  **Code 500**

  ```
  Internal Server Error
  ```

### GET /todos

> Display todo list

* _Request Body_

  ```
  No need
  ```

* _Response_

  **Code 200**

  ```json
  [
    {
      "id": 1,
      "title": "Learning",
      "description": "Learning RESTful API",
      "status": "done",
      "due_date": "2021-04-20"
    },
    {
      "id": 2,
      "title": "Coding",
      "description": "Coding RESTful API",
      "status": "open",
      "due_date": "2021-04-20"
    }
  ]
  ```

  **Code 500**

  ```
  Internal Server Error
  ```

### GET /todos/:id

> Display todo list

* _Request Body_

  ```
  No need
  ```

* _Response_

  **Code 200**

  ```json
  {
    "id": 2,
    "title": "Coding",
    "description": "Coding RESTful API",
    "status": "open",
    "due_date": "2021-04-20"
  }
  ```

  **Code 404**

  ```
  { error: "not found" }
  ```

### PUT /todos/:id

> Edit all todo element

* _Request Body_

  ```json
  {
    "title": "Coding API",
    "description": "Coding RESTful API + JWT",
    "status": "done",
    "due_date": "2021-04-14"
  }
  ```

* _Response_

  **Code 200**

  ```json
  {
    "id": 2,
    "title": "Coding API",
    "description": "Coding RESTful API + JWT",
    "status": "done",
    "due_date": "2021-04-14"
  }
  ```

  **Code 404**

  ```
  { error: "not found" }
  ```

  **Code 500**

  ```
  Internal Server Error
  ```  

### PATCH /todos/:id

> Edit todo status

* _Request Body_

  ```json
  {
    "status": "open",
  }
  ```

* _Response_

  **Code 200**

  ```json
  {
    "id": 2,
    "title": "Coding API",
    "description": "Coding RESTful API + JWT + Documentation",
    "status": "open",
    "due_date": "2021-04-14"
  }
  ```

  **Code 400**

  ```
  { error : "SequelizeValidationError" }
  ```

  **Code 404**

  ```
  { error: "not found" }
  ```

  **Code 500**

  ```
  Internal Server Error
  ```

### DELETE /todos/:id

> Delete todo

* _Request Body_

  ```json
  No need
  ```

* _Response_

  **Code 200**

  ```
  message: "todo success to delete"
  ```

  **Code 404**

  ```
  { error: "not found" }
  ```

  **Code 500**

  ```
  Internal Server Error
  ```