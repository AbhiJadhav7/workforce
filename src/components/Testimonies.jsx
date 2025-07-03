import React from 'react';
import { Carousel } from 'primereact/carousel';

export default function Testimonies() {
    const testimonials = [
        {
            message: 'I got admission to a top university in Australia with full support from the team. They helped with SOP writing, documents, and even post-arrival tips!',
            name: 'Priya Malhotra',
            location: 'Pune (Study Abroad – Australia)'
        },
        {
            message: 'Amazing service! I received my Canadian PR through their Express Entry guidance. The documentation and points calculation were handled professionally.',
            name: 'Rahul S.',
            location: 'Mumbai (Migration – Canada PR)'
        },
        {
            message: 'Thanks to their recruitment team, I now work in a 4-star hotel in Dubai. The visa process was smooth, and everything was done legally with full transparency.',
            name: 'Sandeep Kumar',
            location: 'Patiala (Jobs Abroad – UAE Hospitality)'
        },
        {
            message: 'I was confused about which country to choose for my master’s. Their counseling sessions helped me decide and apply to universities in the UK. Got my visa in 3 weeks!',
            name: 'Aarti R.',
            location: 'Bengaluru (Study Abroad – UK)'
        },
        {
            message: 'I applied for a Job Seeker Visa to Germany through them. They guided me step-by-step and even reviewed my CV and LinkedIn profile to match German standards.',
            name: 'Mohammed Faizan',
            location: 'Hyderabad (Migration – Germany)'
        },
        {
            message: 'After 4 months of job search, I finally found a trusted agency through them. Now working in Poland with a work permit and proper contract. Highly recommend!',
            name: 'Jitendra Yadav',
            location: 'Varanasi (Jobs Abroad – Europe)'
        },
        {
            message: 'They’re more than just consultants. They followed up even after I reached New Zealand to make sure I settled well. Really rare support.',
            name: 'Simran B.',
            location: 'Chandigarh (Study Abroad – New Zealand)'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const testimonialTemplate = (item) => {
        return (
            <div className="cardBox border-1 surface-border border-round m-3 p-4 text-center shadow-2">
                <p className="italic text-lg text-gray-700">"{item.message}"</p>
                <h4 className="mt-4 text-md font-semibold text-gray-900">– {item.name}</h4>
                <p className="text-sm text-gray-500">{item.location}</p>
            </div>
        );
    };

    return (
        <div className="card">
            <p style={{textAlign:"center",fontSize:"1.5rem"}}>Real Experiences from Students, Migrants & Workers We Helped Globally</p>
            <br /><div className="w-full flex justify-center" style={{height:"300px"}}>

            <Carousel
                value={testimonials}
                numVisible={3}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={testimonialTemplate}
                circular
                autoplayInterval={5000}
            /></div>
        </div>
    );
}
