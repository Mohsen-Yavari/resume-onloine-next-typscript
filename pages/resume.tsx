import {languages} from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
        {/* education */}
        <div className=" grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
              <h5 className="my-2 text-">Psychology</h5>
              <p className="text-gray-400 ">Lorestan University(2011 - 2015)</p>
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

        {/* languages */}
        <div className=" grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {
              languages.map(Language=><Bar data={Language}  key={language.name} />)
            }
          </div>
        </div>
        </div>
    </div>
  )
}

export default Resume