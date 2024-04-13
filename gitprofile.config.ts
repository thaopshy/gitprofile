// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'thaopshy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '1. Professional Statement and Pitch Video',
          description:
            'My "Elevator" Pitch Video!',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/7xfl08zm1hvo315e123qg/1.-Pitch-Statement.mp4?rlkey=16r0f9pipdb6yvxpbqebafq31&dl=0',
        },
        {
          title: '2. Conduct a Security Audit',
          description:
            'Mock IT audit for a fictional company to practice stakeholder memorandum writing.',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/h3s0qak4mph3xwvgouxpv/2.-Stakeholder-Memorandum-THaopshy.docx?rlkey=mh8pzd7r4tff8g1lirxsuy6sy&dl=0',
        },
                {
          title: '3. Use the NIST Cybersecurity Framework to Respond to a Security Incident',
          description:
            'Using the NIST framework, I created a Vulnerability Assessment Report for a fictional company.',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/q2ydlp5pfclsuzptmc2pt/3.-Vulnerability-assessment-report.docx?rlkey=2ag6o898v7zyw30wa6q89w9bh&dl=0',
        },
                {
          title: '4. Use Linux Commands to Manage File Permissions',
          description:
            'Using Kali Linux running in a VM, I practiced User Management, File Operations, Permissions, Process Management, and System Info Retrieval.',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/a9r92bqkf3idh7n8t6uus/4.-Linux_Activity_Tony_Haopshy.docx?rlkey=u1vjhz9r4g0pnf0bsz1rk8auk&dl=0',
        },
                {
          title: '5. Narrated Home Network & Heatmap Presentation',
          description:
            'Powerpoint Presentation with voiceover; Self-review of home network to highlight use of Packet Tracer, creation of logical diagrams, and heatmapping of WiFi coverage.',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/lyhllgmn8blr604jl36ve/5.-Home-Network-Diagram-PPT-Tony-Haopshy.pptx?rlkey=f1212wkuzu3io64v9zw1zw64o&dl=0',
        },
                {
          title: '6. Final Project presentation in an MIS/Networked Systems course at ECU',
          description:
            'This was a group project, originally narrated by myself and five group members. I have uploaded the presentation only - as we make references to the business name - to protect the identity of the business I have removed references in the PPT and chosen not to upload the narrated version, as the project centered around assessing vulnerabilities to a real business network.',
          imageUrl:
            '',
          link: 'https://www.dropbox.com/scl/fi/fei5wskzl4g1vsqunc39h/6.-Network-Analysis-Group-Project.pptx?rlkey=v9u6kvul36c2943gjsoq2m27v&dl=0',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tony Haopshy',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'assetprotection',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'T-SQL',
    'Python',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'ISC2 Candidate',
      body: '',
      year: 'March 2024',
      link: '',
    },
    {
      name: 'Introduction to Packet Tracer',
      body: '',
      year: 'February 2024',
      link: '',
    },

  ],
  educations: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelor of Business Administration, Management Information Systems',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'My First Tech Webinar',
      conferenceName: 'Tech Edu Journey',
      journalName: '',
      authors: 'Tony Haopshy',
      link: 'https://thaopshy.wordpress.com/2024/02/16/my-first-tech-webinar/',
      description:
        'As a part of a Telecommunications and Networked Systems class I’m taking at East Carolina University, students were asked to blog about an in-person networking event related to a professional association. The assignment due date lined up perfectly with my attendance at this year’s RLPSA conference, hosted in Las Vegas, NV! ... CLICK TO READ MORE ON MY WORDPRESS PAGE!',
    },
    {
      title: 'Retail LP and Security Association (RLPSA) Conference 2024!',
      conferenceName: 'Tech Edu Journey',
      journalName: '',
      authors: 'Tony Haopshy',
      link: 'https://thaopshy.wordpress.com/2024/04/05/retail-lp-and-security-association-rlpsa-conference-2024/',
      description:
        'When I entered an MIS (or, Management Information Systems) program at East Carolina University, I found myself experiencing a whole new world of information outside of my comfort zone. My chosen craft has little to do with technology, or information systems. Yet, I have always been drawn to the the hardware and systems that make businesses successful, bring people together, and transform our world.  ... CLICK TO READ MORE ON MY WORDPRESS PAGE!',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#592A8A',
      secondary: '#FEC923',
      accent: '#41215E',
      neutral: '#41215E',
      'base-100': '#E3E3ED',
      '--rounded-box': '2rem',
      '--rounded-btn': '2rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="a8eeda28-f76b-4d97-a047-60820a486405" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

  enablePWA: true,
};

export default CONFIG;
