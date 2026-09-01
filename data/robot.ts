export interface RobotProduct {
    id: string;
    name: string;
    model: string;
    tagline: string;
    subTagline: string;
    description: string;
    price: string;
    themeColor: string;

    features: string[];

    stats: {
        label: string;
        value: string;
    }[];

    hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
    };

    engineering: {
        title: string;
        description: string;
        features: string[];
    };

    sensing: {
        title: string;
        description: string;
        features: string[];
    };

    movement: {
        title: string;
        description: string;
        features: string[];
    };

    intelligence: {
        title: string;
        description: string;
        features: string[];
    };

    learning: {
        title: string;
        description: string;
        modules: string[];
    };

    applications: {
        title: string;
        items: string[];
    };

    specifications: {
        label: string;
        value: string;
    }[];

    purchase: {
        title: string;
        subtitle: string;
        buttonPrimary: string;
        buttonSecondary: string;
    };
}

export const robotProduct: RobotProduct = {

    id: "techyguide-smart-robot",

    name: "TechyGuide Smart Robot",

    model: "TG SmartBot",

    tagline: "Small robot. Big possibilities.",

    subTagline:
        "Designed to turn coding, electronics and robotics into something students can see, touch and build.",

    description:
        "A compact, intelligent educational robotics platform combining sensing, movement, embedded electronics and programming into one powerful learning system.",

    price: "Contact for Pricing",

    themeColor: "#8B2BB3",

    features: [
        "Integrated Robotics Controller",
        "Dual Ultrasonic Sensing",
        "Precision Motor Control",
        "Programmable Platform",
        "Expandable Sensor Interface",
        "Hands-on STEM Learning"
    ],

    stats: [
        {
            label: "Drive",
            value: "2 Wheel"
        },
        {
            label: "Obstacle Detection",
            value: "Ultrasonic"
        },
        {
            label: "Programming",
            value: "Interactive"
        },
        {
            label: "Learning",
            value: "STEM + AI"
        }
    ],

    hero: {
        eyebrow: "ENGINEERED FOR THE NEXT GENERATION",
        title: "Meet the Robot That Makes Technology Tangible.",
        subtitle:
            "Build it. Program it. Experiment with it. Understand how intelligent machines really work."
    },

    engineering: {
        title: "Engineering you can see.",
        description:
            "Instead of hiding technology inside a plastic shell, every critical component is visible. Students experience electronics, mechanics, sensing and programming as one connected system.",
        features: [
            "Custom integrated PCB",
            "Accessible electronic architecture",
            "Robust wheel and motor system",
            "Modular construction",
            "Classroom-ready engineering design"
        ]
    },

    sensing: {
        title: "It sees what lies ahead.",
        description:
            "The front-facing ultrasonic sensing system continuously measures distance, enabling the robot to detect obstacles and react intelligently to its surroundings.",
        features: [
            "Real-time distance measurement",
            "Obstacle detection",
            "Autonomous navigation experiments",
            "Environmental sensing projects"
        ]
    },

    movement: {
        title: "Built to move with precision.",
        description:
            "Independent motor control allows students to understand speed, direction, turning logic and autonomous movement through real-world experimentation.",
        features: [
            "Independent wheel control",
            "Forward and reverse motion",
            "Differential steering",
            "Speed control",
            "Autonomous movement"
        ]
    },

    intelligence: {
        title: "Code becomes behaviour.",
        description:
            "Programming is transformed from abstract syntax into physical action. Students can create behaviours, decision-making logic and interactive robotic systems.",
        features: [
            "Programming fundamentals",
            "Conditional logic",
            "Sensor-driven decisions",
            "Automation",
            "Algorithmic thinking"
        ]
    },

    learning: {
        title: "A laboratory on wheels.",
        description:
            "One robot supports a progressive learning journey from beginner programming to advanced robotics experimentation.",
        modules: [
            "Introduction to Robotics",
            "Electronics Fundamentals",
            "Motor Control",
            "Sensor Programming",
            "Obstacle Avoidance",
            "Line & Motion Logic",
            "Autonomous Navigation",
            "IoT Concepts",
            "AI & Robotics Fundamentals",
            "Problem Solving Challenges"
        ]
    },

    applications: {
        title: "One platform. Endless experiments.",
        items: [
            "Obstacle Avoiding Robot",
            "Autonomous Navigation",
            "Smart Mobility",
            "Sensor Experiments",
            "Coding Challenges",
            "STEM Competitions",
            "IoT Experiments",
            "AI Robotics Activities"
        ]
    },

    specifications: [
        {
            label: "Platform",
            value: "Educational Robotics"
        },
        {
            label: "Drive System",
            value: "Dual Motor / Two Wheel"
        },
        {
            label: "Obstacle Sensor",
            value: "Dual Ultrasonic"
        },
        {
            label: "Controller",
            value: "Integrated Programmable Controller"
        },
        {
            label: "Connectivity",
            value: "USB"
        },
        {
            label: "PCB",
            value: "Custom Integrated Robotics PCB"
        },
        {
            label: "Expansion",
            value: "Sensor / Module Interfaces"
        },
        {
            label: "Suitable For",
            value: "STEM, Coding & Robotics Education"
        }
    ],

    purchase: {
        title: "Ready to build the future?",
        subtitle:
            "Bring hands-on robotics, coding and engineering into your classroom.",
        buttonPrimary: "Request a Demo",
        buttonSecondary: "Get a Quote"
    }
};
