/*
 * EVENT LISTENER:  NAVIGATION PAGES
 *                    WHO WE ARE
 *                    WHAT WE DO
 *                    WHERE TO STUDY
 */
document.addEventListener('DOMContentLoaded', function() {

  // SELECT: LINKS
  var links = document.querySelectorAll('.navigation .pages a h6');

  // FOR EACH LINK IN LINKS
  links.forEach(function(link) {

    // EVENT: MOUSE ENTER
    link.addEventListener('mouseenter', function(event) {
      var text = event.target.innerHTML;

      // ADD <strong> </strong>
      event.target.innerHTML = "<strong>" + text + "</strong>";
    });

    // EVENT: MOUSE LEAVE
    link.addEventListener('mouseleave', function(event) {
      var text = event.target.innerHTML;

      // REMOVE <strong> </strong>
      event.target.innerHTML = text.replace("<strong>", "").replace("</strong>", "");
    });
  });
});





/*
 * EVENT LISTENER:  ACCORDIONS
 *
 * SECTIONS:        EXPLORE CAREERS (HOME)
 *                  SESSIONS (WHAT WE DO)
 * 
 * REFERENCE:       W3 SCHOOLS 
 *                  HOW TO COLLAPSIBLES/ACCORDION
 *                  www.w3schools.com/howto/howto_js_accordion.asp
 */
document.addEventListener('DOMContentLoaded', function() {

  // SELECT: ACCORDION HEADINGS
  var accordionHeadings = document.querySelectorAll('.accordion-heading');

  // FOR EACH ACCORDION HEADING IN ACCORDION HEADINGS
  accordionHeadings.forEach(function(accordionHeading) {

    // EVENT: CLICK
    accordionHeading.addEventListener('click', function() {

      // ACCORDION ITEM: ACTIVE
      var accordionItem = this.parentElement;
      accordionItem.classList.toggle('active');

      // SELECT: BACKGROUND
      var background = this.querySelector('.background');
      
      if (accordionItem.classList.contains('active')) {
        // UPDATE: ARROW UP
        background.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;";
      } else {
        // UPDATE: ARROW RIGHT
        background.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;";
      }
    });
  });
});





/*
 * EVENT LISTENER:  LOGOS
 *
 * SECTION:         SPONSORS (HOME)
 */
document.addEventListener('DOMContentLoaded', function() {

  // SELECT: LOGOS
  const logos = document.querySelectorAll('.logos a');

  // FOR EACH LOGO IN LOGOS
  logos.forEach(function(logo) {

    // EVENT: MOUSE OVER
    logo.addEventListener('mouseover', function() {

      // OTHER LOGOS: OPACTY = 100%
      logos.forEach(function(otherLogo) {
          if (otherLogo !== logo) {
              otherLogo.querySelector('.overlay').style.opacity = '1';
          }
      });
    });

    // EVENT: MOUSE OUT
    logo.addEventListener('mouseout', function() {

      // OTHER LOGOS: OPACTY = 0%
      logos.forEach(function(otherLogo) {
          otherLogo.querySelector('.overlay').style.opacity = '0';
      });
    }); 
  });
});





/*
 * EVENT LISTENER:  CAROUSEL ITEMS
 *
 * SECTION:         HEAR IT FROM HER (HOME)
 */
document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;

  // SELECT: CAROUSEL ITEMS
  var carouselItems = document.querySelectorAll('.carousel-item');
  var totalItems = carouselItems.length;

  // SELECT: NEXT BUTTON
  var nextButton = document.getElementById('next-slide');

  // SELECT: PREVIOUS BUTTON
  var previousButton = document.getElementById('previous-slide');

  // SELECT: CAROUSEL CONTROLS (DOTS)
  var dots = document.querySelectorAll('.dot');

  // FUNCTION: SHOW SLIDE
  function showSlide(index) {

    // FOR EACH CAROUSEL ITEM IN CAROUSEL ITEMS
    carouselItems.forEach(function(item) {

      // HIDE: ALL
      item.style.display = 'none';
    });
  
    // SHOW: CURRENT CAROUSEL ITEM
    carouselItems[index].style.display = 'flex';

    // FOR EACH DOT IN DOTS
    dots.forEach(function(dot, dotIndex) {

      // REMOVE ACTIVE
      dot.classList.remove('active');

        // UPDATE: ACTIVE DOT
        if (dotIndex === index) {
            dot.classList.add('active');
        }
    });      
  }

  // FUNCTION: SHOW SLIDE
  showSlide(currentIndex);

  // EVENT: CLICK
  nextButton.addEventListener('click', function() {

    // UPDATE: INDEX (INCREMENT)
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  });

  // EVENT: CLICK
  previousButton.addEventListener('click', function() {

    // UPDATE: INDEX (DECREMENT)
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  });

  // FOR EACH DOT IN DOTS
  dots.forEach(function(dot, dotIndex) {

    // EVENT: CLICK
    dot.addEventListener('click', function() {

      // UPDATE: INDEX
      currentIndex = dotIndex;
      showSlide(currentIndex);
    });
  });
});



