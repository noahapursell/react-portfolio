const logotext = "NOAH";
const meta = {
    title: "Noah Pursell",
    description: "I'm Noah Pursell, a student at OU passionate about applied AI, with hands-on experience in AI research and a drive to bring intelligent systems into real-world solutions.",
};

const introdata = {
    title: "I’m Noah Pursell",
    animated: {
        first: "I explore AI and machine learning",
        second: "I build intelligent applications",
        third: "I'm driven to apply AI in the real world",
    },
    description: "I'm a student at OU with research experience in AI, aiming to create impactful, applied AI solutions in industry.",
    your_img_url: "/assets/headshot.jpg",
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m a Computer Science student at the University of Oklahoma (Class of 2026) with a 4.0 GPA, a minor in Electrical and Computer Engineering, and a Data Science certificate. I’ve conducted AI research with Dr. Anindya Maiti at SecretLab, published multiple papers, and contributed to projects ranging from LLM development to inventory automation and generative art platforms.",
};


const worktimeline = [
    {
        jobtitle: "President",
        where: "OU AI/ML Club",
        date: "May 2025 – Present",
    },
    {
        jobtitle: "Product Development Associate",
        where: "Inventory Ally",
        date: "Aug 2024 – Present",
    },
    {
        jobtitle: "IT Audit Intern",
        where: "ConocoPhillips",
        date: "May 2024 – Aug 2024",
    },
    {
        jobtitle: "Student Software Researcher",
        where: "OU Advanced Radar Research Center (ARRC)",
        date: "Jan 2024 – Present",
    },
    {
        jobtitle: "Full-Stack Developer",
        where: "Shuffle.Ink",
        date: "Nov 2023 – Present",
    },
    {
        jobtitle: "Student Programmer",
        where: "OU Price College of Business",
        date: "June 2023 – Present",
    },
    {
        jobtitle: "Undergraduate Research Assistant",
        where: "OU Gallogly College of Engineering / SecretLab",
        date: "Jan 2023 – Present",
    },
];




const skills = [
    // AI / ML Skills
    {
        name: "Python",
        value: 95,
    },
    {
        name: "PyTorch",
        value: 80,
    },
    {
        name: "Scikit-Learn",
        value: 75,
    },
    {
        name: "LLMs & RAG",
        value: 90,
    },
    {
        name: "TensorFlow/Keras",
        value: 70,
    },

    // Backend & Database
    {
        name: "Node.js & Express",
        value: 85,
    },
    {
        name: "MySQL",
        value: 75,
    },
    {
        name: "Solidity",
        value: 70,
    },

    // Cloud & DevOps
    {
        name: "Azure Cloud",
        value: 85,
    },
    {
        name: "Docker",
        value: 90,
    },

    // Frontend
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "React",
        value: 75,
    },

    // Automation / Productivity Tools
    {
        name: "Power Platform (Automate & Apps)",
        value: 80,
    },
];


const services = [
    //     {
    //     title: "UI & UX Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
    // {
    //     title: "Mobile Apps",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
    // {
    //     title: "Wordpress Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
];

