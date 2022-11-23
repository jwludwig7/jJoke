const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    userFirstName: {
        type: String,
        required: [true, "First Name required"],
        minlength: [2, "name has to be more than 2 characters"]
    },
    userLastName: {
        type: String,
        required: [true, "Last Name required"],
        minlength: [2, "name has to be more than 2 characters"]
    },
    userName: {
        type: String,
        required: [true, "Username required"],
        minlength: [5, "type need to be at least 5 characters"]
    },
    userEmail: {
        type: String,
        required: [true, "Email required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }

    },
    userPassword: {
        type: String,
        required: [true, "Password required"],
        minlength: [6, "Password longer than 5 characters"]
    },
    userConfirmPW: {
        type: String,
        required: [true, "Password needs to match"],
        // required:[if (userPassword != userConfirmPW)]
        minlength: [6, "Password longer than 5 characters"]
    }

}, { timestamps: true })

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.userPassword !== this.userConfirmPW) {
        this.invalidate('userConfirmPW', 'Password must match confirm password');
    }
    next();
});
// bcrypt userPassword
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.userPassword, 10)
        .then(hash => {
            this.userPassword = hash;
            next();
        });
});
// bcrypt user confirmPW
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.userConfirmPW, 10)
        .then(hash => {
            this.userConfirmPW = hash;
            next();
        });
});


//this is how we register our schema.
const User = mongoose.model("User", UserSchema);
// const Message = mongoose.model("Message", MessageSchema);


//Finally we export it out of the file.
module.exports = User;
// module.exports = Message;








    // const [userFirstName, setFirstName] = useState("");
    // const [userLastName, setLastName] = useState("");
    // const [userBranch, setBranch] = useState("");
    // const [userLocation, setLocation] = useState("");
    // const [userRank, setRank] = useState("");
    // const [userRateMOS, setRateMos] = useState("");
    // const [userLOS, setLOS] = useState("");
    // const [errors, setErrors] = useState(null);