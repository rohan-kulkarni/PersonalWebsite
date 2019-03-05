const express = require('express');
const router = express.Router();

const details=require('../models/details.js')
const skills=require('../models/skills.js')
const workEx=require('../models/workexperience.js')
const projects=require('../models/projects.js')
const education=require('../models/education.js')
const contact=require('../models/contact.js')

router.get('/get_details',(req,res,next)=>{
	details.find(function(err,data){
		console.log()
		res.json(data);
	})
});

router.get('/get_education',(req,res,next)=>{
	education.find(function(err,data){
		res.json(data);
	})
});

router.get('/get_work_experience',(req,res,next)=>{
	workEx.find(function(err,data){
		res.json(data);
	})
});

router.get('/get_skills',(req,res,next)=>{
	skills.find(function(err,data){
		res.json(data);
	})
});

router.get('/get_projects',(req,res,next)=>{
	projects.find(function(err,data){
		res.json(data);
	})
});


router.get('/get_contact',(req,res,next)=>{
	contact.find(function(err,data){
		res.json(data);
	})
});

router.post('/addSkills',(req,res,next)=>{
	"use strict";
	let newdata=new skills({
		name:req.body.name,
		level:req.body.level,
		type:req.body.type
	});
	newdata.save((err,data)=>{
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});

router.post('/addProjects',(req,res,next)=>{
	"use strict";
	let newdata=new projects({
		name:req.body.name,
		technology:req.body.technology,
		description:req.body.description,
		fromdate:req.body.fromdate,
		todate:req.body.todate,
	});
	newdata.save((err,data)=>{
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});
router.post('/addContact',(req,res,next)=>{
	"use strict";
	let newdata=new contact({
		personalemail:req.body.personalemail,
		phone:req.body.phone,
		skype:req.body.skype,
		google:req.body.google,
		address:req.body.address
	});
	newdata.save((err,data)=>{
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});
router.post('/addExp',(req,res,next)=>{
	"use strict";
	let newdata=new workEx({
		company:req.body.company,
		position:req.body.position,
		country:req.body.country,
		city:req.body.city,
		from_year:req.body.from_year,
		to_year:req.body.to_year
	});
	newdata.save((err,data)=>{
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});

router.post('/addEducation',(req,res,next)=>{
	"use strict";
	let newdata=new education({
		college:req.body.college,
		from_year:req.body.from_year,
		to_year:req.body.to_year,
		country:req.body.country,
		city:req.body.city,
		course:req.body.course
	});
	newdata.save((err,data)=>{
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});
router.post('/addPersonal',(req,res,next)=>{
	"use strict";
	let newdata=new details({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		description:req.body.description,
		link_resume:req.body.link_resume,
		link_photo:req.body.link_photo,
		link_fb:req.body.link_fb,
		link_twitter:req.body.link_twitter,
		link_linkedin:req.body.link_linkedin,
		bday:req.body.bday,
		nationality:req.body.nationality,
		language:req.body.language
	});
	newdata.save((err,data)=>{
		console.log(err);
		if(err){
			res.json({msg:'failed'});
		}else{
			res.json({msg:'added'});
		}
	});
});

// router.delete('/deldata/:id',(req,res,next)=>{
// 	data.remove({_id:req.params.id},function(err,result){
// 		if(err){
// 			res.json(err);
// 		}else{
// 			res.json(result)
// 		}
// 	})
// });
module.exports = router;