/*
 * EVENT LISTENER:  WHERE TO STUDY (WORKFLOW: STATES > DEGREES > DISCOVER YOUR DEGREE)
 *
 * SECTIONS:        STATES (WHERE TO STUDY)
 *                  DEGREES (WHERE TO STUDY)
 *                  DISCOVER YOUR DEGREE (WHERE TO STUDY)
 * 
 * BUTTONS:         GO TO STATES
 *                    ARROW BACK (<)
 *                  GO TO DEGREES
 *                    ACT
 *                    NSW
 *                    QLD
 *                    SA
 *                    TAS
 *                    VIC
 *                    WA
 *                    ARROW BACK (<)
 *                  GO TO DISCOVER YOUR DEGREE
 *                    BACHELOR OF COMPUTER SCIENCE
 *                    BACHELOR OF INFORMATION TECHNOLOGY
 *                    BACHELOR OF SOFTWARE ENGINEERING
 */
document.addEventListener('DOMContentLoaded', function() {

  // SET SELECTED STATE, SELECTED DEGREE (DEFAULT NULL)
  var selectedState = null;
  var selectedDegree = null;

  // SELECT: BUTTONS
  var buttonsGoToStates = document.querySelectorAll('.go-to-states');
  var buttonsGoToDegrees = document.querySelectorAll('.go-to-degrees');
  var buttonsGoToDiscoverYourDegree = document.querySelectorAll('.go-to-discover-your-degree');

  // SELECT: SECTIONS & FOOTER
  var sectionStates = document.querySelector('.states');
  var sectionDegrees = document.querySelector('.degrees');
  var sectionDiscoverYourDegree = document.querySelector('.discover-your-degree');
  var footer = document.querySelector('.footer')

  // FOR EACH BUTTON IN BUTTONS (GO TO STATES)
  buttonsGoToStates.forEach(function(button) { 

    // EVENT: CLICK
      button.addEventListener('click', function() { 

        // SHOW: STATES
        // HIDE: DEGREES, DISCOVER YOUR DEGREE & FOOTER
        sectionStates.style.display = 'flex';
        sectionDegrees.style.display = 'none';
        sectionDiscoverYourDegree.style.display = 'none';
        footer.style.display = 'none';
      });

      // SELECTED DEGREE (DEFAULT)
      selectedDegree = null;
  });

  // FOR EACH BUTTON IN BUTTONS (GO TO DEGREES)
  buttonsGoToDegrees.forEach(function(button) { 

    // EVENT: CLICK
    button.addEventListener('click', function() {

      // SHOW: DEGREES
      // HIDE: STATES, DISCOVER YOUR DEGREE & FOOTER
      sectionStates.style.display = 'none';
      sectionDegrees.style.display = 'flex';
      sectionDiscoverYourDegree.style.display = 'none';
      footer.style.display = 'none';

      // COMING FROM STATES > UPDATE SELECTED STATE
      // COMING FROM DISCOVER YOUR DEGREE > DO NOT UPDATE SELECTED STATE
      if (selectedDegree === null) {
        selectedState = this.id.toUpperCase();
      }

      // SELECTED DEGREE (DEFAULT)
      selectedDegree = null;

      // UPDATE: SELECTED STATE
      document.querySelectorAll('.selected-state').forEach(function(state) {
        state.textContent = selectedState;
      });
    });
  });

  // FOR EACH BUTTON IN BUTTONS (GO TO DISCOVER YOUR DEGREE)
  buttonsGoToDiscoverYourDegree.forEach(function(button) { 

    // EVENT: CLICK
    button.addEventListener('click', function() {
      
      // SHOW: DISCOVER YOUR DEGREE & FOOTER
      // HIDE: STATES & DEGREES
      sectionStates.style.display = 'none';
      sectionDegrees.style.display = 'none';
      sectionDiscoverYourDegree.style.display = 'block';
      footer.style.display = 'flex';

      // UPDATE: SELECTED DEGREE
      selectedDegree = this.id.toUpperCase();
      document.querySelectorAll('.selected-degree').forEach(function(degree) {
        degree.textContent = selectedDegree;
      });

      // SELECT: COURSES
      var courses = document.querySelector('.courses');
      courses.innerHTML = '';

      // FOR EACH COURSE IN ALL COURSES
      allCourses.forEach(function(course) {

        // COURSE STATE = SELECTED STATE &&
        // COURSE DEGREE = SELECTED DEGREE 
        if (course.state === selectedState && course.degree === selectedDegree) {

          // CREATE: COURSE
          var div = document.createElement('div');
          div.classList.add('course');
          
          /*
           * EXAMPLE:         <p>
           *                    <strong>
           *                    University of Queensland
           *                    </strong>
           *                  </p>
           *                  <p>
           *                    84.00 ATAR Bachelor of Engineering (Honours) (Software)
           *                  </p>
           *                  <a href="https://study.uq.edu.au/study-options/programs/bachelor-engineering-honours-2455/software-engineering-softwe2455">
           *                    Read More
           *                  </a>
           */
          div.innerHTML = "<p> <strong>" + course.university + "</strong> </p>" + 
                          "<p>" + course.atar + " " + course.name + "</p>" +
                          "<a href=\"" + course.link + "\"> Read More </a>";
          courses.appendChild(div);
      
          // SELECT: LINKS (READ MORE)
          var linksReadMore = div.querySelectorAll('.where-to-study a');

          // FOR EACH LINK IN LINKS
          linksReadMore.forEach(function(link) {

            // EVENT: MOUSE ENTER
            link.addEventListener('mouseenter', function(event) {

              // ADD <strong> </strong>
              event.target.innerHTML = "<strong>" + event.target.innerHTML + "</strong>";
            });

            // Event: MOUSE LEAVE
            link.addEventListener('mouseleave', function(event) {

              // REMOVE <strong> </strong>
              event.target.innerHTML = event.target.innerHTML.replace("<strong>", "").replace("</strong>", "");
            });
          });
        }
      })
    });
  });
});







