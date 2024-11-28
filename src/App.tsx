import React from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img
            src="https://img.freepik.com/premium-photo/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5511.jpg"
            alt="profile_pic"
          />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">Abinaya</p>
              <p className="regular"> Web Designer</p>
            </div>
            <ul>
              {/* Corrected Font Awesome icons */}
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {/* Map Marker Icon */}
                </div>
                <div className="data">
                  {" "}
                  81e 5/1 Vasantham Nagar 1st North Malaiyadipatti
                  Rajapalayam-626117
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-phone-alt"></i> {/* Phone Icon */}
                </div>
                <div className="data">+91 9345753436</div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope"></i> {/* Email Icon */}
                </div>
                <div className="data">abisubi0012@gmail.com</div>
              </li>
            </ul>
          </div>

          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">Skills</p>
            </div>
            <ul>
              <li>
                <div className="skill_name">HTML</div>
                <div className="skill_progress">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div className="skill_per">90%</div>
              </li>
              <li>
                <div className="skill_name">CSS</div>
                <div className="skill_progress">
                  <span style={{ width: "80%" }}></span>
                </div>
                <div className="skill_per">80%</div>
              </li>
              <li>
                <div className="skill_name">C</div>
                <div className="skill_progress">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div className="skill_per">90%</div>
              </li>
              <li>
                <div className="skill_name">JavaScript</div>
                <div className="skill_progress">
                  <span style={{ width: "60%" }}></span> {/* Adjusted to 60% */}
                </div>
                <div className="skill_per">60%</div> {/* Adjusted to 60% */}
              </li>
            </ul>
          </div>

          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fab fa-github"></i> {/* GitHub Icon */}
                </div>
                <div className="data">
                  <p className="semi-bold">Github</p>
                  <p>github.com/ABINAYA0010</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>linkedin.com/in/abinaya-k-9b359a31b</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume_right">
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">CAREER OBJECTIVE:</p>
          </div>
          <p>
            A challenging role in a reputable organization to utilize my skills
            for the growth of the organization.
          </p>
        </div>

        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">PROJECTS DONE:</p>
          </div>
          <ul>
            <li>
              <div className="info">
                <p className="semi-bold">ARTS INSTITUTION OF MANAGEMENT.</p>
                <p>For college final year main project</p>
              </div>
            </li>
            <li>
              <div className="info">
                <p className="semi-bold">ANALOG DIGITAL WATCH</p>
                <p>Making frontend web design</p>
              </div>
            </li>
            <li>
              <div className="info">
                <p className="semi-bold">CANDLE ANIMATED</p>
                <p>Making frontend web design</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            <li>
              <div className="date">2021 - 2024</div>
              <div className="info">
                <p className="semi-bold">B.Com.(CA)</p>
                <p>AKD Dharmaraja Women's College, Rajapalayam</p>
                <p>Percentage: 74%</p>
              </div>
            </li>
            <li>
              <div className="date">2020-2021</div>
              <div className="info">
                <p className="semi-bold">HSC Arts Group</p>
                <p>
                  SRBAKD Dharmaraja Girls Higher Secondary School, Rajapalayam
                </p>
                <p>Percentage: 81%</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobbies</p>
          </div>
          <ul>
            <li>
              <i className="fas fa-book-reader"></i>
            </li>
            <li>
              <i className="fas fa-headphones-alt"></i>
            </li>
            <li>
              <i className="fas fa-plane"></i>
            </li>
            <li>
              <i className="fas fa-camera"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
