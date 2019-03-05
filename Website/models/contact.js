const mongoose = require('mongoose');

const contactSchema= mongoose.Schema({
	personalemail:{
		type: String,
		required : true,
	},
	phone:{
		type: String,
		required : true,
	},
	skype:{
		type: String,
		required : true,
    },
    google:{
        type: String,
		required : true,
    },
    address:{
        type: String,
		required : true,
    }
});

const skill=module.exports=mongoose.model('Contact',contactSchema);