const Product = require('../model/productModel');


exports.ussd = function(req, res) {

  var message = '';

  var sessionId   = req.body.sessionId;
  var serviceCode = req.body.serviceCode;
  var phoneNumber = req.body.phoneNumber;
  var text 	      = req.body.text;

  console.log(sessionId, serviceCode, phoneNumber, text);

  var length = text.split('*').length;
  var txt = text.split('*');

  // Agro Hack
  if (text === '') {
	message = 'CON Welcome to Agro Hack \n';
	message += '1: Start Application\n';	
	message += '#: End the process';
  }

  // add 
  else if (text === '1') {
    // check if the App is started
  	message = 'CON Enter Your Product';
  }
  else if (length === 2 && txt[0] === '1') {
    message = 'CON Enter the Quantity';
  }
  else if (length === 3 && txt[0] === '1') {
    message = 'CON Enter the Price\n';
    message += 'eg. 500/bag';
  } 
  else if (length === 4 && txt[0] === '1') {
    // commit to db
    message = 'Thanks for adding your product';
    var options = text.split('*');
     let product = new Product(
         {
             phoneNumber: phoneNumber, 
             product: options[1],
             quality: options[2],
             price:options[3],
        });
        product.save();
        res.status(201).send(book)   
  }
  else {
	message = 'END Wrong input';
    // reply with menu
  }

  res.contentType('text/plain');
  res.send(message, 200);
};
