import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TechCard from "./TechCard";
import { Educations, LogoUrl } from "@/lib/common";
import LogoCard from "./LogoCard";
const AboutMe = () => {
  return (
    <div className="min-h-screen  py-6 px-10 w-[60vw]">
      <h1 className="text-5xl font-bold text-center mb-12">About me.</h1>
      {/* Education Section */}
      <section className="relative z-10 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 ">Education</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 w-[0.2rem] h-full bg-gray-700" />

          {/* Education Items */}
          <div className="space-y-12 pl-8">
            {Educations.map((edu) => (
              <TechCard
                name={edu.name}
                institute={edu.institute}
                description={edu.description}
                duration={edu.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech I Learned Section */}
      <section className="relative z-10  max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Tech I've Learned</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 w-[0.2rem] h-full bg-gray-700" />

          <div className="space-y-12 pl-8">
            {/* first */}
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png",
                  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/css-beginners-tutorial.jpg",
                  "https://www.chloros.in/images/techLogo12.png",
                  "https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center p-4  rounded-lg shadow-sm"
                  >
                    <img src={tech} className="w-13 h-12 mb-2" alt={tech} />
                  </div>
                ))}
              </div>
            </div>
            {/* second */}
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "https://th.bing.com/th/id/OIP.290Zrd7jUMmV94wZhwmjkAHaEv?rs=1&pid=ImgDetMain",
                  "https://www.chloros.in/images/techLogo19.png",
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
                  "https://www.chloros.in/images/techLogo12.1.png",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center p-4  rounded-lg shadow-sm"
                  >
                    <img src={tech} className="w-13 h-12 mb-2" alt={tech} />
                  </div>
                ))}
              </div>
            </div>
            {/* third */}
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
                  "https://th.bing.com/th/id/OIP.retZOC1Sz_ttVUsXYe9OvQHaHa?w=511&h=511&rs=1&pid=ImgDetMain",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center p-4  rounded-lg shadow-sm"
                  >
                    <img src={tech} className="w-13 h-12 mb-2" alt={tech} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Section */}
      <section className=" relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Coding Playlist</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 w-[0.2rem] h-full bg-gray-700" />

          <div className="space-y-8 pl-8">
            {/* first */}
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="space-y-4">
                <div className="bg-whit p-4 rounded-lg shadow-sm">
                  <iframe
                    className="rounded-[12px]"
                    src="https://open.spotify.com/embed/playlist/2fpnObc2H3Ejqqg6mDKnvj?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="bg-whit p-4 rounded-lg shadow-sm"></div>
              </div>
            </div>
            {/*second */}
            <div className="relative">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className="space-y-4">
                <div className="bg-whit p-4 rounded-lg shadow-sm">
                  <iframe
                    className="rounded-[12px]"
                    src="https://open.spotify.com/embed/playlist/3gvHuuAfFAzajA1LwQMGKb?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="bg-whit p-4 rounded-lg shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex mt-8 pt-4 relative z-20">
        <p className="mr-5">Let's Continue To Projects.</p>
        <Link href={"/projects"}>
          {" "}
          <ArrowRight />{" "}
        </Link>
      </div>
      <div className="text-[12rem] font-title opacity-5 left-0 font-extrabold fixed bottom-0 -z-1">
        About Me.
      </div>
    </div>
  );
};

export default AboutMe;
