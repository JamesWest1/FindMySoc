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
import { Facebook, Instagram, Rss } from "lucide-react";


export default function SocietyCard({ societies } ) {
    return (
    <Card className="h-full rounded-lg shadow-xl transition duration-300 md:hover:scale-105 lg:hover:scale-105">
        <CardContent className="p-4 flex flex-col h-full space-y-4">
            <img 
                className="rounded-full" 
                src={societies.societyImage.url} 
                alt={societies.societyName} 
                width="500" 
                height="600"
            />
            <p className="text-sm text-muted-foreground">{societies.category}</p>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-cyan-500">
                {societies.societyName}
            </h3>

            {/* Description container - pushes the social section to the bottom */}
            <p className="text-sm text-muted-foreground flex-grow">
                {societies.description}
            </p>

            {/* Stick social media & button to the bottom */}
            <div className="mt-auto flex items-center justify-between">
                <div className="flex space-x-3">
                    <Link href="facebook">
                        <Facebook />
                    </Link>
                    <Instagram />
                    <Rss />
                </div>
                <SubscribeModal />
            </div>
        </CardContent>
</Card>
);
}