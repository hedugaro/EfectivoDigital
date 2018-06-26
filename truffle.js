

var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": "index.html",
    "transaction.html": "transaction.html",
    "gracias.html": "gracias.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "lightwallet.min.js": [
      "javascripts/lightwallet.min.js"
    ],
    "ethereumjs-tx.js": [
      "javascripts/ethereumjs-tx.js"
    ],
    "css/style.css": [
      "css/style.css"
    ],
    "css/w3.css": [
      "css/w3.css"
    ],
    "images/": "images/"
  }),

/*  networks: {
     live: {
       network_id: 3,    // Official ropsten network id
       provider: engine, // Use our custom provider
       from: address     // Use the address we derived
     }
   }/*,
   development: {
     host: "localhost",
     port: 8545,
     network_id: "*" // Match any network id
   }*/
};
