var bio = {
	"name": "Rupinder Kaur",
	"role": "Web Developer",
	"contacts": {
		"mobile" : "0414914215",
		"email": "rupinderkaur2615@gmail.com",
		"linkedIn": "rupinder-kaur-6a8610134",
		"github": "rupinderkaur15",
		"location": "Perth,Western Australia"
	},
	"welcomeMessage": "I'm currently working as a Junior Developer in Perth,WA. I love solving problems and providing "+
			  "solutions that save people time and money and help their day to day lives. Thanks for stopping by!",
	"skills": ["c", "c++", "html5", "CSS3", "mySQL"],
	"biopic": "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "The Developers",
			"title": "Junior web Developer",
			"location": "Uttarakhand,India",
			"dates": "January 2015 - 2016",
			"description": "I was specifically hired for developing interactive web pages for our clients.I had a great time working there with the team."
		},
		{
			"employer": "WeBBer",
			"title": "Web Developer",
			"location": "Perth,Western Australia",
			"dates": "March 2016 - present",
			"description": "I was hired to work as a web developer. I have developed a number of websites for the clients and have always got a positive feedback by the clients. I enjoyed my time at weBBer and learned a tremendous amount "+
				"from everyone I worked with there."
		}
	]
};

var projects = {
	"projects": [
				{
			"title": "Online Resume",
			"dates": "August 2017",
			"description": "Created an online resume as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ['images/p2.jpg']
		},
		{
			"title": "Animal Trading Card",
			"dates": "July 2017",
			"description": "Created an online wiki for Udacity's Web Development Course.",
			"images": ['images/p1.jpg']
		},
		{
			"title": "Arcade game ",
			"dates": "August 2017",
			"description": "Created an Arcade Game as a part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ['images/p3.jpg']
		}
	]
};

var education = {
	"schools": [
		{ 
			"name": "Amrapali Institute of Computer Science",
			"location": "Haldwani,Uttarakhand,India",
			"degree": "Bachelor's in Computer Applications",
			"majors": ["Computer-Science","Object-Oriented Programming","Procedure-Oriented Programming"],
			"dates": "2011 - 2014",
			"url": "www.amrapaliinstitute.com"
		},
		{	"name": "SKM",
			"location": "Haldwani,Uttarakhand,India",
			"degree": "High-school",
			"majors": ["Maths","Physics","Chemistry"],
			"dates": "2010-2011",
			"url": "www.skm.com"
		}],
	"onlineCourses": [
		{ "title": "Front-end web Development",
			"school": "Udacity",
			"dates": "August 2017",
			"url": "https://www.udacity.com"
		},
		{	"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "August 2017",
			"url": "https://www.udacity.com"
		},	
		{ "title": "Intro to JavaScript",
			"school": "Udacity",
			"dates": "August 2017",
			"url": "https://www.udacity.com"
		}
	]
};



bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#topContacts").append(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

	$("#footerContacts").append(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for(var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for(var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for(school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for(onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);