import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import internship from "../assets/img/internship.png";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-card" style={styles.card}>
              <h2 style={styles.heading}>Experience</h2>
              <div className="experience-content" style={styles.content}>
                <div className="experience-text" style={styles.text}>
                  <h4>Product Engineering Intern, Athenahealth</h4>
                  <p>Jan 2024 - July 2024</p>
                  <ul style={styles.list}>
                    <li>
                      Developed a feature to streamline communication and
                      learning processes for interns, enhancing interaction
                      between interns and management throughout the internship.{" "}
                    </li>
                    <li>
                      Leveraged React and Redux to create a dynamic and
                      responsive front-end interface, seamlessly integrated with
                      a Node.js backend and SQL database, to build a centralized
                      platform for communication and task management.
                    </li>
                    <li>
                      This platform enabled efficient coordination between new
                      interns and their mentors, providing real-time updates,
                      task assignments, and progress tracking, which
                      significantly improved the onboarding and mentoring
                      process.
                    </li>
                    <li>
                      Developed comprehensive task management and feedback
                      features, enabling real-time updates and continuous
                      feedback loops.
                    </li>
                    <li>
                      Implemented role-based access control and feedback
                      mechanisms, significantly enhancing the intern upskilling
                      process.
                    </li>
                  </ul>
                </div>
                <div className="experience-image" style={styles.imageContainer}>
                  <img
                    src={internship}
                    style={styles.image}
                    alt="Internship Experience"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

// Inline styles for the components
const styles = {
  card: {
    backgroundColor: "#af4eb4", // Black background
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#fff", // White text color for readability
    marginTop: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    paddingRight: "20px",
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    height: "40vh",
    width: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyleType: "disc", // Disc bullet points
    paddingLeft: "20px", // Indent to align bullets properly
  },
};
