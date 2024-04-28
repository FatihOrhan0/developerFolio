/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000  // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fatih Orhan",
  title: "Welcome to my portfolio!",
  subTitle: "I'm a recent CS graduate with passion towards ML, infrastructure design, theoretical computer science, and backend development.",
  resumeLink:
    "https://drive.google.com/file/d/1lv3KCbGt-D79ibjQMydI1Sjgz7GOV7qt/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FatihOrhan0",
  linkedin: "https://www.linkedin.com/in/fatih-orhan2/",
  gmail: "orhanfatih2002@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "I have experience with full stack development, machine learning, high-performance computing, and building simulations.",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rensselaer Polytechnic Institute",
      logo: require("./assets/images/RPILogo.png"),
      subHeader: "Bachelor's of Science in Computer Science, Minor in Economics",
      duration: "August 2021 - May 2024",
      desc: "GPA: 3.98, Concentration: AI & Data",
      descBullets: [
        "Dean's Honor List in Every Semester",
        "Leadership Award",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Algorithm Design",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Capital One",
      companylogo: require("./assets/images/CapitalOneLogo.png"),
      date: "Jun 2023 – Aug 2023",
      desc: "Worked mainly on automation of loan dispute resolutions.",
      descBullets: [
        "Implemented Java-based APIs utilizing Spring Boot and REST API.",
        "Enhanced credit dispute representation in the database to support additional co-borrowers, automatic E-OSCAR routing, and real-time feedback to agents."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "RPI",
      companylogo: require("./assets/images/RPILogo.png"),
      date: "Aug 2022 – May 2024",
      desc: "Helped the students for Intro to Algorithms and Foundations of CS courses with office hours, labs, and course guides."
    },
    {
      role: "Teaching Assistant",
      company: "AlphaStar Academy",
      companylogo: require("./assets/images/AlphaStarLogo.png"),
      date: "Jul 2022 – Aug 2022",
      desc: "Counseled 40 gifted students understand and debug competitive programming concepts and algorithms in 2 courses"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certificates",
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Advanced SQL",
      subtitle:
        "",
      image: require("./assets/images/SQLlogo.png"),
      imageAlt: "SQL Logo",
      footerLink: [
        {
          name: "HackerRank Advanced SQL Certification",
          url: "<SQL certificate link>"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle:
        "For completing 5 deep learning courses on Coursera by Deeplearning.ai",
      image: require("./assets/images/DeepLearningLogo.png"),
      imageAlt: "Deep Learning Logo ",
      footerLink: [
        {
          name: "Deeplearning.ai Deep Learning Specialization",
          url: "<deep learning link>"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out about anything!",
  number: "5182489245",
  email_address: "orhanfatih2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
