import { Outlet } from "react-router-dom";


export const  MainBody = () => {

 
        return (
          <div>
           <p>THIS IS THE SHARED BODY</p>
           <hr></hr>
            <Outlet />
          </div>
        );
      
}