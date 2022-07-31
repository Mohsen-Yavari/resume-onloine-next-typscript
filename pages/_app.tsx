import '../styles/globals.css';

import Sidebar from "../components/sidebar";
import Navbar from '../components/navbar';
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32 ">
            <div className="col-span-12 bg-white dark:bg-dark-500 p-4 text-center lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
                <Sidebar />
            </div >
            
            <div className="col-span-12  bg-white lg:col-span-9 rounded-2xl flex flex-col dark:bg-dark-500 ">
              <Navbar />
              <Component {...pageProps} />

            </div>
      </div>
  </ThemeProvider>
  )
  
  
}

export default MyApp
