const mongoose = require('mongoose');

const educationSchema= mongoose.Schema({
	college:{
		type: String,
		required : true,
	},
	from_year:{
		type: String,
		required : true,
	},
	to_year:{
		type: String,
		required : true,
	},
	country:{
		type: String,
		required : true,
	},
	city:{
		type: String,
		required : true,
	},
	course:{
		type: String,
		required : true,
	}
});

const education=module.exports=mongoose.model('Education',educationSchema);