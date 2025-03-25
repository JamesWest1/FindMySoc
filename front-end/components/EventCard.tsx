import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";



export default function EventCard({ event }) {
    return (
        // <Link href={`/event/${event.slug}`}>
        <Card className="py-0 h-full rounded-lg shadow-xl dark:shadow-slate-900 transition duration-300 md:hover:scale-105 lg:hover:scale-105">
            <Image
            className="h-full w-full rounded-t-lg"
            src={
                event.eventImage?.url
                ? event.eventImage.url
                : "https://i.redd.it/9o4enptgm2c81.jpg"
            }
            width={1080}
            height={1080}
            quality={100}
            style={{
                aspectRatio: "1/1",
                objectFit: "cover",
            }}
            alt={event?.eventImage.title || "Placeholder Image"}
            />
            <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">{event?.category}</p>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-cyan-500">
                {event?.eventTitle}
            </h3>
            <p className="text-base font-bold">{event?.location}</p>
            <p className="text-base">{event?.dateTime}</p>
            <p className="text-sm text-muted-foreground">{event?.description}</p>
            </CardContent>
        </Card>
        // </Link>
);
}