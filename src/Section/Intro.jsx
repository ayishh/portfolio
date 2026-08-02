import SplitText from "../components/SplitText";
import "./Intro.css";
import profileImg from "../assets/profile.jpg"; // 👈 1. IMPORT IMAGE HERE

export const Intro = () => {
  return (
    <section className="intro-container">
      {/* 👈 LEFT COLUMN (70%) */}
      <div className="intro-text-content">
        <h1 className="intro-title">
          <SplitText
            text="Hello, I'm Fariez Daniel."
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
          />
        </h1>
        <p className="intro-description">
          I'm a passionate web developer with a love for creating beautiful and
          functional websites. I specialize in front-end development and have
          experience with various web technologies.
        </p>
      </div>

      {/* 👈 RIGHT COLUMN (30%) */}
      <div className="profile-image-container">
        <img
          src={profileImg} 
          alt="Fariez Daniel"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default Intro;