/*
 * EVENT LISTENER:  CONTACT US (WORKFLOW: INTENTIONS > FORM)
 *
 * SECTIONS:        INTENTIONS
 *                  FORM
 * 
 * BUTTONS:         GO TO INTENTIONS
 *                    ARROW BACK (<)
 *                  GO TO FORM
 *                    CONTACT US
 *                    SPONSOR US
 *                    VOLUNTEER WITH US
 *                    WORK WITH US
 */
document.addEventListener('DOMContentLoaded', function() {

  // SELECTED INTENTION (DEFAULT NULL)
  var selectedIntention = null;

  // SELECT: BUTTONS
  var buttonsGoToIntentions = document.querySelectorAll('.go-to-intentions');
  var buttonsGoToForm = document.querySelectorAll('.go-to-form');

  // SELECT: SECTIONS & FOOTER
  var intentions = document.querySelector('.intentions');
  var form = document.querySelector('.form');
  var footer = document.querySelector('.footer')

  // FOR EACH BUTTON IN BUTTONS (GO TO INTENTIONS)
  buttonsGoToIntentions.forEach(function(button) { 

    // EVENT: CLICK
    button.addEventListener('click', function() { 

      // SHOW: INTENTIONS
      // HIDE: FORM & FOOTER
      intentions.style.display = 'flex';
      form.style.display = 'none';
      footer.style.display = 'none';
    });
  });

  // FOR EACH BUTTON IN BUTTONS (GO TO FORM)
  buttonsGoToForm.forEach(function(button) { 

    // EVENT: CLICK
    button.addEventListener('click', function() { 
      
      // SHOW: FORM & FOOTER
      // HIDE: INTENTIONS
      intentions.style.display = 'none';
      form.style.display = 'block';
      footer.style.display = 'flex';

      // UPDATE: SELECTED INTENTION
      selectedIntention = this.id.toUpperCase();

      // UPDATE: HEADING (PART 1)
      document.querySelectorAll('.selected-intention-1').forEach(function(element) {
        element.textContent = selectedIntention;
      });

      // UPDATE: HEADING (PART 2)
      if (this.id === "volunteer" || this.id === "work") {

        // ...WITH US
        document.querySelectorAll('.selected-intention-2').forEach(function(element) {
          element.textContent = "WITH US";
        });
      } else {

        // ...US
        document.querySelectorAll('.selected-intention-2').forEach(element => {
          element.textContent = "US";
        });
      }

      /*
       * PERSONALISE FORM
       * 
       * INTENTIONS (CONTACT US)
       *   CONTACT US        > NAME, ................................... EMAIL, MOBILE, MESSAGE
       *   SPONSOR US        > NAME, ROLE, COMPANY, .................... EMAIL, MOBILE, MESSAGE
       *   VOLUNTEER WITH US > NAME, .............. DEGREE, INSTITUTION, EMAIL, MOBILE, MESSAGE
       *   WORK WITH US      > NAME, ROLE, COMPANY, DEGREE, INSTITUTION, EMAIL, MOBILE, MESSAGE
       * FORM (CONTACT US)                 
       */

      // HIDE ALL FORM ITEMS
      document.querySelectorAll('.form-item').forEach(item => {
        item.classList.add('hidden');
      });

      switch (this.id) {
    
        // CONTACT US
        case "contact":
          document.getElementById('form-name').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-email').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-mobile').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-message').closest('.form-item').classList.remove('hidden');
          break; 
    
        // SPONSOR US
        case "sponsor":
          document.getElementById('form-name').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-role').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-company').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-email').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-mobile').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-message').closest('.form-item').classList.remove('hidden');
          break; 
        
        // VOLUNTEER WITH US
        case "volunteer":
          document.getElementById('form-name').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-degree').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-institution').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-email').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-mobile').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-message').closest('.form-item').classList.remove('hidden');
          break; 
        
        // WORK WITH US
        case "work":
          document.getElementById('form-name').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-role').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-company').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-degree').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-institution').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-email').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-mobile').closest('.form-item').classList.remove('hidden');
          document.getElementById('form-message').closest('.form-item').classList.remove('hidden');
          break; 
      }
    });
  });
});





