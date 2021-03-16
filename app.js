var app = new Vue({
  el: "#app",
  data: {
    skills: [
      {
        name: "NodeJS and Javscript (Full Stack)",
        level: "60",
      },
      {
        name: "C# and C++ Game Development",
        level: "80",
      },
      {
        name: "Linux Server Configuration",
        level: "85",
      },
      {
        name: "Azure DevOps Project Management",
        level: "25",
      },
      {
        name: "Data Science (Python & R)",
        level: "50",
      },
      {
        name: "HTML and CSS Web Design",
        level: "60",
      },
      {
        name: "JAVA Programming",
        level: "80",
      },
      {
        name: "SQL and NoSQL databases",
        level: "70",
      },
    ],
    experiences: [
      {
        title: "Ballard High School - APCS",
        description:
          "My first formal computer science class. Used the JAVA programming language and passed the AP exam with a 5/5.",
        url: "",
      },
      {
        title: "UW Medical Center - Temporary Work",
        description:
          "Assisted the Laboratory Medicine Informatics with some data science and visualization programming in both a volunteer position and a paid position.",
        url: "",
      },
      {
        title: "BHS General Computing Club",
        description:
          "Leader of the BHS General Computing Club (GCC). At GCC we create a space where people of all skill levels can learn about software/game development, data science and graphic art.",
        url: "https://gcc.nlaha.com",
      },
    ],
    programming: [
      {
        title: "SPS MC",
        description:
          "SPS MC is an Office 365 secured Minecraft server for Seattle Public Schools students. It uses the SPS microsoft accounts to verify if a player is actually a part of Seattle Public Schools.",
        url: "https://spsmc.net",
      },
    ],
    art: [
      {
        title: "3D Art",
        description:
          "In my free time, I like doing 3D modeling. It's a skill I want to continue to improve even if it's just for fun. Check out my artstation page at the link below.",
        url: "https://www.artstation.com/nlaha",
      },
    ],
  },
  methods: {
    sortSkils(event) {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
  },
});

app.sortSkils();