/* Define bio, education, work, project objects follow the schema */

// Define bio object
var bio = {
    name: "Joey Lau",
    role: "Web Developer",
    contacts: {
        "mobile": "12345678",
        "email": "Joey@gmail.com",
        "github": "GericLau",
        "twitter": "joeylaughing",
        "location": "Shenzhen"
    },
    welcomeMessage: "Hello world!",
    skills: ["HTML", "CSS", "Javascript"],
    biopic: "images/fry.jpg",
    display: function(){
        // format name and prepend to header div
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        // format role and insert after to h1#name
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $(formattedRole).insertAfter("#name");
        // Another way to insert name and role
        /*********************************
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        **********************************/
        // Contacts Parts
        // format mobile and append to ul#topContacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
        $("#topContacts").append(formattedMobile);
        // format email and append to ul#topContacts
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
        $("#topContacts").append(formattedEmail);
        // format github and append to ul#topContacts
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
        $("#topContacts").append(formattedGithub);
        // format twitter and append to ul#topContacts
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
        $("#topContacts").append(formattedTwitter);
        // format location and append to ul#topContacts
        var formattedLoaction = HTMLlocation.replace("%data%", bio.contacts["location"]);
        $("#topContacts").append(formattedLoaction);
        // format bio picture and append to Header
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        // format welcome message and append to Header
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
        // use for loop with skill array
        if(bio["skills"].length > 0) {
            $("#header").append([HTMLskillsStart]);
            for(var i = 0; i < bio["skills"].length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        // append the contact info to the footer
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLoaction);
    }
};

var education = {
    "schools": [
    {
        "name": "Awesome University",
        "location": "Guangzhou, Guangdong, China",
        "degree": "Bachelor Degree",
        "majors": ["Finance", "Economics"],
        "dates": "2010.09-2014.07",
        "url": "http://example.com/"
    },
    {
        "name": "B University",
        "location": "Hongkong",
        "degree": "Master Degree",
        "majors": ["Computer Science", "Finances"],
        "dates": "2014.09-2016-07",
        "url": "http://example.com/"
    }],
    "onlineCourses": [
    {
        "title": "Udacity Web Developer Course",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://example.com/"
    },
    {
        "title": "CSS and Javascript",
        "school": "codecademy",
        "dates": "2013",
        "url": "https://www.codecademy.com/"
    }],
    display: function(){
        // Append HTMLschoolStart first
        $("#education").append(HTMLschoolStart);
        // Use for loop to display schools array
        for(var i = 0; i < education.schools.length; i++){
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry").append(formattedSchoolTitle);
            // format school date and append to education entry
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry").append(formattedSchoolDates);
            // format school location and append to education entry
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry").append(formattedSchoolLocation);
            // Use join() to turn majors array into string
            var schoolsMajors = education.schools[i].majors.join();
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", schoolsMajors);
            $(".education-entry").append(formattedSchoolMajors);
        }
        // Append onlineCourse title first
        $("#education").append(HTMLonlineClasses);
        // Append education-entry div to contain the online section
        $("#education").append(HTMLschoolStart);
        // Use for loop to display onlineCourses array
        for(var i = 0; i < education.onlineCourses.length; i++){
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnline = formattedOnlineTitle + " " + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnline);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Abc company",
        "title": "Front-end Developer",
        "location": "Shenzhen",
        "dates": "2015.05 - Present",
        "description": "Front-end Developer"
    },
    {
        "employer": "B Software Develop Company",
        "title": "Software Engineer",
        "location": "Singapore",
        "dates": "2013.01 - 2015.05",
        "description": "Support finance department"
    }],
    // Work experience
    display: function(){
        $("#workExperience").append(HTMLworkStart);
        for(var i = 0; i < work.jobs.length; i++){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedWorkTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "FTP",
        "dates": "2013.05-2014.12",
        "description": "Finance Transation Platform",
        "images": ["https://placekitten.com/g/500/320", "https://placekitten.com/g/500/320"]
    },
    {
        "title": "Suncoast",
        "dates": "2013.01-2013.05",
        "description": "A real estate website",
        "images": ["https://placekitten.com/g/500/320"]
    }],
    // Project display section
    display: function() {
        for(var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);
            for(var j = 0; j < projects.projects[i].images.length; j++){
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};


bio.display();
education.display();
work.display();
projects.display();

// Map section
$("#mapDiv").append(googleMap);

// Name game international button
/*$("#main").append(internationalizeButton);

function inName(name){
    var arrayName = name.trim().split(" ");
    var firstName = arrayName[0][0].slice(0,1).toUpperCase() + arrayName[0].slice(1).toLowerCase();
    var familyName = arrayName[1].toUpperCase();
    var fullName = firstName + " " + familyName;
    return fullName;
}*/