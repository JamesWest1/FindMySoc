import EventCard from "@/components/EventCard";
import SocietyCard from "@/components/SocietyCard";
import Image from "next/image";


const events = [
      {
        sys: { id: "1" },
        slug: "summer-music-festival",
        eventTitle: "Summer Music Festival 2025",
        eventImage: {
          url: "https://example.com/event-image.jpg",
          title: "Summer Festival Banner",
        },
        category: "Music",
        location: "Sydney, Australia",
        startingTime: "2025-12-10T18:00:00Z",
        endingTime: "2025-12-11T02:00:00Z",
        description: "Join us for a night of music, food, and fun!",
      },
      {
        sys: { id: "2" },
        slug: "tech-conference-2025",
        eventTitle: "Tech Conference 2025",
        eventImage: {
          url: "https://example.com/tech-event.jpg",
          title: "Tech Conference Banner",
        },
        category: "Technology",
        location: "Melbourne, Australia",
        startingTime: "2025-08-20T09:00:00Z",
        endingTime: "2025-08-20T17:00:00Z",
        description: "A gathering of top industry leaders and innovators.",
      },
      {
        sys: { id: "3" },
        slug: "past-art-exhibition",
        eventTitle: "Art Exhibition 2024",
        eventImage: {
          url: "https://example.com/art-exhibition.jpg",
          title: "Art Exhibition Banner",
        },
        category: "Art",
        location: "Brisbane, Australia",
        startingTime: "2024-05-15T10:00:00Z",
        endingTime: "2024-05-15T18:00:00Z",
        description: "A display of contemporary and classic art pieces.",
      },
      {
        sys: { id: "4" },
        slug: "sports-tournament",
        eventTitle: "National Sports Tournament",
        eventImage: {
          url: "https://example.com/sports-tournament.jpg",
          title: "Sports Tournament Banner",
        },
        category: "Sports",
        location: "Perth, Australia",
        startingTime: "2024-09-05T12:00:00Z",
        endingTime: "2024-09-05T20:00:00Z",
        description: "Watch top athletes compete in various sports events.",
      },
      {
        sys: { id: "6" },
        slug: "sports-tournament",
        eventTitle: "National Sports Tournament",
        eventImage: {
          url: "https://example.com/sports-tournament.jpg",
          title: "Sports Tournament Banner",
        },
        category: "Sports",
        location: "Perth, Australia",
        startingTime: "2024-09-05T12:00:00Z",
        endingTime: "2024-09-05T20:00:00Z",
        description: "Watch top athletes compete in various sports events.",
      },
      {
        sys: { id: "4" },
        slug: "sports-tournament",
        eventTitle: "National Sports Tournament",
        eventImage: {
          url: "https://example.com/sports-tournament.jpg",
          title: "Sports Tournament Banner",
        },
        category: "Sports",
        location: "Perth, Australia",
        startingTime: "2024-09-05T12:00:00Z",
        endingTime: "2024-09-05T20:00:00Z",
        description: "Watch top athletes compete in various sports events.",
      },
    ];



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-4">
      <h1 className="pb-1 text-4xl font-bold mt-6 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Browse Societies
      </h1>
      <section>
        {events.length === 0 ? (
          <div className="text-2xl font-bold text-center">
            Stay tuned for new events!
          </div>
        ) : (
          <div className="w-full max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {events.map((event) => (
              <SocietyCard key={event.sys.id} event={event} />
            ))}
          </div>
        )}
      </section>    
    </div>
  );
}