/*
 * FUNCTION:        VALIDATE FORM
 * 
 * SECTION:         FORM (CONTACT US)  
 * 
 * REFERENCE:       W3 SCHOOLS
 *                  JAVASCRIPT FORM VALIDATION
 *                  www.w3schools.com/js/js_validation.asp
 */
function validateForm() {
  let name = document.forms["form"]["form-name"].value;
  let role = document.forms["form"]["form-role"];
  let company = document.forms["form"]["form-company"];
  let degree = document.forms["form"]["form-degree"];
  let institution = document.forms["form"]["form-institution"];
  let email = document.forms["form"]["form-email"].value;
  let mobile = document.forms["form"]["form-mobile"].value;
  let message = document.forms["form"]["form-message"].value;
  
  // EMPTY: REQUIRED FIELDS
  if (name == "" 
        || message == ""
        || (role.offsetParent !== null && role.value === "")
        || (company.offsetParent !== null && company.value === "")
        || (degree.offsetParent !== null && degree.value === "")
        || (institution.offsetParent !== null && institution.value === "")
  ) {
    alert("All required fields cannot be empty.");
    return false;
  }
 
  // INVALID: EMAIL
  if (!email.includes('@') || email == "") {
    alert("Invalid email. Please enter a valid email.");
    return false;
  }

  // INVALID: MOBILE
  if (mobile.length != 10 || mobile == "") {
    alert("Invalid mobile. Please enter a valid mobile.");
    return false;
  }

  // VALID FORM, RETURN TRUE
  return true;
}





