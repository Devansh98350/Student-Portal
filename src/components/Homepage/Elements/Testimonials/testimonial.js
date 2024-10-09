import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teastimonial.css";
import Dev from "./../../../../assests/intern/dev_anand.jpeg";
import Ankur from "./../../../../assests/intern/ankur_gour.jpeg";
import Dhyey from "./../../../../assests/intern/dhyey_swadia.jpeg";
import Harsh from "./../../../../assests/intern/harsh_suryan.jpeg";
import Hemang from "./../../../../assests/intern/hemang_vijay.jpeg";
import Kartik from "./../../../../assests/intern/kartik_prayagi.jpeg";
import Nithin from "./../../../../assests/intern/nithin_raj.jpeg";
import Priyanshu from "./../../../../assests/intern/priyanshu.jpeg";
import Thanga from "./../../../../assests/intern/thanga.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kethavath Nithin Naik ",
      title: "IIT Guwahati",
      text: "It's been an incredible journey, and I'm deeply grateful for the opportunity to be part of such an innovative organization. A huge thank you to my mentor for his invaluable guidance and support. His expertise and leadership have greatly shaped my growth throughout this internship.",
      image: Nithin,
      rating: 5,
    },
    {
      id: 2,
      name: "Hemang Vijay Borse",
      title: "IIT(ISM) Dhanbad",
      text: "IIT Academy provides a supportive and flexible work environment, making it easier to deliver projects efficiently. The mentors are responsive, leading to increased productivity. It has been a valuable learning experience for young engineers, offering growth opportunities and fostering a positive atmosphere for development.",
      image: Hemang,
      rating: 5,
    },
    {
      id: 3,
      name: "Ankur Gour",
      title: "IIIT Ranchi",
      text: "I had a great experience working at IIT Academy, receiving valuable guidance from my supervisor. They provided wise supervision and were always available to help me clear doubts on tasks I had never worked on before, which greatly enhanced my learning and development.",
      image: Ankur,
      rating: 5,
    },
    {
      id: 4,
      name: "Priyanshu Prasad",
      title: "IIIT Bhopal",
      text: "I worked as a full-stack developer at IIT Academy, gaining hands-on experience with backend technologies like Node.js and MongoDB, and frontend design using Bootstrap. The mentorship was excellent, offering valuable guidance and feedback, which ensured I had the resources needed for growth throughout the project.",
      image: Priyanshu,
      rating: 5,
    },
    {
      id: 5,
      name: "Dhyey Swadia ",
      title: "Thakur college of Engineering and Technology",
      text: "I had a great experience, gaining valuable real-life working knowledge. The mentorship was outstanding, with the mentor providing guidance and support throughout the process, making the learning journey smooth and insightful. Overall, it was an enriching experience that helped me grow professionally.",
      image: Dhyey,
      rating: 5,
    },
    {
      id: 6,
      name: "Dev anand",
      title: "Dyal singh college",
      text: "I had a fantastic experience at IIT Academy, benefiting from great senior support. I learned a lot about frontend development and improved my time management skills. Overall, everything was excellent, and I would love to join the IIT Academy team again in the future.",
      image: Dev,
      rating: 5,
    },
    {
      id: 7,
      name: "Kartik Prayagi",
      title: "G H Raisoni College of Engineering",
      text: "During my internship at IIT Academy, I gained hands-on experience in front-end development, particularly in React Native. Under the exceptional mentorship, I received valuable feedback that accelerated my learning. This collaborative environment significantly enhanced my technical skills and prepared me for future professional opportunities.",
      image: Kartik,
      rating: 5,
    },
    {
      id: 8,
      name: "Harsh Kumar Suryan",
      title: "Maharaja Surajmal Institute of Technology ",
      text: "My experience with IIT Academy was excellent. The support I received throughout the process was invaluable. The team was helpful, providing guidance and assistance when needed, making my learning experience enjoyable and effective.",
      image: Harsh,
      rating: 5,
    },
    {
      id: 9,
      name: "Thangakumaran S",
      title: "National Engineering College",
      text: "I had a great overall experience. My mentor provided excellent support, clarified all my doubts, and allowed ample time to complete the work. Their guidance made a significant difference in my learning process, ensuring I felt confident and well-prepared throughout the project. Highly recommend their mentorship!",
      image: Thanga,
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-12 bg-white rounded ">
      <div className="container mx-auto px-1 ">
        <div className="text-center p-4">
          <h2 className="text-3xl md:text-4xl font-bold font-spline text-[#2B383D]">
            Hear From Our Interns
          </h2>
        </div>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id} // Ensure unique key for each item
              className="testimonial-card p-4 xl:p-12 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }} // Use id for delay
            >
              <div className="flex flex-col  justify-between lg:h-[550px] xl:h-[500px] text-center  bg-sky-200 shadow-lg rounded-lg border border-gray-200 transition duration-300 transform hover:scale-105 px-4 py-12">
                <div className="flex flex-col gap-[2%]">
                  <img
                    className="w-16 h-16 mx-auto mb-4 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-spline mb-2">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-700 font-spline mb-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
