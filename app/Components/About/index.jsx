import styles from "./styles.module.scss";

const About = () => {
  const phrase =
    "Hi, I'm Gabriel, a self-taught front-end web developer. Passionate about learning new technologies and pushing boundaries, I blend design and development to create optimal user experiences. ";

  return (
    <div className={styles.description}>
      <div className={styles.container}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span className={styles.mask}>
                <span>{word}</span>
              </span>
            );
          })}
        </p>
        <p>
          My passion for design and coding fuels my love for web interaction. I
          thoroughly enjoy both the design and coding aspects of web development
        </p>
      </div>
    </div>
  );
};

export default About;
