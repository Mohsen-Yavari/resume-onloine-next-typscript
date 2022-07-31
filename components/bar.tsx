import  {FunctionComponent} from "react";
import {Skill} from "../typs";

const Bar:FunctionComponent<{
    data:Skill
}> = ({data:{Icon,level,name}}) => {
  return (
    <div>bar</div>
  )
}

export default Bar