import React from 'react';
import { FaChartLine, FaGraduationCap, FaChalkboardTeacher, FaSeedling, FaLaptopCode, FaRunning, FaLanguage, FaServer, FaBoxOpen, } from 'react-icons/fa';
import "./style.css"

const services = [
    { icon: <FaGraduationCap />, title: "Online Technology Training", backContent: "Empowering your career journey with expert-led online training in programming, digital marketing, and UI/UX design. Take the next step towards your professional goals with our comprehensive courses." },
    { icon: <FaChalkboardTeacher />, title: "On-Site/Offline Technology Training", backContent: "Elevate your team's skills with our on-site/offline technology training. Tailored sessions delivered at your location for a hands-on learning experience." },
    { icon: <FaSeedling />, title: "Student Attendance with AI Features", backContent: "Revolutionize school management with our AI-powered student attendance solution. Streamline processes and enhance accuracy with cutting-edge technology", link: "#" },
    { icon: <FaBoxOpen />, title: "GovTax Collect - Government tax collection system", backContent: "Facilitating seamless tax collection for property and business holdings, our GovTax Collect system ensures efficient compliance with government regulations, simplifying the tax payment process.", link: "#" },
    { icon: <FaLaptopCode />, title: "Trainer-X Developed Ecommerce Rent Blog Service Education Gym", backContent: "Trainer-X specializes in developing a diverse range of websites, spanning ecommerce, rental, blogging, service-based, educational, and fitness platforms. Elevate your online presence with our tailored solutions.", link: "#" },
    { icon: <FaChartLine />, title: "Digital Marketing and Social Media Marketing", backContent: "Empowering businesses through comprehensive digital marketing training and strategic agency services. From hands-on learning to expert campaign management, we drive results in the digital realm.", link: "#" },
    { icon: <FaLanguage />, title: "Translator and Localization Services", backContent: "Unlock global opportunities with our trusted translator and localization services. Whether you need expert translation for interviews abroad or seamless communication with online clients, count on us for reliable and convenient solutions." },
    { icon: <FaServer />, title: "Domain Registration", backContent: "We provide comprehensive web solutions, including domain registration, hosting services, and a suite of training and technology solutions, tailored to meet your business needs and goals." },
    
];

const Services2 = () => {
    return (
        <div className="services-wrapper">
        <div className="services-header">
            <h1 className="services-heading">What we deliver.</h1>
        </div>
        <div className="services-containers">
            {services.map((service, index) => (
                <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                        </div>
                        <div className="flip-card-back">
                            <a href={service.link} className="read-more">{service.backContent}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Services2;