const dataportfolio = [
    {
        img: "/portfolio/cyber-cubs/ann.png",
        description: "An online demo explaining how artificial neural networks (ANNs) work for a kids summer STEM camp.",
        link: "/portfolio/cyber-cubs",
        name: "cyber-cubs",
        date: "Summer 2025",
        title: "Cyber Cubs",
        tags: ["Artificial Intelligence", "Web", "Education"]
    },
    {
        img: "/portfolio/magnet-db/titles-by-network.png",
        description: "A longitudinal dataset of torrents matched to IMDb movies and shows. Published on arXiv.",
        link: "/portfolio/magnet-db",
        name: "magnet-db",
        date: "Fall 2024",
        title: "Magnet DB",
        tags: ["Research", "Web", "Data Science", "Published"]
    },
    {
        img: "/portfolio/email-study/timeseries-decomposition.png",
        description: "Study analyzing privacy concerns in email marketing across online services. Published on arXiv.",
        link: "/portfolio/email-privacy-study",
        name: "email-privacy-study",
        date: "Spring 2025",
        title: "Email Privacy Study",
        tags: ["Research", "Artificial Intelligence", "Privacy", "Published"]
    },
    {
        img: "/portfolio/on-demand-ai-art/upscale-sample.png",
        description: "A platform that generates print-ready AI art products from minimal user input. Published on arXiv.",
        link: "/portfolio/on-demand-ai-art",
        name: "on-demand-ai-art",
        date: "Fall 2023",
        title: "On-Demand AI Art",
        tags: ["Artificial Intelligence", "Web", "Generative AI", "Research"]
    },
    {
        img: "/portfolio/agri-ai/predictive-modeling.png",
        description: "A data science project identifying climate drivers of Oklahoma prairie phenology. AGRI AI 2024 winner.",
        link: "/portfolio/agri-ai",
        name: "agri-ai",
        date: "Spring 2024",
        title: "AGRI AI",
        tags: ["Artificial Intelligence", "Research", "Award Winning", "Data Science"]
    },
    {
        img: "/portfolio/shuffle-ink/home-page.png",
        description: "A consumer-facing platform enabling AI-powered art selling between individuals. Built at Shuffle.Ink.",
        link: "/portfolio/shuffle-ink",
        name: "shuffle-ink",
        date: "Spring 2024 - Present",
        title: "Shuffle.Ink",
        tags: ["Artificial Intelligence", "Web", "Generative AI", "Startup"]
    },
    {
        img: "/portfolio/home-server/hyper-v-view.png",
        description: "Personal home server setup for hosting websites and services like this portfolio.",
        link: "/portfolio/home-server",
        name: "home-server",
        date: "Spring 2025",
        title: "Home Server",
        tags: ["Hardware", "DevOps", "Self-Hosting", "Infrastructure"]
    },
    {
        img: "/portfolio/sponge-bot/web-page.png",
        description: "AI Symposium 2024 project: Chat and receive AI-generated video responses from SpongeBob characters.",
        link: "/portfolio/spongebot",
        name: "spongebot",
        date: "Spring 2024",
        title: "SpongeBot",
        tags: ["Artificial Intelligence", "Web", "Voice & Video", "Conversational AI"]
    },
    {
        img: "/portfolio/back-to-the-books/main-page.png",
        description: "Hacklahoma 2024 project using AI to recommend college resources and planning tools for students.",
        link: "/portfolio/back-to-the-books",
        name: "back-to-the-books",
        date: "Spring 2024",
        title: "Back to the Books",
        tags: ["Artificial Intelligence", "Web", "Award Winning", "Education"]
    },
    {
        img: "/portfolio/daiid/main-page.png",
        description: "Hacklahoma 2025: Decentralized system for collaborative AI image moderation using blockchain.",
        link: "/portfolio/daiid",
        name: "daiid",
        date: "Spring 2025",
        title: "DAIID",
        tags: ["Artificial Intelligence", "Web3/Blockchain", "Award Winning"]
    },
    {
        img: "/portfolio/lime-lend/demo-screenshot.png",
        description: "Ethereum project for lending, renting, and managing digital goods and licenses.",
        link: "/portfolio/limelend",
        name: "limelend",
        date: "Spring 2025",
        title: "LimeLend",
        tags: ["Web3/Blockchain", "Web"]
    },
];


