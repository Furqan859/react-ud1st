import react from "react"
import {dumpLogs} from './utils';

const BlogCrad = (props) => {
    dumpLogs(props)
    
    return(
        <div className="blogsCard">
        <h3>{props.title}</h3>
        <span>{props.description}</span>
        <h4>{props.product}</h4>
        <span>{props.price}</span>
      </div>
    )
}
export default BlogCrad