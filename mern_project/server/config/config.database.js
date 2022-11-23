// const mongoose = require('mongoose');


// mongoose.connect("mongodb://localhost/${db_name}", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
//     .then(() => console.log("Now ROCKING the mainframe!!"))
//     .catch(() => console.log("You ain't connected! Try again JACK! "))





const mongoose = require("mongoose");

module.exports = db_name => {
    mongoose
        .connect(`mongodb://localhost/${db_name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => console.log(`Successfully connected to "${db_name}" database`))
        .catch(err => console.log("mongoose connection failed: ", err));
};

