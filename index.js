const MIE = require('make-it-easy');
 
let app = new MIE();

app.config({public: __dirname + '/public'});

app.start();