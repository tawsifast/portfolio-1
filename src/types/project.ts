export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "web" | "mobile";
  image: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubClient: string;
  challenges: string[];
  futurePlans: string[];
}
