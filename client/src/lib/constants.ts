import { Project } from "./types";

export const skillsData = {
  frontend: ["HTML", "CSS", "SCSS", "JavaScript", "React.js", "Next.js"],
  uiLibraries: ["Bootstrap", "Tailwind", "Material UI", "AntD"],
  stateManagement: ["Redux", "Context API"],
  mobileDevelopment: ["React Native"],
  cms: ["WordPress", "WooCommerce"],
  tools: ["Git", "Figma", "NPM", "Webpack"]
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, Redux for state management, and Tailwind CSS for styling.",
    imageUrl: "https://pixabay.com/get/g7c0c828d72606b61d6752e986441b1ea6b08abcc5004c47bd7b94d247d958939dc50f1f652dd5ba6f0e76384b7ff9379212f5ae8f6f27602a01b9c83fa73f1a9_1280.jpg",
    technologies: ["Next.js", "Redux", "Tailwind"],
    categories: ["react", "nextjs"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Interactive dashboard for data visualization built using React.js, Material UI, and D3.js for custom charts.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Material UI", "D3.js"],
    categories: ["react"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Custom WordPress theme development for a corporate website with blog functionality and custom post types.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["WordPress", "SCSS", "JavaScript"],
    categories: ["wordpress"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Full-featured task management application with drag-and-drop functionality using React and Redux.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Redux", "Styled Components"],
    categories: ["react", "nextjs"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "E-commerce Store",
    description: "Custom WooCommerce implementation with advanced product filtering and payment gateway integration.",
    imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    categories: ["wordpress"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Cross-platform mobile application built with React Native for fitness tracking and workout planning.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React Native", "Redux", "Firebase"],
    categories: ["react"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
