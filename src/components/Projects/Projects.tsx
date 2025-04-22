import './Projects.scss';

const projects = [
  {
    title: 'Christmas Shop',
    description: 'An online store built with vanilla JavaScript and Sass.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: 'src/assets/img/christmas-shop.jpg',
    github: 'https://github.com/chebannich/christmas-shop',
    demo: 'https://chebannich.github.io/christmas-shop/',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.title} className="projects__card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="projects__links">
                <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;