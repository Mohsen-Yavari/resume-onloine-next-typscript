import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../typs";
const index = () => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
    <h6 className="my-3 text-base font-medium">
    Hello ,
    I am Mohsen;
    I have been programming for a year.
    I am interested in computer and web world and I love to learn
    </h6>
    <div
      className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
    >
      <h4 className="my-3 text-xl font-semibold tracking-wide">
        What I am doing
      </h4>
      

      <div className="grid gap-6 my-3 md:grid-cols-2">
    
        {services.map((service) => (
          <div
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
            key={service.title}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
};
    
  

export default index


// export const getServerSideProps = async (context:getServerSideContext) => {

// const res = await fetch("http://localhost:3000/api/services")
// const data = await res.json()

// return {
//   props:{
//     services: data.services
//   }
// }

// }