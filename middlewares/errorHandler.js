const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  err.feedback = err.message;
  if (err.name === 'CastError') {
    err.feedback = 'Opps that doesnt look like a valid ID';
  }
  res.status(err.statusCode || 500).json({ error: err.feedback });
};

export default errorHandler;
