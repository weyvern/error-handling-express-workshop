import express from 'express';
import asyncHandler from './utils/asyncHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import ErrorResponse from './utils/ErrorResponse.js';

const app = express();
const port = process.env.PORT || 5000;

const getUser = async () => {
  if (Math.random() > 0.5)
    throw new ErrorResponse(
      'Cast to ObjectId failed for value "foo" at path "_id"',
      400,
      'CastError'
    );
  return [
    { id: 1, name: 'Claudia' },
    { id: 2, name: 'Sarah' }
  ];
};

const getPosts = async () => {
  throw new Error('No posts for you');
};

app.get(
  '/users',
  asyncHandler(async (req, res, next) => {
    const users = await getUser();

    res.json(users);
  })
);

app.get(
  '/posts',
  asyncHandler(async (req, res, next) => {
    const posts = await getPosts();
    res.json(posts);
  })
);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on server ${port}`));
