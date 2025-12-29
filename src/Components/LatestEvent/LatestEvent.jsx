import React from 'react';
import EventCard from './EventCard';
import './LatestEvent.css';
import event_1 from '../../assets/event_1.png'
import event_2 from '../../assets/event_2.png'
import event_3 from '../../assets/event_3.png'
import event_4 from '../../assets/event_4.png'

// You can move this data to a separate file if needed
const eventsData = [
    {
        imgSrc: event_1,
        title: 'Happy Holidays From Super Sense',
        description: 'Lincoln School wishes our entire community a wonderful winter break and a happy New Year. May this time bring rest, connection, and joy. Registration of Interest Register Application of Admission Apply Other inquiries Contact Us...'
    },
    {
        imgSrc: event_2,
        title: 'Sprinkles, Smiles, and Sweet Semester Celebrations',
        description: 'Grade 1 and Grade 2 brought the sprinkles of joy to our cookie decorating party! Each student received two cookies to decorate with frosting and toppings. Our collaborative creations were a tasty way to celebrate the end of our first semester and the'
    },
    {
        imgSrc: event_3,
        title: 'A Mural of Meaningful Connection',
        description: 'The Artful Balance Connect Club partnered with Lalit Kaylan Kendra Basic School, to create a colorful mural on their campus. Using art as their language, they connected with the community, shared cultures, and supported the school by providing resour...'
    },
    {
        imgSrc: event_4,
        title: 'Spotlight on Growth: MS Drama Takes the Stage',
        description: 'From lost toys to job interviews to fighting in the Himalayas – our MS Drama students delivered it all! Grades 6-8 were onstage this week, sharing meaningful reflections on their growth as performers and creators. The students demonstrated cour...'
    }
];

const LatestEvent = () => {
    return (
        <div className='news-container events' >
            <div className="latest-events">
                {eventsData.map((event, index) => (
                    <EventCard
                        key={index}
                        imgSrc={event.imgSrc}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </div>
            <div className="latest-events-btn">
                <button className="view-all-btn">View All</button>
            </div>
        </div>
    );
};

export default LatestEvent;
