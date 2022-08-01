import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className=" grid gap-6 md:grid-cols-2">
<div>
  <h5 className="my-3 text-2xl font-bold">Education</h5>
  <div>
    <h5 className="my-2 text-">Psychology / software engineering</h5>
    <p className="text-gray-400 ">Lorestan University</p>
    <p className="my-3">
    Hello ,
    I am Mohsen;
    I have been programming for a year.
    I am interested in computer and web world and I love to learn
    </p>
  </div>
</div>
<div>
  <h5 className="my-3 text-2xl font-bold">Experience</h5>
  <div>
    <h5 className="my-2 text-"> Software Engineer</h5>
    <p className="text-gray-400 ">Learning from 2021</p>
    <p className="my-3">
    Looking for a job in programming
    </p>
  </div>
</div>
</div>
      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;






