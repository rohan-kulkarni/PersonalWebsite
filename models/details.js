const mongoose = require('mongoose');

const detailsSchema= mongoose.Schema({
	first_name:{
		type: String,
		required : true,
	},
	last_name:{
		type: String,
		required : true,
	},
	description:{
		type: String,
		required : true,
	},
	link_resume:{
		type: String,
		required : true,
	},
	link_photo:{
		type: String,
		required : true,
	},
	link_fb:{
		type: String,
		required : true,
	},
	link_twitter:{
		type: String,
		required : true,
	},
	link_linkedin:{
		type: String,
		required : true,
	},
	bday:{
		type: String,
		required : true,
	},
	nationality:{
		type:String,
		required:true,
	},
	language:{
		Native:{
			type: String,
			required : true,	
		},
		Other : [{
			type: String,
			required : true,
		}]
	}
});

const details=module.exports=mongoose.model('PersonalDetails',detailsSchema);