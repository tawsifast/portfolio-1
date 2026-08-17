import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/colorful-icons";
import { GithubIcon } from "@/components/social-icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
        <Button asChild variant="ghost" className="inline-flex items-center gap-2 text-outline hover:text-white transition-colors mb-8 group -ml-3">
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </Button>

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
              <Card className="p-6 rounded-2xl border border-white/10 bg-surface-container-high/50 space-y-6 shadow-none">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-outline font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-white/10" />

                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-medium hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 h-auto"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 py-3 rounded-xl font-medium text-white hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 h-auto"
                  >
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
