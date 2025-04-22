import './Skills.scss';

const Skills = () => {

  const skills = {
    Core: ['HTML5', 'CSS', 'JavaScript', 'TypeScript'],
    Tools: ['Git', 'GitHub', 'NPM', 'Webpack', 'Vite'],
    Styling: ['Sass', 'Tailwind', 'BEM'],
    'Code Quality': ['Prettier', 'ESLint'],
    Libraries: ['React'],
    Design: ['Figma'],
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__categories">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3>{category}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;