const projectDescriptions = {
    "cyber-cubs": [
        {
            type: "heading",
            content: "Cyber Cubs"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "This site is a demonstration of how neural networks work to help teach middle-schoolers about AI at a summer STEM camp. The demo has two pages. The first shows some randomly generated data along with an un-trained linear regression line. Students are able to adjust the model's parameters to see how a computer can 'learn' information. The second page shows a more complex non-linear dataest. Students are able to see how a computer can adjust the parameters itself to learn the data."
        },
        {
            type: "link",
            link: "https://cyber-cubs.noahjedi.com",
            description: "Link to project."
        },
    ],
    "magnet-db": [
        {
            type: "heading",
            content: "MagnetDB: A Longitudinal Torrent Discovery Dataset"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "MagnetDB is a dataset of over 28.6 million torrents and metadata from the BitTorrent DHT collected between 2018 and 2024. It includes over 950 million files and applies IMDb-matching to annotate pirated movie and TV show torrents. The dataset is intended to support research on digital piracy, distribution trends, and the BitTorrent ecosystem at large."
        },
        {
            type: "text",
            content: "My role focused on mapping torrent entries to IMDb records. I initially experimented with vector embeddings and vector databases, but due to performance issues, I pivoted to using torrent name parsers and Elasticsearch for more efficient matching."
        },
        {
            type: "link",
            link: "https://arxiv.org/abs/2501.09275",
            description: "Read the full paper on arXiv"
        }
    ],
    "email-privacy-study": [
        {
            type: "heading",
            content: "Email Privacy Study: Evaluating Inbox Implications"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "This study investigated the privacy implications of email marketing practices among the 150 most popular online services and apps. It examined email volume, source, frequency, and content received after sign-up, revealing widespread use of promotional and CRM email practices even in the presence of opt-out preferences."
        },
        {
            type: "text",
            content: "I was responsible for setting up and managing the use of a local LLM (LLaMA) via Ollama to process and classify emails at scale. I helped design the in-context learning prompts used to teach the model how to categorize different types of emails, and I manually labeled several samples to validate model accuracy. This enabled the team to automate and scale the analysis across all collected messages."
        },
        {
            type: "link",
            link: "https://arxiv.org/abs/2410.08302",
            description: "Read the full paper on arXiv"
        }
    ],
    "on-demand-ai-art": [
        {
            type: "heading",
            content: "On-Demand AI Art: Print-Ready Image Generation with Minimal Input"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "This project presents a novel framework for generating high-resolution, print-ready AI art using minimal user input. It tackles two major challenges in commercial generative art: the complexity of prompt engineering and the low native resolution of diffusion models. The system integrates advanced prompt enhancement strategies with AI-powered upscaling to create art suitable for large-format physical products."
        },
        {
            type: "text",
            content: "I developed the entire pipeline, including multiple methods for prompt enhancement — such as LLM-only, RAG-based multishot, and RAG templating approaches — to assist users in generating high-quality prompts. I also evaluated a suite of AI upscalers (like ESRGAN and HAT-L) to meet commercial resolution demands. The framework was tested with Stable Diffusion XL and designed for future scalability and commercial integration."
        },
        {
            type: "link",
            link: "https://arxiv.org/abs/2405.18247",
            description: "Read the full paper on arXiv"
        }
    ],
    "agri-ai": [
        {
            type: "heading",
            content: "AGRI AI: Predicting Prairie Phenology with Climate Data"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "This project analyzed 23 years of vegetation (EVI) and weather data from Oklahoma tallgrass prairies to identify key climate drivers of seasonal plant phenology. We applied time-series correlation, statistical modeling, and machine learning to reveal patterns in environmental impact across seasons and locations."
        },
        {
            type: "text",
            content: "I led a team of four sophomores in the competition—where first and second place were graduate student teams. We used Python along with pandas, NumPy, scikit-learn, PyTorch, matplotlib, seaborn, and semopy. I coordinated the modeling strategy, contributed to defining phenology terms, and led the final modeling phase. Our best models achieved a 50% reduction in MAE compared to baselines, earning us third place."
        }
    ],
    "shuffle-ink": [
        {
            type: "heading",
            content: "Shuffle.Ink: Consumer-to-Consumer Generative Art Platform"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "Shuffle.Ink is a full-stack generative art platform that enables users to create and sell AI-generated artwork with no prior prompt engineering experience. The system was built as a consumer-to-consumer marketplace centered around accessible, high-resolution AI art generation."
        },
        {
            type: "text",
            content: "I helped adapt the core art generation logic from my earlier research on print-ready AI art, ensuring the platform could generate quality outputs with minimal user input. I also contributed to the architecture of the RESTful API (design only), structured the frontend project using React and Vite, and integrated backend functionality with the frontend. While I didn’t focus on UI design, I was responsible for ensuring the frontend and backend worked seamlessly together."
        }
    ],
    "home-server": [
        {
            type: "heading",
            content: "Home Server: Self-Hosted Virtualized App Deployment"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "This project showcases a self-hosted infrastructure for running personal web applications from my home computer using virtual machines and containerization."
        },
        {
            type: "text",
            content: "I use Windows as the host OS and run VMs through Hyper-V to isolate different services. Each VM uses Docker to deploy and manage applications. A Cloudflare Tunnel connects my server to the internet, handling TLS certificates and domain routing, while Tailscale creates a secure mesh VPN to access my services from any device. This portfolio website, among others, is served directly from this setup."
        }
    ],
    "spongebot": [
        {
            type: "heading",
            content: "SpongeBot: Real-Time Conversational AI with Voice and Video"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "SpongeBot is an AI-powered chatbot platform that lets users interact with animated versions of SpongeBob and Patrick (via their Actor's) through real-time, voice-driven conversations. The system combines large language models, voice conversion, and video synthesis in a Snapchat-style interface to create a novel AI experience."
        },
        {
            type: "text",
            content: "We built SpongeBot using a modular microservice architecture. I worked on integrating Whisper for speech-to-text, OpenAI GPT-4 for dialogue generation, Retrieval-Based Voice Conversion for character-specific speech, and SadTalker for video generation. These services were hosted locally and stitched together using Flask APIs and a React frontend. I also implemented GPU load management and parallelized audio/video generation to maximize responsiveness."
        },
        {
            type: "link",
            link: "https://www.canva.com/design/DAF60YSXnKU/22FnkIw0ndPthecLd8ac_Q/edit?utm_content=DAF60YSXnKU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            description: "View project presentation."
        },
        {
            type: "video",
            link: "/portfolio/sponge-bot/demo.mp4",
            description: "View a demo here."
        }
    ],
    "back-to-the-books": [
        {
            type: "heading",
            content: "Back to the Books: AI-Powered Canvas Learning Companion"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "Back to the Books is a full-stack AI-powered web app that enhances student learning by connecting to their Canvas Learning Management System (LMS) data and generating personalized study aids. It creates active-recall-based flashcards and hosts a tutor chatbot that responds based on real class materials."
        },
        {
            type: "text",
            content: "I worked on backend logic and integration between OpenAI’s LLMs and the Canvas API to extract course content and dynamically generate Socratic-style learning tools. We built the app using React, Node/Express, MySQL with Sequelize, and Figma for design. The chatbot and flashcards are both tailored to each user’s real academic content."
        },
        {
            type: "text",
            content: "This project won 2nd place at the 2024 Hacklahoma Hackathon and demonstrated the potential for AI to deeply personalize the educational experience."
        },
        {
            type: "video",
            link: "https://www.youtube.com/watch?v=ia442xuRYOM",
            description: "Watch the demo video"
        },
        {
            type: "link",
            link: "https://github.com/noahapursell/2024-Hackathon---Back-to-the-Books",
            description: "View the GitHub repository"
        },
        {
            type: "link",
            link: "https://devpost.com/software/back-to-the-books",
            description: "Devpost"
        }
    ],
    "daiid": [
        {
            type: "heading",
            content: "DAIID: Distributed AI Image Detection on Ethereum"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "DAIID is a decentralized application (dApp) that detects AI-generated images using community voting on the Ethereum blockchain. Users upload images, which are scored by AI models and reviewed by independent nodes. Voting is incentivized through a stake-and-reputation mechanism, ensuring transparent and tamper-resistant moderation."
        },
        {
            type: "text",
            content: "I was responsible for writing the Solidity smart contract and implementing the logic that allows nodes to vote on AI-detection results. After an image is analyzed by one of several Hugging Face-hosted AI classifiers, my code handles the interaction with the blockchain, submitting votes and maintaining consensus integrity. I also helped debug inter-node communication and manage IPFS image storage integration."
        },
        {
            type: "video",
            link: "https://www.youtube.com/watch?v=syO0jST9pOQ",
            description: "Watch the demo video"
        },
        {
            type: "link",
            link: "https://github.com/Hacklahoma-2025/daiid-app",
            description: "View the GitHub repository"
        },
        {
            type: "link",
            link: "https://devpost.com/software/daiid",
            description: "Devpost"
        }
    ],
    "limelend": [
        {
            type: "heading",
            content: "LimeLend: Ethereum-Based Game Lending & Rental Platform"
        },
        {
            type: "summary"
        },
        {
            type: "text",
            content: "LimeLend is a decentralized platform that enables users to buy, lend, and rent digital games using Ethereum smart contracts. The system replaces centralized DRM with trustless on-chain ownership and billing, allowing fair revenue sharing between developers and users."
        },
        {
            type: "text",
            content: "I designed and implemented the GameRental smart contract in Solidity using the Hardhat framework. I also wrote comprehensive test suites in Solidity and JavaScript, and developed a Python wrapper to enable off-chain clients—like our CLI tool—to interact with the contract. This contract handles registration, time-based billing, revenue distribution, and access validation, forming the backbone of LimeLend’s decentralized digital rights system."
        },
        {
            type: "video",
            link: "https://www.youtube.com/watch?v=v7LRLdV4ukY",
            description: "Watch the demo here"
        },
        {
            type: "link",
            link: "https://github.com/noahapursell/CS-5833-Eth-Software-Lending-Project",
            description: "View the GitHub repository"
        },
        {
            type: "link",
            link: "/portfolio/lime-lend/LimeLendReport.pdf",
            description: "Download full project report here"
        }
    ]
};


const contactConfig = {
    YOUR_EMAIL: "noahapursell@gmail.com",
    YOUR_FONE: "918-710-1434",
    description: "I am always interested in learning from others, hearing about new opportunities, and sharing what I know. Feel free to email or text me. I will generally respond within one business day.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/noahapursell",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/noah-pursell/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    projectDescriptions,
};