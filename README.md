# CRUD API with Express.js and Mongoose 

This repository contains a simple CRUD (Create, Read, Update, Delete) API built using Express.js and Mongoose.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm
- MongoDB

### Installation

```bash
https://github.com/SVNKVN9/simple-CRUD-API-mongoose.git
cd simple-CRUD-API-mongoose
npm install
npm start
```

## API Endpoints
- Create a Blog
```bash
POST /blogs
```
```json
{
    "title": "Blog title",
    "description": "Blog description"
}
```
**response (201 Created)**:
```json
{
    "_id": "123456789012345678901234",
    "title": "Blog title",
    "description": "Blog description",
    "createdAt": "2023-12-11T17:09:21.049Z",
    "updatedAt": "2023-12-11T17:09:21.049Z"
}
```

- Get all Blogs
```bash
GET /blogs
```
**response (200 OK)**:
```json
[
    {
        "_id": "657742410a745004a070b463",
        "title": "Blog title 1",
        "description": "Blog description 1",
        "createdAt": "2023-12-11T17:09:21.049Z",
        "updatedAt": "2023-12-11T17:09:21.049Z"
    },
    {
        "_id": "6577426b0a745004a070b465",
        "title": "Blog title 2",
        "description": "Blog description 2",
        "createdAt": "2023-12-11T17:10:03.519Z",
        "updatedAt": "2023-12-11T17:10:03.519Z"
    }
]
```

- Update a Blog
```bash
PUT /blogs/:id
```
**request**:
```json
{
    "title": "new title"
}
```
**response (200 OK)**:
```json
{
    "_id": "657742410a745004a070b463",
    "title": "new title",
    "description": "test3",
    "createdAt": "2023-12-11T17:09:21.049Z",
    "updatedAt": "2023-12-11T17:16:14.683Z"
}
```

- Delete a Blog
```bash
DELETE /blogs/:id
```
**response (204 No Content)**:
```json
{}
```