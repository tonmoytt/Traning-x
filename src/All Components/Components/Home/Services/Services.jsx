import React from 'react';
import "./style.css"

const services = [
    {
        img:"https://i.ibb.co/ZgdqRqC/web.png",
        title: "Training and Development",
        description: "Welcome to Our Training and Development Programs At Trainer-X Solution we are committed to empowering individuals and businesses with the skills needed to succeed in today's competitive market. Our specialized training programs in Digital Marketing and Graphics Design are designed to provide practical knowledge and hands-on experience.",
        icon: "/path-to-your-icon-1.png"
    },
    {
        img:"https://i.ibb.co/Srp2N8S/graphic.png",
        title: "Digital Marketing Training",
        description: "Our Digital Marketing Training program equips you with the tools and techniques to effectively promote products and services online. Whether you are a beginner or looking to enhance your skills, this program covers all essential aspects of digital marketing.The most Reliable way to find the right experts at the right time",
        icon: "/path-to-your-icon-2.png"
    },
    {
        img:"https://i.ibb.co/WD08Nds/degital.png",
        title: "Graphics Design Training",
        description: "Our Graphics Design Training program is tailored to help you become a proficient graphic designer. This program covers fundamental principles and advanced techniques, ensuring you can create stunning visuals for various purposes.The most Efficient way to grow your team's expertise, productivity and retention",
        icon: "/path-to-your-icon-3.png"
    }
];


const Services = () => {
    return (
        <div className="services-container text-center py-16 md:mt-[500px]">
            <h2 className="text-4xl font-bold mb-8">Our <span className='text-red-400 text-start'>Services</span> </h2>
            <div className="services-grid ">
                {services.map((service, index) => (
                    <div key={index} className="service-card bg-[#DFF9FA]">
                        <div className="service-icon">
                            <img src={service.img} alt={service.title} className=""/>
                        </div>
                        <h3 className="service-title text-[#21A1AD]">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <div className="service-arrow">
                           
                        </div>
                        <div className='text-center mt-2'>
                            <button className='bg-[#22A6B3] text-white px-2 py-1 rounded-md'>
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button id="business-button" className="business-button">Trainer-X Solution</button>
        </div>
    );
};

export default Services;