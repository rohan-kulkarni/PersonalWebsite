const mongoose = require('mongoose');

const projectSchema= mongoose.Schema({
	name:{
		type: String,
		required : true,
	},
	technology:{
		type: String,
		required : true,
	},
	description:{
		type: String,
		required : true,
	},
	fromdate:{
		type: String,
		required : true,
	},
	todate:{
		type: String,
		required : true,
	}
});

const project=module.exports=mongoose.model('Projects',projectSchema);