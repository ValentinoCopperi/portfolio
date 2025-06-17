export interface Project {
    id: number;
    title: string;
    short_description: string;
    description: string;
    functions: {
        title: string;
        description: string;
    }[];
    images: string[];
    video?: string;
    technologies: string[];
    createdAt: string;
    links: {
        repository?: string;
        demo?: string;
    };
    category: 'full-stack' | 'frontend' | 'backend' | 'other';
    projectType: 'personal' | 'professional';
}

export const projects: Project[] = [
    {
        id: 8,
        title: "Car Market Argentina",
        short_description: "Full-stack web application for a top Buenos Aires car dealership, focused on efficient operations and excellent customer experience.",
        description: "This full-stack platform, built for a prominent car dealership in Buenos Aires, empowers sellers to publish and manage inventory effortlessly. Buyers get personalized subscription alerts and can chat in real-time with sales reps. It features a modern UI and a dashboard with key metrics for smart business decisions.",
        images: ["car-market/car-1.png","car-market/car-7.png","car-market/car-8.png","car-market/car-5.png","car-market/car-4.png","car-market/car-6.png","car-market/car-9.png", "car-market/car-2.png", "car-market/car-3.png"],
        createdAt: "March 2025 - June 2025",
        links: {
            demo: "https://carmarketarg.com",
        },
        category: "full-stack",
        projectType: "professional",
        functions: [
            {
                title: "AWS S3",
                description: "Utilizes AWS S3 for scalable and secure storage of car images and other media assets."
            },
            {
                title: "Node.js & NestJS Backend",
                description: "Powers the robust backend with Node.js and NestJS, implementing secure API endpoints, authentication (including JWT), and efficient data handling for the entire car marketplace."
            },
            {
                title: "PostgreSQL Database",
                description: "Manages all marketplace data, including car listings, user information, transactions, and more, within a reliable and scalable PostgreSQL database."
            },
            {
                title: "Next.js Frontend",
                description: "Delivers a fast, interactive, and SEO-friendly user experience through a modern Next.js frontend framework."
            },
            {
                title: "Mercado Pago Integration",
                description: "Enables secure and localized payment processing through Mercado Pago, facilitating transactions for car purchases and related services."
            },
            {
                title: "Shadcn & Tailwind CSS",
                "description": "Ensures a modern, responsive, and visually appealing user interface with a sleek design, built using Shadcn UI components and styled with Tailwind CSS."
            }
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "NestJS",
            "PostgreSQL",
            "Mercado Pago API",
            "AWS S3",
            "Shadcn UI",
            "Tailwind CSS",
            "JWT (JSON Web Tokens)"
        ]

    },
    {
        id: 2,
        title: "Project Ideas Generator",
        short_description: "AI-powered project idea generator that creates unique proposals tailored to your needs.",
        description: "An AI-driven tool that generates innovative project ideas based on user input. It leverages OpenAI to provide personalized and creative suggestions, making it easier for developers, entrepreneurs, and students to start new projects. The system is built using modern technologies like Next.js and PostgreSQL for a seamless experience.",
        images: ["ideas-1.png", "ideas-2.png", "ideas-3.png", "ideas-4.png"],
        createdAt: "January 2025",
        links: {
            demo: "https://ideas-generator-valentino.vercel.app",
            repository: "https://github.com/valentino/ideas-generator"
        },
        category: "full-stack",
        projectType: "professional",
        technologies: ["Next.js", "TypeScript", "Node.js", "ShadCN", "OpenAI", "PostgreSQL"],
        functions: [
            {
                title: "Node.js",
                description: "Utilizes Node.js for the backend, implementing middlewares, JSON Web Tokens (JWT), and secure API handling."
            },
            {
                title: "OpenAI API Integration",
                description: "Uses OpenAI to generate personalized project ideas based on user input."
            },
            {
                title: "PostgreSQL",
                description: "Stores user-generated ideas in a PostgreSQL database for later reference."
            },
            {
                title: "Shadcn & Tailwind",
                description: "Styled with ShadCN and Tailwind CSS for a clean and modern design."
            },

        ]
    },
    {
        id: 1,
        title: "Twitter App",
        short_description: "A social media platform where users can post, comment, like, and follow others.",
        description: "A full-featured Twitter clone that allows users to create and interact with posts through comments and likes. Users can follow others to see their content, and authentication is handled securely with NextAuth. The app is built with a modern stack including Next.js, Tailwind, and Prisma for an optimized experience.",
        category: "full-stack",
        projectType: "personal",
        links: {
            demo: "https://twitter-app-valentino.vercel.app",
            repository: "https://github.com/valentino/twitter-app"
        },
        technologies: ["Next.js", "Tailwind", "MongoDB", "Java", "Spring Boot", "TypeScript", "SQL"],
        createdAt: "December 2024",
        images: ["twitter-app-1.png", "twitter-app-2.png", "twitter-app-3.png", "twitter-app-4.png"],
        functions: [
            {
                title: "Google Authentication",
                description: "Implemented Google authentication with NextAuth, storing user data in MongoDB."
            },
            {
                title: "SQL",
                description: "Used SQL to interact with MongoDB efficiently and securely."
            },
            {
                title: "Java Spring Boot",
                description: "Used Spring Boot to build the backend of the application."
            },
            {
                title: "Middleware Security",
                description: "Protected API routes using custom middlewares."
            },
            {
                title: "Server Actions",
                description: "Used Next.js Server Actions for optimized backend operations."
            },
            {
                title: "Dynamic Themes",
                description: "Implemented light and dark mode with smooth transitions."
            }
        ]
    },

    {
        id: 3,
        title: "Taskly",
        short_description: "A task management app with AI-powered feedback on tasks.",
        description: "Taskly is a productivity application that allows users to manage their tasks efficiently while integrating an AI-powered assistant. The assistant can analyze tasks and provide feedback, helping users optimize their workflow. The app is built using Next.js for the frontend and NestJS for the backend, leveraging Convex as the database and Clerk for authentication.",
        images: ["taskly-1.png", "taskly-2.png", "taskly-3.png", "taskly-4.png"],
        createdAt: "February 2025",
        links: {
            demo: "https://chatbot-tasks.vercel.app",
            repository: "https://chatbot-tasks.vercel.app"
        },
        category: "full-stack",
        projectType: "personal",
        technologies: ["Next.js", "NestJS", "TypeScript", "ShadCN", "Tailwind", "Convex", "Clerk"],
        functions: [
            {
                title: "AI Task Analysis",
                description: "Integrates OpenAI to analyze tasks and provide actionable feedback."
            },
            {
                title: "Real-time Task Management",
                description: "Uses Convex for real-time database updates and task synchronization."
            },
            {
                title: "Secure Authentication",
                description: "Implements Clerk for user authentication and session management."
            },
            {
                title: "UI Components",
                description: "Styled with Tailwind CSS and ShadCN for a modern and responsive design."
            },
            {
                title: "Backend with NestJS",
                description: "Utilizes NestJS to provide a scalable and maintainable backend architecture."
            }
        ]
    },
    {
        id: 4,
        title: "English Quiz",
        short_description: "An interactive English learning quiz with different levels and topics.",
        description: "English Quiz is an educational platform that helps users improve their English skills through interactive quizzes. It offers multiple difficulty levels, from beginner to advanced, covering topics like reading, vocabulary, and grammar. The app tracks user progress and provides personalized recommendations to enhance learning. Built with modern UI and responsive design.",
        images: ["quiz-1.png", "quiz-2.png", "quiz-3.png", "quiz-4.png"],
        createdAt: "October 2024",
        links: {
            demo: "https://english-app-alpha.vercel.app",
            repository: "https://github.com/valentino/english-quiz"
        },
        category: "full-stack",
        projectType: "personal",
        technologies: ["React", "TypeScript", "Tailwind"],
        functions: [
            {
                title: "Multi-Level Quizzes",
                description: "Includes beginner, intermediate, and advanced levels with diverse topics."
            },
            {
                title: "Progress Tracking",
                description: "Saves user progress to help track learning improvements."
            },
            {
                title: "Responsive Design",
                description: "Designed with Tailwind  for a seamless experience on any device."
            }
        ]
    }
];
