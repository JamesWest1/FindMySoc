import type { Metadata } from "next";
import { parseISO, isAfter, compareDesc } from "date-fns";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/eventTypes";

async function getEvents() {
    return [
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
    ];
  }

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Check out our upcoming and past events",
};

async function sortEvents(events: Event[]) {
  const currentDate = new Date();

  const parsedEvents = events.map((event) => ({
    ...event,
    parsedTime: parseISO(event.endingTime),
  }));

  const upcomingEvents = parsedEvents
    .filter((event) => isAfter(event.parsedTime, currentDate))
    .sort((a, b) => compareDesc(a.parsedTime, b.parsedTime));

  const pastEvents = parsedEvents
    .filter((event) => !isAfter(event.parsedTime, currentDate))
    .sort((a, b) => compareDesc(a.parsedTime, b.parsedTime));

  return { pastEvents, upcomingEvents };
}

export default async function Events() {
  const events: Event = await getEvents();

  if (!events) {
    return (
      <div className="mt-10 text-center font-bold text-2xl">
        Error Page Does Not Exist
      </div>
    );
    // notFound();
  }

  const sortedEvents = await sortEvents(events);
  const upcomingEvents = sortedEvents.upcomingEvents;
  const pastEvents = sortedEvents.pastEvents;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="pb-1 text-4xl font-bold mt-6 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Upcoming Events
      </h1>
      <section>
        {upcomingEvents.length === 0 ? (
          <div className="text-2xl font-bold text-center">
            Stay tuned for new events!
          </div>
        ) : (
          <div className="w-full max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {upcomingEvents.map((event) => (
              <EventCard key={event.sys.id} event={event} />
            ))}
          </div>
        )}
      </section>

      <h1 className="text-4xl font-bold my-12 text-muted-foreground ">
        Past Events
      </h1>

      {/* <Suspense fallback={<h2>Loading...</h2>}> */}
      <section>
        {pastEvents.length === 0 ? (
          <div className="text-3xl font-bold text-center mb-10">
            We haven't held any previous events! Stay tuned for new events!
          </div>
        ) : (
          <div className="w-full max-w-7xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {pastEvents.map((event) => (
              <EventCard key={event.sys.id} event={event} />
            ))}
          </div>
        )}
      </section>
      {/* </Suspense> */}
    </div>
  );
}