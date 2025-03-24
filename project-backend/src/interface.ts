// Definition of Society Type
interface Society {
    societyId: number;
    name: string;
    description: string;
    website: string;
    facebook: string;
    arc: string;
    events: Event[];
}

// Definition of Society Type
interface Event {
    eventId: number;
    name: string;
    description: string;
    date: string;
    venue: string;
    reminderDate: string;
}


// Definition of User Type
interface User {
    authUserId: number;
    zId: number;
    email: string;
    password: string;
    nameFirst: string;
    nameLast: string;
    subscribed: string[];
}

export {Society, Event, User};