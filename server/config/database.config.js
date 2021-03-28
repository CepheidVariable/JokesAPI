const mongoose = require('mongoose'),
    db = "jokes-api";

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Success: Database connected"))
    .catch(err => console.log("Warning: Database connection failed", err));