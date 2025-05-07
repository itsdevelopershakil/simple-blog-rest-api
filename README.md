# Blog API

A RESTful API built with **Express.js** and **MongoDB** for managing blog posts. This API is hosted on **Render** and allows users to create, read, update, and delete blog posts.

You can access the API here:  
**`https://simple-rest-api-ptn3.onrender.com/v1/blogs`**

---

## Features

- **CRUD operations** for blog posts:
  - Create a new blog post
  - Get all blog posts or a specific blog post
  - Update a blog post
  - Delete a blog post

---

## Prerequisites

Before you start, you’ll need the following:

- **Node.js** (preferably LTS)
- **MongoDB** (use MongoDB Atlas or local MongoDB)
- **Postman** or **any HTTP client** to test the API

---

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/itsdevelopershakil/simple-rest-api.git
cd simple-rest-api
```

### 2. Install dependencies:

To install all required dependencies for the project, run:

```bash
npm install
```

This will download and install the necessary packages listed in the `package.json` file.

### 3. Set up your `.env` file:

Create a `.env` file in the root of the project and add your MongoDB connection string and other environment variables:

```env
MONGO_URI=your-mongodb-uri
PORT=3000
```

**Note:**

- If you're using MongoDB Atlas, you can get your URI from the MongoDB Atlas dashboard. Your URI should look like:

  ```
  mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/blog?retryWrites=true&w=majority
  ```

- If you're running MongoDB locally, it might look like this:

  ```
  mongodb://localhost:27017/blog
  ```

### 4. Run the application locally:

Once your environment is set up, you can start the application by running:

```bash
npm start
```

This will start the Express server on the port defined in your `.env` file (default is `3000`), and you should be able to access it at `http://localhost:3000`.

---

## API Endpoints

You can access and use the Blog API at:  
**`https://simple-rest-api-ptn3.onrender.com/v1/blogs`**

### 1. Create Blog Post (POST `/v1/blogs`)

**Request body:**

```json
{
  "title": "Blog Title",
  "description": "Blog description",
  "author": "Author Name"
}
```

**Response:** The newly created blog post object, including the `_id`.

---

### 2. Get All Blog Posts (GET `/v1/blogs`)

**Response:** A list of all blog posts in JSON format.

---

### 3. Get a Specific Blog Post (GET `/v1/blogs/:id`)

**Parameters:**  
`id` (MongoDB ObjectId of the blog post)

**Response:** The specific blog post object.

---

### 4. Update Blog Post (PUT `/v1/blogs`)

**Request body:**

```json
{
  "_id": "blog-post-id",
  "title": "Updated Blog Title",
  "description": "Updated blog description",
  "author": "Updated Author Name"
}
```

**Response:** The updated blog post object.

**Note:** The `_id` (MongoDB ObjectId) is required in the request body to identify the blog post to update.

---

### 5. Delete Blog Post (DELETE `/v1/blogs/:id`)

**Parameters:**  
`id` (MongoDB ObjectId of the blog post to delete)

**Response:** A message indicating whether the blog post was deleted successfully.

---

## Deployment

### Deployment on Render:

1. Push your code to GitHub.
2. Sign up or log in to Render.
3. Create a new Web Service and link your GitHub repository.
4. In the service settings:
   - Set the **Build Command** to leave it blank.
   - Set the **Start Command** to `npm start`.
5. Add environment variables such as `MONGO_URI` and `PORT` in the Render dashboard.
6. Click **Deploy**.

After the deployment is complete, you can access the API at:  
**`https://simple-rest-api-ptn3.onrender.com/v1/blogs`**

---

## License

This project is licensed under the MIT License – see the `LICENSE` file for details.

---

## Troubleshooting

- **Error: failed to connect to MongoDB:**  
  Ensure your MongoDB URI in the `.env` file is correct. If using MongoDB Atlas, make sure you have whitelisted your IP address on Atlas.

- **Postman response not as expected:**  
  Make sure your server is running (`npm start`) and that the API endpoints are correct. Double-check the URL path (`/v1/blogs`) and ensure you're using the correct HTTP method (e.g., `POST` for creating a blog post).

- **CORS-related issues:**  
  If you're having trouble with cross-origin requests, make sure that you have added CORS middleware in your Express app, as shown in the code.

---

## Notes

- You can use **Postman**, **Insomnia**, or **curl** to test the API endpoints.
- For production use, you should secure your API (e.g., using **JWT authentication**) and validate inputs to prevent malicious activity.
