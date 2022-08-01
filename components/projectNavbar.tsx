import {FunctionComponent} from "react";
import {Category} from "../typs";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
  }> = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if (active === value) className += " text-green";
    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
          {value}
        </li>
      );
    };
    
    const ProjectsNavbar: FunctionComponent<{
      handlerFilterCategory: Function;
      active: string;
    }> = (props) => {
  return (
    <div className="flex space-x-3 px-3 overflow-x-auto py-3 list-none ">
        <NavItem value="all" {...props}/>
        <NavItem value="react" {...props}/>
        <NavItem value="next" {...props}/>
        <NavItem value="typescript" {...props}/>
        
    </div>
  )
}

export default ProjectsNavbar