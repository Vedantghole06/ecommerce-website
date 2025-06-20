import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <div className="about-container"> 

      {/* Our Vision Section */}
      <section className="about-section about-vision text-center">
        <img
          alt="Scenic view representing Two Brothers Organic Farms vision"
          className="vision-photo"
          src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" // Adjusted params
        />
        <h2 className="section-title">Our Vision</h2>
        <p className="section-subtitle">
          What started as a journey to return to their village and take up farming full-time,
          with a vision to fight the good fight, today the Two Brothers Organic Farms is a
          biodiverse, self-sustaining food system, certified by ECOCERT, located in Bhodani village, Maharashtra.
        </p>
        <p className="section-subtitle">
          Our work is inspired by the simplicity and stillness of the village life and guided
          by principles of Regenerative Agriculture. While securing Rural livelihoods and employment,
          we harness the power of Community to offer solutions to Public Health and Climate Change.
        </p>
      </section>

      {/* Founding Farmers Section */}
      <section className="about-section about-founders">
        <h2 className="section-title text-center">Founding Farmers</h2>
        <div className="founders-grid"> 
          <div className="founder-card text-center">
            <img
              alt="Ajinkya Hange"
              className="profile-photo" 
              src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop" // Adjusted params
            />
            <h3 className="profile-name">AJINKYA HANGE</h3>
            <p className="profile-bio">
              Farmers son Ajinkya is a graduate in computer science and has done his MBA from Indira College Pune.
              He has worked in the banking sector for almost 4 years with companies like HDFC and HSBC.
              Ajinkya oversees the farms daily operations and is the Co-founding farmer at Two Brothers Organic Farm.
            </p>
          </div>
          <div className="founder-card text-center"> 
            <img
              alt="Satyajit Hange"
              className="profile-photo" 
              src="https://images.pexels.com/photos/1245055/pexels-photo-1245055.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop" // Adjusted params
            />
            <h3 className="profile-name">SATYAJIT HANGE</h3>
            <p className="profile-bio">
              Farmers son Satyajit is a graduate in Economics and has done his MBA from Pune.
              He has worked in the banking sector for a decade in companies like Kotak Life Insurance, Citicorp Finance and DBS.
              Satyajit oversees the farm operations with Ajinkya and is also the Co-founding farmer at Two Brothers Organic Farm.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section about-team">
        <h2 className="section-title text-center">The Team</h2>
        <div className="team-grid"> 
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card text-center"> 
              <img
                alt={member.name}
                className="profile-photo" 
                src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=250`}
              />
              <h3 className="profile-name">{member.name}</h3>
              <p className="profile-position">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Dummy data for team members 
const teamMembers = [
  {
    name: 'Yash Maheshwari',
    position: 'AVP Revenue',
    image: null 
  },
  {
    name: 'Kapil Varghal',
    position: 'Manager - Offline Sales',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop'
  },
  {
    name: 'Shiva Chandra Nishtala',
    position: 'Team Lead - Customer Delight',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop'
  },
  {
    name: 'Priya Sharma',
    position: 'Marketing Specialist',
    image: null 
  },
  {
    name: 'Anand Kumar',
    position: 'Farm Operations Lead',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&fit=crop'
  },
  {
    name: 'Sunita Patil',
    position: 'Quality Assurance',
    image: null 
  },
  // Add more team members as needed
];

export default About;
