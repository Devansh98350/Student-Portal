import React, { useEffect } from "react";
import Layout from "../Layout";
import ApplicationBox from "./Elements/Box/ApplicationBox";

import frontendImg from "../../assests/Internship/frontend.jpeg";
import fullstackImg from "../../assests/Internship/full-stack-development.gif";
import pythonImg from "../../assests/Internship/python.jpeg";
import javaImg from "../../assests/Internship/java.jpg";
import mlImg from "../../assests/Internship/ML.jpeg";
import androidImg from "../../assests/Internship/andrid.gif";
import uiuxImg from "../../assests/Internship/uxui.jpg";
import aiImg from "../../assests/Internship/AI.jpg";
import dsImg from "../../assests/Internship/DS.jpg";
import cppImg from "../../assests/Internship/cpp.jpeg";
import daImg from "../../assests/Internship/DA.jpeg";
import cyberImg from "../../assests/Internship/cyber.jpeg";
import cloudImg from "../../assests/Internship/cloud.gif";
import transferImg from "../../assests/Internship/t.jpeg";
import marketingImg from "../../assests/Internship/marketing.jpeg";
import designImg from "../../assests/Internship/design.jpeg";
import hrImg from "../../assests/Internship/HR.jpeg";

const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Internships">
      <div>
        <h1 className="head">Technical Domain</h1>
        <div className="application-boxes">
          <ApplicationBox
            imageSrc={frontendImg}
            heading="Frontend Web Development"
            content="Embark on a transformative journey into the world of frontend development with our immersive internship program.From the convenience of your home, dive deep into the essentials of crafting captivating user experiences using HTML, CSS, and JavaScript.Unlock the secrets of responsive design and delve into modern frameworks like React.js and Vue.js."
            domain="/internship-description/frontend-devlopment-intern"
          />
          <ApplicationBox
            imageSrc={fullstackImg}
            heading="Full Stack Web Development"
            content="Experience the best of both worlds with our intensive full-stack web development internship program.From the comfort of your home, delve into the dynamic realm of full-stack development, mastering the fusion of frontend and backend technologies.Learn to architect seamless user interfaces with HTML, CSS, and JavaScript, while also diving deep into Node.js, or other languages."
            domain="/internship-description/full-stack-devlopment-intern"
          />
          <ApplicationBox
            imageSrc={pythonImg}
            heading="Python Development"
            content="Join our comprehensive internship program and master the fundamentals of programming in Python from the comfort of your own home.Gain the skills and knowledge to apply for exciting job opportunities in the field. In this program, you will learn everything from web development to the deployment of Python-based web applications.Get certified."
            domain="/internship-description/python-devlopment-intern"
          />
        </div>

        <div className="application-boxes">
          <ApplicationBox
            imageSrc={javaImg}
            heading="Java Development"
            content="Embark on a transformative journey into the world of Java development with our comprehensive internship program. From the comfort of your own home, immerse yourself in the power and versatility of the Java programming language. Explore Java frameworks like Spring and Hibernate, and learn to leverage their capabilities to build enterprise-grade software solutions.Get certified."
            domain="/internship-description/java-developer-intern"
          />
          <ApplicationBox
            imageSrc={mlImg}
            heading="Machine Learning"
            content="Become a machine learning expert from the comfort of your home and open doors to exciting career opportunities with our certification program. Enroll in our extensive internship, where you'll delve into every aspect of machine learning, from foundational concepts to advanced techniques. Develop a strong skill set through practical, hands-on training and real-world applications in a collaborative and supportive setting."
            domain="/internship-description/machine-learning-intern"
          />
          <ApplicationBox
            imageSrc={androidImg}
            heading="Android Development"
            content="Master Android development from the convenience of your home and seize thrilling career prospects with our certification program. Join our comprehensive internship, where you'll immerse yourself in the intricacies of crafting dynamic mobile applications for the Android platform. Build a robust foundation for your career with hands-on training and real-world projects in a collaborative, supportive environment."
            domain="/internship-description/android-developer-intern"
          />
        </div>

        <div className="application-boxes">
          <ApplicationBox
            imageSrc={uiuxImg}
            heading="UI/UX Design"
            content="Embark on a transformative journey into UI/UX design from the comfort of your own home and open doors to exciting career opportunities with our certification program. Join our comprehensive internship, where you'll explore every aspect of UI/UX design, from fundamental principles to advanced techniques. Develop a solid skill set through practical, hands-on training and real-world applications in a collaborative and supportive environment."
            domain="/internship-description/ui-ux-design-intern"
          />
          <ApplicationBox
            imageSrc={aiImg}
            heading="Artificial Intelligence"
            content="Master the art of Artificial Intelligence from the comfort of your home and unlock limitless career opportunities with our certification program. Enroll in our extensive internship, where you'll delve into every facet of AI, from fundamental concepts to advanced applications. Develop a robust skill set through practical, hands-on training and real-world projects in a supportive and collaborative environment.Get certified in Artificial Intelligence"
            domain="/internship-description/artificial-intelligence-intern"
          />
          <ApplicationBox
            imageSrc={dsImg}
            heading="Data Science"
            content="Become a Data Science expert from the comfort of your own home and unlock promising career prospects with our certification program. Enroll in our comprehensive internship program, where you'll immerse yourself in every aspect of Data Science, from foundational concepts to practical applications. Develop a strong foundation for your career through hands-on training and real-world projects in a supportive, collaborative environment."
            domain="/internship-description/data-science-intern"
          />
        </div>

        <div className="application-boxes">
          <ApplicationBox
            imageSrc={cppImg}
            heading="C++ Programming"
            content="Become a C++ programming expert from the comfort of your own home and unlock promising career opportunities with our certification program. Enroll in our comprehensive internship, where you'll delve into every aspect of C++ programming, from basic concepts to advanced techniques. Develop a strong foundation for your career through hands-on training and real-world projects."
            domain="/internship-description/c++programming-intern"
          />
          <ApplicationBox
            imageSrc={daImg}
            heading="Data Analytics"
            content="Join our comprehensive internship program and become proficient in Data Analytics from the comfort of your own home. Acquire the skills and knowledge necessary to pursue exciting job opportunities in this rapidly growing field. Throughout the program, you'll delve into various aspects of data analysis, including data interpretation, statistical modeling, and machine learning techniques."
            domain="/internship-description/data-analytics-intern"
          />
          <ApplicationBox
            imageSrc={cyberImg}
            heading="Cyber Security"
            content="Join our immersive internship program and become a skilled Cyber Security professional from the convenience of your own home. Acquire the essential skills and knowledge to pursue exciting career opportunities in this critical field. Throughout the program, you'll delve into a wide range of topics, including network security, cryptography, ethical hacking, and risk management."
            domain="/internship-description/cyber-security-intern"
          />
        </div>

        <div className="application-boxes">
          <ApplicationBox
            imageSrc={cloudImg}
            heading="Cloud Computing"
            content="Master the intricacies of Cloud Computing from the comfort of your own home and unlock boundless career opportunities with our certification program. Enroll in our comprehensive internship, where you'll delve into every facet of Cloud Computing, from foundational concepts to advanced deployment techniques. Develop a robust foundation for your career through hands-on training and real-world application in a supportive and collaborative environment."
            domain="/internship-description/cloud-computing-intern"
          />
          <ApplicationBox
            imageSrc={transferImg}
            heading="Transfer Learning"
            content="Become proficient in Transfer Learning from the comfort of your own home and unlock a world of exciting career opportunities with our certification program. Join our comprehensive internship program, where you'll explore the depths of Transfer Learning, from fundamental concepts to advanced methodologies. Build a solid foundation for your career through hands-on training and real-world application in a supportive and collaborative environment."
            domain="/internship-description/transfer-learning-intern"
          />
        </div>

        <h1 className="head">Non-Technical Domain</h1>
        <div className="application-boxes">
          <ApplicationBox
            imageSrc={marketingImg}
            heading="Digital Marketing"
            content="Become a Digital Marketing expert from the comfort of your own home and unlock a world of exciting career opportunities with our certification program. Join our comprehensive internship, where you'll explore every aspect of Digital Marketing, from foundational principles to advanced strategies. Build a solid foundation for your career through hands-on training and real-world application in a supportive and collaborative environment."
            domain="/internship-description/digital-marketing-intern"
          />
          <ApplicationBox
            imageSrc={designImg}
            heading="Graphic Designer"
            content="Embark on a journey to become a skilled Graphic Designer from the comfort of your own home and unlock a realm of creative career opportunities with our certification program. Join our comprehensive internship, where you'll immerse yourself in the art and science of graphic design. Build a strong foundation for your career through hands-on training and real-world application in a supportive and collaborative environment."
            domain="/internship-description/graphic-design-intern"
          />
          <ApplicationBox
            imageSrc={hrImg}
            heading="Human Resources(HR)"
            content="Become a skilled Human Resources (HR) professional from the comfort of your own home and unlock a myriad of rewarding career opportunities with our certification program. Join our comprehensive internship, where you'll immerse yourself in the dynamic field of HR. Build a solid foundation for your career through hands-on training and real-world application in a supportive and collaborative environment.Get certified."
            domain="/internship-description/human-resources-intern"
          />
        </div>
        <div className="application-boxes">
          <ApplicationBox
            imageSrc={marketingImg}
            heading="Web Content Writer"
            content="Dive into the world of content creation as a Web Content Writer from the comfort of your home and unlock a host of writing career opportunities with our certification program. Join our comprehensive internship, where you'll master the art of crafting engaging and SEO-friendly content for digital platforms. Build a strong foundation for your career through hands-on training and real-world application in a supportive and collaborative environment."
            domain="/internship-description/web-content-writer-intern"
          />
          <ApplicationBox
            imageSrc={designImg}
            heading="Social Media Co-ordinator"
            content="Step into the exciting world of social media as a Social Media Coordinator from the comfort of your home and explore endless career opportunities with our certification program. Join our comprehensive internship, where you'll learn to manage social media platforms, develop strategies, and create engaging content. Build a solid foundation for your career through hands-on training and real-world application in a collaborative environment."
            domain="/internship-description/social-media-coordinator-intern"
          />
          <ApplicationBox
            imageSrc={hrImg}
            heading="SEO Analyst"
            content="Become an expert in search engine optimization (SEO) as an SEO Analyst from the comfort of your home and discover exciting career prospects with our certification program. Join our comprehensive internship, where you'll dive deep into SEO strategies, tools, and best practices to improve website rankings and visibility. Build a solid foundation for your career through hands-on training and real-world application in a supportive environment."
            domain="/internship-description/seo-analyst-intern"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Internship;