/*
 * FUNCTION:        HANDLE SUBMIT
 * 
 * SECTION:         FORM (CONTACT US)  
 */
function handleSubmit(event) {
  event.preventDefault();

  // FUNCTION: VALIDATE FORM
  if (!validateForm()) {
    return;
  }

  // SHOW: THANK-YOU
  // HIDE: FORM & FOOTER
  document.querySelector('.form').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  document.querySelector('.thank-you').style.display = 'block';
}





/*
 * CLASS:           COURSE
 *
 * CONSTRUCTOR:     DEGREE (ID)
 *                    "COMPUTER SCIENCE"
 *                    "INFORMATION TECHNOLOGY"
 *                    "SOFTWARE ENGINEERING"
 *                  STATE
 *                  NAME
 *                  UNIVERSITY
 *                  ATAR
 *                  LINK
 * 
 * STORAGE:         ALL COURSES
 * 
 * COUNT:           64
 */
class Course  {
  constructor(degree, state, name, university, atar, link) {
    this.degree = degree;
    this.state = state;
    this.name = name;
    this.university = university;
    this.atar = atar;
    this.link = link;
  }
}


// COMPUTER SCIENCE
var course1 = new Course("COMPUTER SCIENCE", "ACT", "Bachelor of Computing", "Australian National University", "80.00 ATAR", "https://programsandcourses.anu.edu.au/2024/program/bcomp");
var course2 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Science (Computer Science)", "University of Sydney", "80.00 ATAR", "https://www.sydney.edu.au/courses/subject-areas/major/computer-science-science.html");
var course3 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Science (Computer Science)", "University of New South Wales", "80.00 ATAR", "https://www.unsw.edu.au/study/undergraduate/bachelor-of-computer-science?studentType=Domestic");
var course4 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Computing Science (Honours)", "University of Technology Sydney", "80.05 ATAR", "https://www.uts.edu.au/study/find-a-course/bachelor-computing-science-honours");
var course5 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Computer Science", "University of Wollongong", "75.00 ATAR", "https://coursefinder.uow.edu.au/information/index.html?course=bachelor-computer-science");
var course6 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Computer Science", "University of Newcastle", "65.00 ATAR", "https://www.newcastle.edu.au/degrees/bachelor-of-computer-science");
var course7 = new Course("COMPUTER SCIENCE", "NSW", "Bachelor of Computer Science", "Western Sydney University", "80.00 ATAR", "https://www.westernsydney.edu.au/future/study/courses/undergraduate/bachelor-of-computer-science");
var course8 = new Course("COMPUTER SCIENCE", "QLD", "Bachelor of Computer Science", "University of Queensland", "84.00 ATAR", "https://study.uq.edu.au/study-options/programs/bachelor-computer-science-2451");
var course9 = new Course("COMPUTER SCIENCE", "QLD", "Bachelor of Information Technology (Computer Science)", "Queensland University of Technology", "70.00 ATAR", "https://www.qut.edu.au/courses/bachelor-of-information-technology-computer-science");
var course10 = new Course("COMPUTER SCIENCE", "QLD", "Bachelor of Computer Science", "Griffith University", "72.00 ATAR", "https://www.griffith.edu.au/study/degrees/bachelor-of-computer-science-1534");
var course11 = new Course("COMPUTER SCIENCE", "QLD", "Bachelor of Science (Computing)", "University of Southern Queensland", "65.60 ATAR", "https://www.unisq.edu.au/study/degrees/bachelor-of-science/computing");
var course12 = new Course("COMPUTER SCIENCE", "SA", "Bachelor of Computer Science", "University of Adelaide", "80.00 ATAR", "https://www.adelaide.edu.au/degree-finder/bcomp_bcmpsci.html");
var course13 = new Course("COMPUTER SCIENCE", "SA", "Bachelor of Computer Science", "Flinders University", "70.00 ATAR", "https://www.flinders.edu.au/study/courses/bachelor-information-technology");
var course14 = new Course("COMPUTER SCIENCE", "VIC", "Bachelor of Science (Computer Science)", "University of Melbourne", "85.00 ATAR", "https://study.unimelb.edu.au/find/study-areas/computer-science/");
var course15 = new Course("COMPUTER SCIENCE", "VIC", "Bachelor of Computer Science", "Monash University", "75.00 ATAR", "https://www.monash.edu/study/courses/find-a-course/computer-science-c2001");
var course16 = new Course("COMPUTER SCIENCE", "VIC", "Bachelor of Computer Science", "Royal Melbourne Institute of Technology University", "75.35 ATAR", "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-computer-science-bp094");
var course17 = new Course("COMPUTER SCIENCE", "VIC", "Bachelor of Computer Science", "Deakin University", "63.25 ATAR", "https://www.deakin.edu.au/course/bachelor-computer-science");
var course18 = new Course("COMPUTER SCIENCE", "VIC", "Bachelor of Computer Science", "La Trobe University", "61.75 ATAR", "https://www.latrobe.edu.au/courses/bachelor-of-computer-science#/overview?location=BU&studentType=dom&year=2024");
var course19 = new Course("COMPUTER SCIENCE", "WA", "Bachelor of Science (Computer Science)", "University of Western Australia", "75.00 ATAR", "https://www.uwa.edu.au/study/courses/computer-science");
var course20 = new Course("COMPUTER SCIENCE", "WA", "Bachelor of Computing (Computer Science)", "Curtin University", "80.00 ATAR", "https://www.curtin.edu.au/study/offering/course-ug-bachelor-of-computing--b-comp/");


