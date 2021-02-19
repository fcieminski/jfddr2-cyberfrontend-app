import SingleProject from "./SingleProject";
import "./Projects.css";
import NewProjectBtn from "./NewProjectBtn";
import "./NewProjectBtn.css";

function Projects({ data, setData }) {
  const userProjects = data?.[0]?.board || {};
  console.log(data);
  console.log(userProjects);
  console.log(Object.keys(userProjects));

  return (
    <div>
      <div className="fav__projects">
        <h3>Favourite</h3>
        <div>
          {Object.keys(userProjects)
            .filter((project) => {
              return userProjects[project].favourite;
            })
            .map((project, key) => {
              return <SingleProject key={key} data={userProjects[project]} />;
            })}
        </div>
      </div>
      <div className="all__projects">
        <h3>All Projects</h3>
        <div className="projects-container">
          {Object.keys(userProjects).map((project, key) => {
            return <SingleProject key={key} data={userProjects[project]} />;
          })}
          <NewProjectBtn />
        </div>
      </div>
      <div className="arch__projects">
        <h3>ARCHIVE</h3>
        <div>
          {Object.keys(userProjects)
            .filter((project) => {
              return userProjects[project].archive;
            })
            .map((project, key) => {
              return <SingleProject key={key} data={userProjects[project]} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
