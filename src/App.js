import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/khushi1234' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/khushi1234' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/khushi1234' },
  { icon: <FaMedium />, url: 'https://medium.com/@khushi1234' },
];

const sections = {
  section: 'bg-gradient-to-br from-slate-900 to-cyan-800 text-white min-h-screen p-8 flex flex-col md:flex-row',
  left: 'md:w-3/4 flex flex-col gap-8',
  right: 'md:w-1/4 flex flex-col items-center justify-start p-4 gap-6',
  card: 'bg-white bg-opacity-10 rounded-2xl p-6 shadow-md hover:shadow-lg backdrop-blur-md transition duration-300',
  heading: 'text-3xl font-bold text-cyan-400 mb-2',
  subheading: 'text-xl font-semibold text-white',
  text: 'text-white text-base',
  iconStyle: 'text-3xl text-white hover:text-cyan-400 transition duration-300',
  profilePic: 'rounded-full w-40 h-40 object-cover border-4 border-cyan-400',
};

const App = () => {
  return (
    <div className={sections.section}>
      {/* Left Section */}
      <div className={sections.left}>
        {/* Header with Profile Pic */}
        <div className="flex items-center gap-6">
          <img
            src="https://i.ibb.co/hFMqgXQH/my-pic-sundar.jpg"
            alt="Profile"
            className={sections.profilePic}
          />
          <div>
            <h1 className="text-5xl font-bold text-cyan-400">Khushi</h1>
            <p className="text-lg text-white mt-2">Aspiring Software Developer & Tech Enthusiast</p>
          </div>
        </div>

        {/* About Me */}
        <motion.div className={sections.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className={sections.heading}>About Me</h2>
          <p className={sections.text}>
            I’m currently pursuing my B.Tech in Computer Science from SRM Institute of Science and Technology with a CGPA of 9.08. Passionate about building user-centric web apps, exploring machine learning, and contributing to social impact through technology.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className={sections.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <h2 className={sections.heading}>Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white">
            <li>React.js, Tailwind CSS</li>
            <li>JavaScript, HTML, CSS</li>
            <li>C++, DSA, OOP</li>
            <li>Python, MATLAB</li>
            <li>MySQL, Git & GitHub</li>
            <li>Figma, Streamlit</li>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div className={sections.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className={sections.heading}>Experience</h2>
          <p className={sections.subheading}>Coding Ninjas @ SRMIST</p>
          <p className={sections.text}>Web Developer (Sep 2023 – May 2024)</p>
          <p className={sections.text}>Built responsive websites using HTML, CSS, React.js, and JavaScript.</p>
          <br />
          <p className={sections.subheading}>Safe Your Web</p>
          <p className={sections.text}>Frontend Developer Intern (Sep 2024 – Oct 2024)</p>
          <p className={sections.text}>Designed and built high-performance websites using Figma, React.js, and Tailwind CSS.</p>
        </motion.div>

        {/* Projects */}
        <motion.div className={sections.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className={sections.heading}>Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <img src="https://i.ibb.co/jvLPjmf1/Screenshot-2025-03-25-185845.png" alt="Credit Card Validator" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-cyan-300">Credit Card Transaction Validator</h3>
              <p className={sections.text}>Used Streamlit and Random Forest for real-time fraud detection and transaction analysis.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <img src="https://pathanamthittamedia.com/wp-content/uploads/2024/07/DOCTOR-SYM-1.jpg" alt="Doctor's Diary" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-cyan-300">Doctor’s Diary (Ongoing)</h3>
              <p className={sections.text}>Medical AI Transcription model and frontend in progress for enhancing consultation efficiency.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
            <a href="https://khushiy215.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/V0tqMpFh/Screenshot-2025-03-25-193815.png" alt="Tic Tac Toe" className="rounded-lg mb-2" /></a>              <h3 className="text-lg font-semibold text-cyan-300">Tic Tac Toe</h3>
              <p className={sections.text}>Developed a classic Tic-Tac-Toe game with an interactive UI, allowing two players to compete in a seamless experience. Implemented game logic to detect wins, draws, and real-time updates. Designed with a responsive layout for smooth gameplay across devices.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
            <a href="https://khushiy215.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/xqsqRdn6/Screenshot-2025-03-25-194536.png" alt="Weather App" className="rounded-lg mb-2" /></a>              <h3 className="text-lg font-semibold text-cyan-300">Weather App</h3>
              <p className={sections.text}>Developed a dynamic weather application using JavaScript that fetches real-time weather data based on user input. Integrated an API to display temperature, humidity, and weather conditions. The background image dynamically changes based on the weather, enhancing the user experience with a visually immersive interface.</p>
            </div>
          </div>
        </motion.div>

        {/* Co-curricular Activities */}
        <motion.div className={sections.card} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className={sections.heading}>Co-Curricular Activities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
            <a href="https://www.instagram.com/p/C_hXHhyTV5_/?hl=en&img_index=1" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/4R7hfQ4L/Screenshot-2025-03-25-190517.png" alt="District Lead" className="rounded-lg mb-2" /></a>              <h3 className="text-lg font-semibold text-cyan-300">District Lead - Aashraya NGO</h3>
              <p className={sections.text}>Leading ground-level impact initiatives, organizing events, and mentoring volunteers across the district. Handling operations and outreach with efficiency and empathy.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <img src="https://i.ibb.co/XxsxfMpj/poet.jpg" alt="Poetry" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-cyan-300">Poet</h3>
              <p className={sections.text}>Writing emotionally resonant poems exploring identity, society, and personal reflection.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <img src="https://i.ibb.co/Pvg5X8gh/Screenshot-2025-03-25-204821.png" alt="Content Writing" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-cyan-300">Content Writer - Aashraya NGO</h3>
              <p className={sections.text}>Creating blog posts, social media content, and event writeups. Capturing the impact of initiatives through storytelling and strategic communication.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl">
              <img src="https://i.ibb.co/1fqJZQRT/aashrayaid.jpg" alt="Volunteer" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-cyan-300">Volunteer Leader</h3>
              <p className={sections.text}>Led and coordinated food drives, educational workshops, and awareness campaigns. Ensured smooth execution and strong community participation.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className={sections.right}>
        <div className="flex flex-col items-center gap-4">
  <h2 className="text-2xl font-bold text-cyan-400 mb-2">Socials</h2>
<div className="flex flex-col gap-4 w-full items-start">
  <a href="https://github.com/KhushiY215" target="_blank" rel="noopener noreferrer" className="text-white text-[2.5rem] hover:text-cyan-400 transition duration-300">
    <FaGithub />
  </a>
  <a href="http://linkedin.com/in/khushi-yadav-31997b267" target="_blank" rel="noopener noreferrer" className="text-white text-[2.5rem] hover:text-cyan-400 transition duration-300">
    <FaLinkedin />
  </a>
  <a href="https://medium.com/@khushigenai24" target="_blank" rel="noopener noreferrer" className="text-white text-[2.5rem] hover:text-cyan-400 transition duration-300">
    <FaMedium />
  </a>
  <a href="https://www.instagram.com/ad_meliora_k" target="_blank" rel="noopener noreferrer" className="text-white text-[2.5rem] hover:text-cyan-400 transition duration-300">
    <FaInstagram />
  </a>
</div>
</div>
</div>
      </div>
  
  );
};

export default App;
