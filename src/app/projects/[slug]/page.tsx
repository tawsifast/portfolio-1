import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectDetailsProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-8 md:px-20 max-w-5xl mx-auto w-full">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-outline hover:text-white transition-colors mb-8 group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
            <p className="text-xl text-outline leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </header>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-surface-container-high w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">About the Project</h2>
                <p className="text-outline leading-relaxed">
                  {project.description}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Challenges Faced</h2>
                <ul className="list-disc list-inside space-y-2 text-outline">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Future Improvements</h2>
                <ul className="list-disc list-inside space-y-2 text-outline">
                  {project.futurePlans.map((plan, index) => (
                    <li key={index}>{plan}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-white/10 bg-surface-container-high/50 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-outline">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-medium hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300"
                  >
                    View Live Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 py-3 rounded-xl font-medium text-white hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                  >
                    GitHub Repo
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 12.3 24 12c0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
