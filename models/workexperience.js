const mongoose = require('mongoose');

const workSchema= mongoose.Schema({
	company:{
		type: String,
		required : true,
	},
	position:{
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
	from_year:{
		type: String,
		required : true,
	},
	to_year:{
		type: String,
		required : true,
	}
});

const workex=module.exports=mongoose.model('Work_Experience',workSchema);