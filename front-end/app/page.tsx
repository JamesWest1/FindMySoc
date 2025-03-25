import EventCard from "@/components/EventCard";
import SocietyCard from "@/components/SocietyCard";
import Image from "next/image";


const societies = [
      {
        id: "1" ,
        societyName: "Software Development Society",
        societyImage: {
          // CHECK IF THE URL WORKS //
          url: "https://media.licdn.com/dms/image/v2/D560BAQE_rkSk_pK13w/company-logo_200_200/company-logo_200_200/0/1701169794961?e=2147483647&v=beta&t=IdLU6hsYwn-g9NbTYHjpL2Wd8Oa33uvZLkq9uQdSr9I",
          title: "DevSoc Banner",
        },
        category: "Engineering, Technology",
        description: "We are a community of students with a interest in software development. We provide opportunities for students to practice, experiment and contribute to practical projects.",
        website: "https://devsoc.app/",
        email: "contact@devsoc.app",
        facebook: "https://www.facebook.com/devsocUNSW",
      },
      {
        id: "2" ,
        societyName: "CSE Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukDm_GO6Xu40k-MMLK6xz2OgWw46MFMDBOQ&s",
          title: "CSESOC Banner",
        },
        category: "Academic, Technology",
        description: "CSESoc is the principal representative body for computing students on campus. We are one of the biggest and most active societies at UNSW, catering to approximately 1600 CSE students.",
        website: "https://www.csesoc.unsw.edu.au",
        email: "info@csesoc.org.au",
        facebook: "https://www.facebook.com/csesoc",
      },
      {
        id: "3" ,
        societyName: "Faculty of Engineering Student Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA87ozhmjkzRWpF8FJs7mALhBascqDZYumYA&s",
          title: "ENGSOC Banner",
        },
        category: "Social",
        description: "UNSW EngSoc is the constituent engineering society at UNSW and our member base consists of all students within the nine schools of the UNSW Faculty of Engineering.",
        website: "https://unswengsoc.com/",
        email: "contact@unswengsoc.com",
        facebook: "https://www.facebook.com/UNSWEngSoc",
      },
      {
        id: "4" ,
        societyName: "Data Science Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFT_t0gLJljiF2weysJJ9q6R0pQ_LLpbsp5Q&s",
          title: "DataSoc Banner",
        },
        category: "Science",
        description: "At DataSoc, our goal is to discover how data shapes the world around us.",
        website: "https://unswdata.com/",
        email: "hello@unswdata.com",
        facebook: "https://www.facebook.com/DataSoc",
      },
      {
        id: "5" ,
        societyName: "Cat Appreciation Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GoiNWuirTWWwjHhNC4UIlfsKshHCPnTc6w&s",
          title: "CatSoc Banner",
        },
        category: "Hobby,Social",
        description: "UNSW Cat Appreciation Society aims to provide a diverse, accepting and caring forum for cat lovers of UNSW to collaborate and form friendships, whilst purr-suing ways to help in local and global animal rescue efforts.",
        website: "https://unswcatsoc.com",
        email: "unswcatsoc@gmail.com",
        facebook: "https://www.facebook.com/unswcatsoc/",
      },
      {
        id: "6" ,
        societyName: "Adventure Society",
        societyImage: {
          url: "https://arc-discovery-s3.linkupevents.com/logo/0016F0000371VvqQAE",
          title: "ADSOC Banner",
        },
        category: "Hobby,Social",
        description: "Since 2009, UNSW Adventurers Society (ADSOC) has made it our mission to enrich the university experience of all local, exchange and international students in a variety of indoor and outdoor activities.",
        website: "https://www.unswadsoc.com/",
        email: "adsocunsw@gmail.com",
        facebook: "https://www.facebook.com/UNSWadsoc",
      },
      {
        id: "7" ,
        societyName: "Artifical Intelligience Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oVxIq49PQX07q9L8WLzUU5HuRS78LlRyIQ&s",
          title: "AI Soc Banner",
        },
        category: "Technology",
        description: "The Artificial Intelligence (AI) Society is to serve both AI major and non-AI major UNSW students, faculty members, and the broader UNSW community as the bridge between frontier development in AI, its applications and its influence on the business and social realms.",
        website: "https://unswaisoc.com/",
        email: "unsw.ai.soc@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=100092595608038",
      },
      {
        id: "8" ,
        societyName: "Architecture Society",
        societyImage: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZTW6_CfXUXvwdYw_8Fdxg6aHMx-Dio-jTQ&s",
          title: "ArchSoc Banner",
        },
        category: "Academic/Networking",
        description: "An educational society from UNSW's Built Environment Faculty; We aim to facilitate an environment where students are comfortable to share and discuss architecture.",
        website: "https://unswarchsociety.wixsite.com/home",
        email: "unswarchitecturesociety@gmail.com",
        facebook: "https://www.facebook.com/UNSWArchSoc",
      },
      {
        id: "10" ,
        societyName: "GEOSoc",
        societyImage: {
          url: "https://media.licdn.com/dms/image/v2/D560BAQFoozQqedM3Wg/company-logo_200_200/company-logo_200_200/0/1715059493602/unsw_geoscience_society_logo?e=2147483647&v=beta&t=YUn3PgDJYSaIJ62_YKsPgjEpdw2LW9nYT0hPWSiPQMw",
          title: "GEOSoc Banner",
        },
        category: "Environment, Science",
        description: "GEOSOC is a student society devoted to promoting the study of geosciences at the University of New South Wales.",
        website: "https://unswgeosoc.com",
        email: "geosoc.unsw@gmail.com",
        facebook: "https://www.facebook.com/geosoc.unsw",
      },
    ];



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-4">
      <h1 className="pb-1 text-4xl font-bold mt-6 mb-10">
        Browse Societies
      </h1>
      <section>
        {societies.length === 0 ? (
          <div className="text-2xl font-bold text-center">
            Stay tuned for new events!
          </div>
        ) : (
          <div className="w-full max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {societies.map((societies) => (
              <SocietyCard key={societies.id} societies={societies} />
            ))}
          </div>
        )}
      </section>    
    </div>
  );
}
