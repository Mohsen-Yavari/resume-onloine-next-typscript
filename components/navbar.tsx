import React,{useState} from 'react';
import Link from 'next-link';

const navbar = () => {

  const [activeItem,setActiveItem] = useState<string>("");
  return (
    <div>
      <span>{activeItem}</span>
      <div>
        <Link href="/">
          
        </Link>
      </div>
    </div>
  )
}

export default navbar