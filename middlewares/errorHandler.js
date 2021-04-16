const errorHandler = (err, req, res, next) => {
  console.log(err, '<<<< error');
  let statusCode;
  let errorMessage;

  switch(err.name) {
    case 'SequelizeValidationError':
      statusCode = 400;
      errorMessage = 'Bad Request';
      break;
    case '':
      statusCode = 401;
      errorMessage = 'Unauthorized';
    case 'SequelizeUniqueConstraintError':
      statusCode = 403;
      errorMessage = 'Email has been used';
      break;
    case 'ReferenceError':
      statusCode = 404;
      errorMessage = 'Not Found';
      break;
    default:
      statusCode = 500;
      errorMessage = 'Internal server error';
  }
}

module.exports = errorHandler