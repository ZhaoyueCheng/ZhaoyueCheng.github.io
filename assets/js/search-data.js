// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected Research and Applied Research Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-project-10",
          title: 'project 10',
          description: "A project with an introduction section",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-hgcf-hyperbolic-graph-convolution-networks-for-collaborative-filtering-www-2021",
          title: 'HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering (WWW 2021)',
          description: "Code and Paper for project HGCF: Hyperbolic Graph Convolution Networks for Collaborative Filtering (WWW 2021)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hgcf/";
            },},{id: "projects-mcl-mixed-centric-loss-for-collaborative-filtering-www-2022",
          title: 'MCL: Mixed-Centric Loss for Collaborative Filtering (WWW 2022)',
          description: "Code and Paper for project MCL: Mixed-Centric Loss for Collaborative Filtering (WWW 2022)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mcl/";
            },},{id: "projects-acm-spotify-recsys-challenge-2018-1st-place-solution",
          title: 'ACM Spotify RecSys Challenge 2018 1st Place Solution',
          description: "Code and Paper for project Two-stage Model for Automatic Playlist Continuation at Scale (ACM Spotify RecSys Challenge 2018 1st place Solution)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recsys_challenge_2018/";
            },},{id: "projects-acm-trivago-recsys-challenge-2019-2nd-place-solution",
          title: 'ACM Trivago RecSys Challenge 2019 2nd Place Solution',
          description: "Paper for project Robust Contextual Models for In-Session Personalization (ACM Trivago RecSys Challenge 2019 2nd place Solution)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recsys_challenge_2019/";
            },},{id: "projects-acm-twitter-recsys-challenge-2020-2nd-place-solution",
          title: 'ACM Twitter RecSys Challenge 2020 2nd Place Solution',
          description: "Paper for project Predicting Twitter Engagement With Deep Language Models (ACM Twitter RecSys Challenge 2020 2nd place Solution)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recsys_challenge_2020/";
            },},{id: "projects-acm-twitter-recsys-challenge-2021-3rd-place-solution",
          title: 'ACM Twitter RecSys Challenge 2021 3rd Place Solution',
          description: "Paper for project User Engagement Modeling with Deep Learning and Language Models (ACM Twitter RecSys Challenge 2021 3rd place Solution)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/recsys_challenge_2021/";
            },},{id: "projects-tafa-two-headed-attention-fused-autoencoder-for-context-aware-recommendations-recsys-2020",
          title: 'TAFA: two-headed attention fused autoencoder for context-aware recommendations (RecSys 2020)',
          description: "Code and Paper for project TAFA: two-headed attention fused autoencoder for context-aware recommendations (RecSys 2020)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tafa/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ZhaoyueCheng", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhaoyuecheng", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=phHObUgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/joey__cheng", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
