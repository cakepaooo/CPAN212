const express = require('express');
const router = express.Router();



router.get('/name', (req, res) => {
  res.send('Hello! My name is Duc Nguyen Nguyen');
});


router.get('/greeting', (req, res) => {
  res.send('Hello! My name is Duc Nguyen Nguyen, and my student number is N01650241');
});


router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (isNaN(x) || isNaN(y)) {
    return res.send('Invalid numbers provided.');
  }
  res.send(`The sum of ${x} and ${y} is ${x + y}`);
});


router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;

  if (isNaN(a)) {
      return res.send('Invalid input: a must be a number.');
  }
  if (isNaN(b)) {
      return res.send('Invalid input: b must be a number.');
  }
  if (!operation) {
      return res.send('Invalid input: operation is required.');
  }

  let result;
  switch (operation) {
      case '+':
          result = a + b;
          break;
      case '-':
          result = a - b;
          break;
      case '*':
          result = a * b;
          break;
      case '/':
          result = b !== 0 ? a / b : 'Cannot divide by zero';
          break;
      case '**':
          result = a ** b;
          break;
      default:
          return res.send(`Invalid operation: ${operation}`);
  }

  res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});



module.exports = router;