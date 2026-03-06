import { CFCEvent } from './types';

export const events: CFCEvent[] = [
    {
        id: 'hackathon-ss26',
        title: 'CFC Summer Hackathon 2026',
        date: '2026-04-18',
        time: '10:00 - 22:00',
        location: 'TUM Garching, MW Building',
        description: 'Our annual 12-hour hackathon where teams of students build prototypes for real NGO challenges. Three NGO partners will pitch their problems, and teams compete to deliver the most impactful solution. Prizes, food, and great vibes included.',
        type: 'Hackathon',
        isUpcoming: true,
    },
    {
        id: 'workshop-git',
        title: 'Git & GitHub Workshop for Beginners',
        date: '2025-11-15',
        time: '14:00 - 17:00',
        location: 'LMU Oettingenstrasse, Room 150',
        description: 'A hands-on workshop covering the essentials of Git version control and collaborative development on GitHub. Perfect for new members looking to get up to speed before joining a project team.',
        type: 'Workshop',
        isUpcoming: false,
    },
    {
        id: 'info-session-ws25',
        title: 'CFC Winter Semester Info Session',
        date: '2025-10-20',
        time: '18:00 - 19:30',
        location: 'TUM Main Campus, Room 0606',
        description: 'Learn everything about Coding for Change: who we are, what we do, and how you can get involved. Meet current members, hear about ongoing projects, and find out how to apply for the upcoming semester.',
        type: 'Info-session',
        isUpcoming: false,
    },
];
