import {FunctionComponent, useEffect,useState} from 'react';


import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
     <Link href={route}>
        <a>
           <span
              className='mx-2 cursor-pointer hover:border-b-4 hover:text-green-400'
              onClick={() => setActive(name)}>
              {name}
           </span>
        </a>
     </Link>
  ) : null
}

const navbar = () => {


  const [active,setActive] = useState<string>("");

  
  const pathname = useRouter();
  useEffect(() => {
    if (pathname === '/') setActive('About')
    else if (pathname === '/projects') setActive('Projects')
    else if (pathname === '/resume') setActive('Resume')
 }, [])
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-600 text-xl border-b-4 border-green-400 md:text -2xl">{active}</span>
      <div className="text-gray-600 text-lg flex space-x-3">
      <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
       
      </div>
      
    </div>
  )
}

export default navbar