import { ArrowRightToLine } from "lucide-react";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <section className="px-40 py-20 flex-col flex gap-6  ">
      <div>
        <h3 className="text-3xl font-alegreya font-medium ">My Projects</h3>
        <p className="font-sirin">Each one has it&#39;s own unique ability</p>
      </div>
      <div className="flex-col flex items-center justify-center gap-10">
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-2">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>
        <div className="sticky top-4">
          <ProjectCard />
        </div>

        <div>
          <p className="text-2xl font-sirin  flex items-center gap-2">
            <span>view more on my Github</span>
            <span className="arrow_github">
              <ArrowRightToLine />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
