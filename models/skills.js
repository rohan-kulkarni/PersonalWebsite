const mongoose = require('mongoose');

const skillSchema= mongoose.Schema({
	name:{
		type: String,
		required : true,
	},
	level:{
		type: String,
		required : true,
	},
	type:{
		type: String,
		required : true,
	}
});

const skill=module.exports=mongoose.model('Skills',skillSchema);