// INFORMATION TECHNOLOGY
var course21 = new Course("INFORMATION TECHNOLOGY", "ACT", "Bachelor of Information Technology", "Australian National University", "80.00 ATAR", "https://programsandcourses.anu.edu.au/2023/program/bit");
var course22 = new Course("INFORMATION TECHNOLOGY", "ACT", "Bachelor of Information Technology", "University of Canberra", "60.00 ATAR", "https://www.canberra.edu.au/course/322AA/8/2023");
var course23 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information Systems", "University of New South Wales", "77.00 ATAR", "https://www.unsw.edu.au/study/undergraduate/bachelor-of-information-systems?studentType=Domestic");
var course24 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information Technology", "University of Technology Sydney", "76.10 ATAR", "https://www.uts.edu.au/study/find-a-course/bachelor-information-technology");
var course25 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information Technology", "Macquarie University", "75.00 ATAR", "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-information-technology");
var course26 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information Technology", "University of Wollongong", "75.00 ATAR", "https://coursefinder.uow.edu.au/information/index.html?course=bachelor-information-technology");
var course27 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information Technology", "University of Newcastle", "65.00 ATAR", "https://www.newcastle.edu.au/degrees/bachelor-of-information-technology");
var course28 = new Course("INFORMATION TECHNOLOGY", "NSW", "Bachelor of Information and Communication Technology", "Western Sydney University", "65.00 ATAR", "https://www.westernsydney.edu.au/future/study/courses/undergraduate/bachelor-of-information-and-communications-technology-ict");
var course29 = new Course("INFORMATION TECHNOLOGY", "QLD", "Bachelor of Information Technology", "University of Queensland", "84.00 ATAR", "https://study.uq.edu.au/study-options/programs/bachelor-information-technology-2453");
var course30 = new Course("INFORMATION TECHNOLOGY", "QLD", "Bachelor of Information Technology (Information Systems)", "Queensland University of Technology", "70.00 ATAR", "https://www.qut.edu.au/courses/bachelor-of-information-technology-information-systems");
var course31 = new Course("INFORMATION TECHNOLOGY", "QLD", "Bachelor of Information Technology", "Griffith University", "63.00 ATAR", "https://www.griffith.edu.au/study/degrees/bachelor-of-information-technology-1538");
var course32 = new Course("INFORMATION TECHNOLOGY", "QLD", "Bachelor of Science (Information Technology)", "University of Southern Queensland", "65.60 ATAR", "https://www.unisq.edu.au/study/degrees/bachelor-of-science/information-technology");
var course33 = new Course("INFORMATION TECHNOLOGY", "SA", "Bachelor of Information Technology", "University of Adelaide", "75.00 ATAR", "https://www.adelaide.edu.au/degree-finder/bit_binftech.html");
var course34 = new Course("INFORMATION TECHNOLOGY", "SA", "Bachelor of Information Technology", "University of South Australia", "66.00 ATAR", "https://study.unisa.edu.au/degrees/bachelor-of-information-technology");
var course35 = new Course("INFORMATION TECHNOLOGY", "SA", "Bachelor of Information Technology", "Flinders University", "70.00 ATAR", "https://www.flinders.edu.au/study/courses/bachelor-information-technology");
var course36 = new Course("INFORMATION TECHNOLOGY", "TAS", "Bachelor of Information and Communication Technology", "University of Tasmania", "65.00 ATAR", "https://www.utas.edu.au/courses/cse/courses/p3t-bachelor-of-information-and-communication-technology");
var course37 = new Course("INFORMATION TECHNOLOGY", "VIC", "Bachelor of Science (Information Technology)", "University of Melbourne", "85.00 ATAR", "https://study.unimelb.edu.au/find/study-areas/information-technology/");
var course38 = new Course("INFORMATION TECHNOLOGY", "VIC", "Bachelor of Information Technology", "Monash University", "75.00 ATAR", "https://www.monash.edu/study/courses/find-a-course/information-technology-c2000");
var course39 = new Course("INFORMATION TECHNOLOGY", "VIC", "Bachelor of Information Technology", "Royal Melbourne Institute of Technology University", "70.05 ATAR", "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-information-technology-bp162");
var course40 = new Course("INFORMATION TECHNOLOGY", "VIC", "Bachelor of Information Technology", "Deakin University", "61.05 ATAR", "https://www.deakin.edu.au/course/bachelor-information-technology");
var course41 = new Course("INFORMATION TECHNOLOGY", "VIC", "Bachelor of Information Technology", "La Trobe University", "56.00 ATAR", "https://www.latrobe.edu.au/courses/bachelor-of-information-technology#/overview?location=BU&studentType=dom&year=2024");
var course42 = new Course("INFORMATION TECHNOLOGY", "WA", "Bachelor of Information Technology", "Curtin University", "70.00 ATAR", "https://www.curtin.edu.au/study/offering/course-ug-bachelor-of-information-technology--b-inftec/");


