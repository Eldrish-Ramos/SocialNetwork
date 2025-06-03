# Social Network API

A RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built with Express.js, MongoDB, and Mongoose.

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Usage](#usage)
- [License](#license)

---

## Description

This project is a backend API for a social network application. It allows users to create accounts, post thoughts, react to thoughts, and manage friend lists. The API is built using Node.js, Express.js, MongoDB, and Mongoose ODM.

---

## Features

- User registration and management
- Thought creation, update, and deletion
- Add and remove reactions to thoughts
- Add and remove friends
- MongoDB/Mongoose data models with validation and virtuals
- RESTful API endpoints

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Eldrish-Ramos/SocialNetwork.git
   cd SocialNetwork
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables (optional):**
   - Create a `.env` file in `src/config/` and add your MongoDB URI if not using the default:
     ```
     MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
     ```

4. **Build the TypeScript code:**
   ```sh
   npm run build
   ```

5. **Start the server:**
   ```sh
   npm start
   ```
   The API will run on `http://localhost:3001` by default.

---

## API Endpoints

### Users

- `GET /api/users` — Get all users
- `GET /api/users/:id` — Get a single user by ID (with thoughts and friends)
- `POST /api/users` — Create a new user
- `PUT /api/users/:id` — Update a user by ID
- `DELETE /api/users/:id` — Delete a user by ID (and their thoughts)
- `POST /api/users/:id/friend/:friendId` — Add a friend
- `DELETE /api/users/:id/friend/:friendId` — Remove a friend

### Thoughts

- `GET /api/thought` — Get all thoughts
- `GET /api/thought/:thoughtId` — Get a single thought by ID
- `POST /api/thought` — Create a new thought
- `PUT /api/thought/:thoughtId` — Update a thought by ID
- `DELETE /api/thought/:thoughtId` — Delete a thought by ID

### Reactions

- `POST /api/thought/:thoughtId/reaction` — Add a reaction to a thought
- `DELETE /api/thought/:thoughtId/reaction/:reactionId` — Remove a reaction from a thought

---

## Models

### User

- `username`: String, required, unique, trimmed
- `email`: String, required, unique, must be a valid email
- `thoughts`: Array of Thought ObjectIds
- `friends`: Array of User ObjectIds (self-reference)
- **Virtuals:** `friendCount` — number of friends

### Thought

- `thoughtText`: String, required, 1-128 characters
- `createdAt`: Date, default now, formatted with getter
- `username`: String, required
- `reactions`: Array of Reaction subdocuments

### Reaction (Subdocument)

- `reactionId`: ObjectId, default new ObjectId
- `reactionBody`: String, required, max 128 characters
- `username`: String, required
- `createdAt`: Date, default now, formatted with getter

---

## Usage

- Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test API endpoints.
- Create users, thoughts, reactions, and manage friends via the documented routes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Walkthrough Video

_A walkthrough video demonstrating the API functionality will be provided here._

---