const errorHandler = (err, req, res, next) => {
  console.log(err.name, '<<<< error name');
  console.log(err.errors, '<<<< error errors');
  let statusCode;
  let errors = [];

  switch(err.name) {
    case 'SequelizeValidationError':
      console.log(err.errors.map((el) => el.message));
      statusCode = 400;
      errors = err.errors ? err.errors.map((el) => el.message) : [];
      break;
    case 'LOGIN_FAIL':
      statusCode = 401;
      errors.push('Wrong email or password');
      break;
    case 'TokenExpiredError':
      statusCode = 401;
      errors.push('Your session has been expired');
      break;
    case 'MISSING_ACCESS_TOKEN':
      statusCode = 401;
      errors.push('Missing access token');
      break;
    case 'INVALID_ACCESS_TOKEN':
      statusCode = 401;
      errors.push('Invalid access token');
      break;
    case 'TODO_NOT_FOUND':
      statusCode = 404;
      errors.push('Todo not found');
      break;
    case 'SequelizeUniqueConstraintError':
      statusCode = 409;
      errors.push('Email has been registered');
      break;
    default:
      statusCode = 500;
      errors.push('Internal server error');
  }
  res.status(statusCode).json({ errors });
}

module.exports = errorHandler