// Definition of Society Type
export interface Society {
    societyId: number;
    name: string;
    description: string;
    website: string;
    facebook: string;
    arc: string;
    events: Event[];
}

// Definition of Society Type
export interface Event {
    eventId: number;
    name: string;
    description: string;
    date: string;
    venue?: string;
    reminderDate: string;
}


// Definition of User Type
export interface User {
    authUserId: number;
    zId: string;
    email: string;
    password: string;
    nameFirst: string;
    nameLast: string;
    subscribed: string[];
    usedPasswords: string[];
}

export interface Db {
    users: Users[],
    societies: Societies[]
}
