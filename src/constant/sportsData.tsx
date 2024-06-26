import { type StaticImageData } from 'next/image';
import  eventimg1 from '@/assets/eventimg1.jpeg';
import eventimg2 from '@/assets/eventimg2.jpeg'
import eventimg3 from '@/assets/eventimg3.jpeg';
import eventimg4 from '@/assets/eventimg4.jpeg';

type sporttype={
    'id':number;
    'img_url':StaticImageData;
    'name':string;
    'total_event':number;
    'sport':string;
}

export const sportsData: sporttype[] = [
    {
        'id':1,
        'img_url':eventimg1,
        'name':'Scramento River Cats',
        'total_event': 48,
        'sport':'Baseball',
    },
    {
        'id':2,
        'img_url':eventimg2,
        'name':'Las Vagas Aviators',
        'total_event': 28,
        'sport':'Baseball',
    },
    {
        'id':3,
        'img_url':eventimg3,
        'name':'New Jersey Devils',
        'total_event': 15,
        'sport':'Ice Hockey',
    },
    {
        'id':4,
        'img_url':eventimg4,
        'name':'Las Vegas Aviators',
        'total_event': 28,
        'sport':'Baseball',
    },
    
]