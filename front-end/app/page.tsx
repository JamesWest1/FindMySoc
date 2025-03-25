import EventCard from "@/components/EventCard";
import SocietyCard from "@/components/SocietyCard";
import Image from "next/image";


const societies = [
      {
        id: "1" ,
        societyName: "Software Development Society",
        societyImage: {
          // CHECK IF THE URL WORKS //
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=015IS000000srrkYAA&mdt=1707908896979",
          title: "DevSoc Banner",
        },
        category: "Academic/Networking;Engineering;Technology",
        description: "We are a community of students with a interest in software development. We provide opportunities for students to practice, experiment and contribute to practical projects.",
        website: "https://devsoc.app/",
        email: "contact@devsoc.app",
        facebook: "https://www.facebook.com/devsocUNSW",
      },
      {
        id: "2" ,
        societyName: "CSE Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000Jym9NQAR&mdt=1582247252513",
          title: "CSESOC Banner",
        },
        category: "Academic/Networking;Engineering;Technology",
        description: "CSESoc is the principal representative body for computing students on campus. We are one of the biggest and most active societies at UNSW, catering to approximately 1600 CSE students.",
        website: "https://www.csesoc.unsw.edu.au",
        email: "info@csesoc.org.au",
        facebook: "https://www.facebook.com/csesoc",
      },
      {
        id: "3" ,
        societyName: "Faculty of Engineering Student Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000G4U2EQAV&mdt=1548372608320",
          title: "ENGSOC Banner",
        },
        category: "Academic/Networking;Engineering;Social",
        description: "UNSW EngSoc is the constituent engineering society at UNSW and our member base consists of all students within the nine schools of the UNSW Faculty of Engineering.",
        website: "https://unswengsoc.com/",
        email: "contact@unswengsoc.com",
        facebook: "https://www.facebook.com/UNSWEngSoc",
      },
      {
        id: "4" ,
        societyName: "Data Science Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000G4U1zQAF&mdt=1548372608285",
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
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000HvAQsQAN&mdt=1580728686808",
          title: "CatSoc Banner",
        },
        category: "Charity/Community Service;Hobby;Social",
        description: "UNSW Cat Appreciation Society aims to provide a diverse, accepting and caring forum for cat lovers of UNSW to collaborate and form friendships, whilst purr-suing ways to help in local and global animal rescue efforts.",
        website: "https://unswcatsoc.com",
        email: "unswcatsoc@gmail.com",
        facebook: "https://www.facebook.com/unswcatsoc/",
      },
      {
        id: "6" ,
        societyName: "Adventure Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=015IS000000srPMYAY&mdt=1706941743362",
          title: "ADSOC Banner",
        },
        category: "Hobby;Social;Sport",
        description: "Since 2009, UNSW Adventurers Society (ADSOC) has made it our mission to enrich the university experience of all local, exchange and international students in a variety of indoor and outdoor activities.",
        website: "https://www.unswadsoc.com/",
        email: "adsocunsw@gmail.com",
        facebook: "https://www.facebook.com/UNSWadsoc",
      },
      {
        id: "7" ,
        societyName: "Artifical Intelligience Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000OFbQEQA1&mdt=1684385224125",
          title: "AI Soc Banner",
        },
        category: "Academic/Networking;Engineering;Science;Technology",
        description: "The Artificial Intelligence (AI) Society is to serve both AI major and non-AI major UNSW students, faculty members, and the broader UNSW community as the bridge between frontier development in AI, its applications and its influence on the business and social realms.",
        website: "https://unswaisoc.com/",
        email: "unsw.ai.soc@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=100092595608038",
      },
      {
        id: "8" ,
        societyName: "Architecture Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=0156F00000G4U0xQAF&mdt=1548372608273",
          title: "ArchSoc Banner",
        },
        category: "Academic/Networking",
        description: "An educational society from UNSW's Built Environment Faculty; We aim to facilitate an environment where students are comfortable to share and discuss architecture.",
        website: "https://unswarchsociety.wixsite.com/home",
        email: "unswarchitecturesociety@gmail.com",
        facebook: "https://www.facebook.com/UNSWArchSoc",
      },
      {
        id: "9" ,
        societyName: "Debating Society",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=015Mn000007bKyDIAU&mdt=1727788658308",
          title: "DebSoc Banner",
        },
        category: "Academic/Networking;Hobby",
        description: "The UNSW Debating Society (also known as Debsoc) is the resident debating club at UNSW, and one of the premier clubs on campus. ",
        website: "https://unsw-debating.squarespace.com/",
        email: "unsw.debsoc@gmail.com",
        facebook: "https://www.facebook.com/Debating.UNSW",
      },
      {
        id: "10" ,
        societyName: "GEOSoc",
        societyImage: {
          url: "https://member.arc.unsw.edu.au/members/servlet/servlet.FileDownload?file=015IS000000sx00YAA&mdt=1717500629042",
          title: "GEOSoc Banner",
        },
        category: "Academic/Networking;Environment;Science",
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
          <div className="w-full max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {societies.map((societies) => (
              <SocietyCard key={societies.id} societies={societies} />
            ))}
          </div>
        )}
      </section>    
    </div>
  );
}