// SOFTWARE ENGINEERING
var course43 = new Course("SOFTWARE ENGINEERING", "ACT", "Bachelor of Engineering (Honours) (Software)", "Australian National University", "85.00 ATAR", "https://programsandcourses.anu.edu.au/program/aense");
var course44 = new Course("SOFTWARE ENGINEERING", "ACT", "Bachelor of Engineering (Software)", "University of Canberra", "60.00 ATAR", "https://www.canberra.edu.au/course/560AA/7/2023");
var course45 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Software)", "University of Sydney", "90.00 ATAR", "https://www.sydney.edu.au/courses/courses/uc/bachelor-of-engineering-honours-software-engineering1.html");
var course46 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Software)", "University of New South Wales", "79.20 ATAR", "https://www.unsw.edu.au/study/undergraduate/bachelor-of-engineering-honours-software?studentType=Domestic");
var course47 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Software)", "University of Technology Sydney", "76.05 ATAR", "https://www.uts.edu.au/study/find-a-course/bachelor-engineering-honours");
var course48 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Software)", "Macquarie University", "80.00 ATAR", "https://www.mq.edu.au/study/find-a-course/courses/specialisation/software-engineering");
var course49 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Computer & Autonomous Systems)", "University of Wollongong", "80.00 ATAR", "https://coursefinder.uow.edu.au/information/index.html?course=bachelor-engineering-honours-computer-autonomous-systems-engineering");
var course50 = new Course("SOFTWARE ENGINEERING", "NSW", "Bachelor of Engineering (Honours) (Software)", "University of Newcastle", "75.00 ATAR", "https://www.newcastle.edu.au/degrees/bachelor-of-software-engineering-honours");
var course51 = new Course("SOFTWARE ENGINEERING", "QLD", "Bachelor of Engineering (Honours) (Software)", "University of Queensland", "84.00 ATAR", "https://study.uq.edu.au/study-options/programs/bachelor-engineering-honours-2455/software-engineering-softwe2455");
var course52 = new Course("SOFTWARE ENGINEERING", "QLD", "Bachelor of Engineering (Honours) (Computer & Software Systems)", "Queensland University of Technology", "79.00 ATAR", "https://www.qut.edu.au/courses/bachelor-of-engineering-honours-computer-and-software-systems");
var course53 = new Course("SOFTWARE ENGINEERING", "QLD", "Bachelor of Engineering (Honours) (Software)", "Griffith University", "72.00 ATAR", "https://www.griffith.edu.au/study/degrees/bachelor-of-software-engineering-honours-1656");
var course54 = new Course("SOFTWARE ENGINEERING", "QLD", "Bachelor of Engineering (Honours) (Computer Systems)", "University of Southern Queensland", "71.00 ATAR", "https://www.unisq.edu.au/study/degrees/bachelor-of-engineering-honours/computer-systems-engineering");
var course55 = new Course("SOFTWARE ENGINEERING", "SA", "Bachelor of Engineering (Honours) (Software)", "University of Adelaide", "80.00 ATAR", "https://www.adelaide.edu.au/degree-finder/bengh_behsoftws1.html");
var course56 = new Course("SOFTWARE ENGINEERING", "SA", "Bachelor of Engineering (Honours) (Software)", "University of South Australia", "72.00 ATAR", "https://study.unisa.edu.au/degrees/bachelor-of-software-engineering-honours");
var course57 = new Course("SOFTWARE ENGINEERING", "SA", "Bachelor of Engineering (Honours) (Software)", "Flinders University", "80.00 ATAR", "https://www.flinders.edu.au/study/courses/bachelor-engineering-software-honours");
var course58 = new Course("SOFTWARE ENGINEERING", "TAS", "Bachelor of Engineering (Honours) (Electronics & Communications)", "University of Tasmania", "71.00 ATAR", "https://www.utas.edu.au/courses/cse/courses/p4d-bachelor-of-engineering-specialisation-with-honours");
var course59 = new Course("SOFTWARE ENGINEERING", "VIC", "Bachelor of Science (Software Engineering)", "University of Melbourne", "85.00 ATAR", "https://study.unimelb.edu.au/find/study-areas/software-engineering/");
var course60 = new Course("SOFTWARE ENGINEERING", "VIC", "Bachelor of Engineering (Honours) (Software)", "Monash University", "80.00 ATAR", "https://www.monash.edu/study/courses/find-a-course/engineering-e3001#overview-1,Software_engineering");
var course61 = new Course("SOFTWARE ENGINEERING", "VIC", "Bachelor of Engineering (Software)", "Royal Melbourne Institute of Technology University", "82.15 ATAR", "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-software-engineering-bp096");
var course62 = new Course("SOFTWARE ENGINEERING", "VIC", "Bachelor of Engineering (Honours) (Software)", "Deakin University", "66.80 ATAR", "https://www.deakin.edu.au/course/bachelor-software-engineering-honours");
var course63 = new Course("SOFTWARE ENGINEERING", "WA", "Bachelor of Engineering (Honours) (Software)", "University of Western Australia", "80.00 ATAR", "https://www.uwa.edu.au/study/courses/software-engineering");
var course64 = new Course("SOFTWARE ENGINEERING", "WA", "Bachelor of Engineering (Honours) (Software Systems)", "Curtin University", "80.00 ATAR", "https://www.curtin.edu.au/study/offering/course-ug-software-systems-engineering-major-beng-hons--mjrh-sften/");


// ALL COURSES
var allCourses = [
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
  course9,
  course10,
  course11,
  course12,
  course13,
  course14,
  course15,
  course16,
  course17,
  course18,
  course19,
  course20,
  course21,
  course22,
  course23,
  course24,
  course25,
  course26,
  course27,
  course28,
  course29,
  course30,
  course31,
  course32,
  course33,
  course34,
  course35,
  course36,
  course37,
  course38,
  course39,
  course40,
  course41,
  course42,
  course43,
  course44,
  course45,
  course46,
  course47,
  course48,
  course49,
  course50,
  course51,
  course52,
  course53,
  course54,
  course55,
  course56,
  course57,
  course58,
  course59,
  course60,
  course61,
  course62,
  course63,
  course64
];