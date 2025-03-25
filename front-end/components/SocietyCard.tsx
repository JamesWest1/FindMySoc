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
import { SubscribeModal } from "./SubscribeModal";


// export default function EventCard({ event }: { event: Event }) {
//     return (
//         <Link href={`/event/${event.slug}`}>
//         <Card className="h-full rounded-lg bg-gradient-to-r from-purple-400/25 via-pink-500/25 to-red-500/25 shadow-xl dark:shadow-slate-900 transition duration-300 md:hover:scale-105 lg:hover:scale-105">
//             <CardContent className="p-4">
//             <p className="text-sm text-muted-foreground">{event?.category}</p>
//             <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//                 {event?.eventTitle}
//             </h3>
//             <p className="text-base font-bold">{event?.location}</p>
//             <p className="text-base">{event?.dateTime}</p>
//             <p className="text-sm text-muted-foreground">{event?.description}</p>
//             </CardContent>
//         </Card>
//         </Link>
// );
export default function SocietyCard({ societies } ) {
    return (
        // <Link href={`/event/${event.slug}`}>
        <Card className="h-full rounded-lg shadow-xl transition duration-300 md:hover:scale-105 lg:hover:scale-105 ">
            <CardContent className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">Society Name</p>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-cyan-500">
                    Society Description
                </h3>
                <p className="text-base font-bold">Location of the Society </p>
                <p className="text-base">Date Time of the society </p>
                <p className="text-sm text-muted-foreground">Description of the society </p>
                <SubscribeModal />
            </CardContent>
        </Card>
        // </Link>
);
}