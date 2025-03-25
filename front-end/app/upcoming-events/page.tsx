import type { Metadata } from "next";
import { parseISO, isAfter, compareDesc } from "date-fns";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/eventTypes";

async function getEvents() {
    return [
      {
        sys: { id: "1" },
        slug: "hackabyte-hackathon",
        eventTitle: "DevSoc Presents: HACKaByte Hackathon",
        eventImage: {
          url: "https://example.com/event-image.jpg",
          title: "HACKaByte Hackathon Banner",
        },
        category: "Technology",
        location: "Colombo Theatre B",
        startingTime: "2025-03-24T13:00:00Z",
        endingTime: "2025-03-26T13:00:00Z",
        description: "DevSoc Hackathon",
      },
      {
        sys: { id: "2" },
        slug: "careers-fair",
        eventTitle: "DevSoc x DataSoc x MathSoc presents: Careers Fair",
        eventImage: {
          url: "https://example.com/tech-event.jpg",
          title: "Careers Fair Banner",
        },
        category: "Networking",
        location: "Roundhouse Conference Room 5 & 6",
        startingTime: "2025-03-31T14:00:00Z",
        endingTime: "2025-03-31T17:00:00Z",
        description: "Networking event for students.",
      },
      {
        sys: { id: "3" },
        slug: "cate-cafe-visit",
        eventTitle: "UNSW Catsoc x UNSW Tacsoc Yumiao Cat Cafe Visit!",
        eventImage: {
          url: "https://example.com/art-exhibition.jpg",
          title: "Cat Cafe Visit Banner",
        },
        category: "Social Event",
        location: "Yumiao Cat Cafe",
        startingTime: "2024-03-27T11:00:00Z",
        endingTime: "2024-03-28T16:00:00Z",
        description: "UNSW Catsoc x UNSW Tacsoc Yumi",
      },
      {
        sys: { id: "4" },
        slug: "debsoc-internals5",
        eventTitle: "UNSW DebSoc Internals 5",
        eventImage: {
          url: "https://example.com/sports-tournament.jpg",
          title: "Debsoc Internals Banner",
        },
        category: "Class/Training/Workshop",
        location: "Patricia O'Shane G06",
        startingTime: "2024-03-31T18:00:00Z",
        endingTime: "2024-03-31T21:00:00Z",
        description: "Weekly Debating Training",
      },
      {
        sys: { id: "5" },
        slug: "careers-night",
        eventTitle: "GEOSoc Careers Night",
        eventImage: {
          url: "https://example.com/sports-tournament.jpg",
          title: "Careers Night Banner",
        },
        category: "Networking",
        location: "UNSW (to be specified)",
        startingTime: "2024-04-03T18:00:00Z",
        endingTime: "2024-04-03T21:00:00Z",
        description: "GEOSoc UNSW Careers Night",
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
      <h1 className="pb-1 text-4xl font-bold mt-6 mb-10">
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