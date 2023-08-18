import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';

export const posts = [
  {
    id: 1,
    photo: photo1,
    title: 'Ліс',
    comments: 3,
    likes: 50,
    place: 'Ukraine',
    location: { latitude: 49.8383, longitude: 24.0232 },
  },
  {
    id: 2,
    photo: photo2,
    title: 'Захід на Чорному морі',
    comments: 8,
    likes: 20,
    place: 'Ukraine',
    location: { latitude: 46.4775, longitude: 30.7326 },
  },
  {
    id: 3,
    photo: photo3,
    title: 'Старий будиночок у Венеції',
    comments: 50,
    likes: 200,
    place: 'Italy',
    location: { latitude: 45.4371, longitude: 12.3327 },
  },
];
