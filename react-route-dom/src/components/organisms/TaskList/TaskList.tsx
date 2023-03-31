import {
    Routes,
    Route,
    Outlet,
    Link,
    useSearchParams,
    useParams,
  } from "react-router-dom";


export const TaskList = () => {


    return <>
    <div><ul>

<li><Link to="/taskdetail/1">Task 1</Link></li>
<li><Link to="/taskdetail/2">Task 2</Link></li>
<li><Link to="/taskdetail/3">Task 3</Link></li>
        </ul>
    </div>
   </>
}