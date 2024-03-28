import { type StaticImageData } from 'next/image';
import  eventimg1 from '@/assets/eventimg1.jpeg';
import eventimg2 from '@/assets/eventimg2.jpeg'
import eventimg3 from '@/assets/eventimg3.jpeg';
import eventimg4 from '@/assets/eventimg4.jpeg';

type sporttype={
    id: Key | null | undefined;
    'img_url':StaticImageData;
    'name':string;
    'total_event':number;
    'sport':string;
}

export const sportsData: sporttype[] = [
    {
        'img_url':eventimg1,
        'name':'Scramento River Cats',
        'total_event': 48,
        'sport':'Baseball',
    },
    {
        'img_url':eventimg2,
        'name':'Las Vagas Aviators',
        'total_event': 28,
        'sport':'Baseball',
    },
    {
        'img_url':eventimg3,
        'name':'New Jersey Devils',
        'total_event': 15,
        'sport':'Ice Hockey',
    },
    {
        'img_url':eventimg4,
        'name':'Las Vegas Aviators',
        'total_event': 28,
        'sport':'Baseball',
    },
    
]