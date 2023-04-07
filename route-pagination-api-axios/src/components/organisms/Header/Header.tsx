import { Link } from "react-router-dom";

export const Header = () => {


    return <div className={'Header'}><Link to="/">Home</Link> |  <Link to="/tasklist">Tasks</Link></div>
    
}