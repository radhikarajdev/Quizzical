import {Link} from 'react-router-dom';

const Start = () => {
    return (
        <div className="start-container">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <Link to="/form">
                <button>Start Quiz</button>
            </Link>
        </div>
    );
}
 
export default Start;