import { format } from 'date-fns';

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  gallery: string[];
  fullContent?: string;
}

export const activitiesData: Activity[] = [
  {
    id: '1',
    title: 'Environmental Clean-up Drive',
    description: 'Environmental Sanitation exercise and awareness in collaboration with Kwara Ministry of Environment and Youth Climate Movement. Held at Tanke, Ilorin, Kwara State.',
    date: '2026-04-25',
    // Use only images that match the allowed naming conventions: activity*, meet[0-9]+, clean[0-9]+
      image: '/images/First.jpeg',
      gallery: [
        '/images/meet.jpeg',
        '/images/activity2.jpeg',
        '/images/three.jpeg',
        '/images/activity4.jpeg',
        '/images/activity5.jpeg',
        '/images/eight.jpeg',
        '/images/meet4.jpeg',
        '/images/two.jpeg',
        '/images/meet6.jpeg',
        '/images/five.jpeg',
        '/images/meet8.jpeg',
        '/images/meet9.jpg',
        '/images/meet10.jpg',
        '/images/clean1.jpeg',
        '/images/clean2.jpeg',
        '/images/clean3.jpeg',
        '/images/clean4.jpeg',
        '/images/one.jpeg',
        '/images/six.jpeg',
        '/images/nine.jpeg',
        '/images/four.jpeg',
        '/images/five.jpeg',
        '/images/eleven.jpeg',
        '/images/twelve.jpeg',
      ],
    fullContent: 'Our Environmental Clean-up Drive was a resounding success! In collaboration with the Kwara Ministry of Environment and Youth Climate Movement, we organized a comprehensive sanitation exercise and awareness campaign at Tanke, Ilorin.\n\nKey highlights:\n- Collected over 800kg of waste\n- Engaged 15+ community volunteers \n- Discussed with 10+ individuals in the community on environmental sanitation by vreating awareness \n\nPhotos from the event showcase the team\'s dedication and community spirit. This initiative underscores Wasture Solutions\' commitment to a cleaner Kwara State.',
  },
  {
    id: '2',
    title: 'Installation of Anaerobic Digester',
    description: 'Upcoming: Installation of our advanced anaerobic digester.',
    date: '2026-05-15',
    image: '/images/bioplant.jpg',
    gallery: ['/images/bioplant.jpg', '/images/biogas1.jpeg', '/images/biogas2.jpeg', '/images/giogasfloor.jpeg'],
    fullContent: 'The Anaerobic Digester Installation marks a milestone in sustainable waste management. This state-of-the-art facility will convert organic waste into biogas and fertilizer.\n\nProject details:\n- Capacity: 10 tons/day\n- Expected biogas output: 500m³/day\n- Serves: 2000 households\n- Partners: Local government + private investors\n\nStay tuned for the official launch and first batch of biogas production!',
  },
  {
    id: '3',
    title: 'School Awareness Tour',
    description: 'Upcoming: School Awareness Tour on environmental stewardship.',
    date: '2026-05-30',
    image: '/images/activity-3.png',
    gallery: ['/images/activity-3.png', '/images/meet.jpg', '/images/meet1.jpg'],
    fullContent: 'Preparing for our School Awareness Tour! We\'ll visit 10 schools across Ilorin to educate students on waste management, recycling, and environmental stewardship.\n\nProgram includes:\n- Interactive workshops\n- Waste sorting competitions\n- Tree planting ceremonies\n- Educational giveaways\n\nEmpowering the next generation for a sustainable future.',
  },
  {
    id: '4',
    title: 'Urban Tree Planting',
    description: 'Upcoming: Urban Tree Planting for a greener community. Within Ilorin.',
    date: '2026-06-25',
    image: '/images/activity-4.png',
    gallery: ['/images/activity-4.png'],
    fullContent: 'Join us for Urban Tree Planting! Targeting 200 trees across key locations in Ilorin.\n\nThis initiative will:\n- Improve air quality\n- Provide shade and beauty\n- Combat urban heat island effect\n- Create community green spaces\n\nVolunteers welcome! Registration opening soon.',
  },
];

export const formatActivityDate = (dateString: string) => format(new Date(dateString), 'MMM d, yyyy');

