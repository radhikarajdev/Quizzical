import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <p>Go back to home page</p>
            <Link to="/">
                <button className="home-button">Home</button>
            </Link>
        </div>
    );
}
 
export default NotFound;