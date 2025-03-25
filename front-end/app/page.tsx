import EventCard from "@/components/EventCard";
import SocietyCard from "@/components/SocietyCard";
import Image from "next/image";


const societies = [
      {
        id: "1" ,
        societyName: "",
        societyImage: {
          url: "https://example.com/event-image.jpg",
          title: "Summer Festival Banner",
        },
        category: "Music",
        description: "Join us for a night of music, food, and fun!",
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
