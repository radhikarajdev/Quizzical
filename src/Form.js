import { useEffect, useState } from "react";
import Question from "./Question";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Form = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [selected, setSelected] = useState({
        answer0: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    });
    const [correct, setCorrect] = useState({
        answer0: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    })
    const [check, setCheck] = useState(false);
    const [count, setCount] = useState(0);
    const api = 'https://opentdb.com/api.php?amount=5&category=26&type=multiple'
    useEffect(() => {
        fetch(api)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(info => {
                if(info.response_code===0){
                    setIsPending(false);
                    setData(info.results);
                    const correctAnswers = info.results.reduce((acc, ques, index) => {
                        acc[`answer${index}`] = ques.correct_answer;
                        return acc;
                    }, {});
                    setCorrect(correctAnswers);
                }
                else{
                    throw Error('Invalid response code');
                }
            })
            .catch(err => setError(err))
    },[])
    const handleChange = (event) => {
        const {name, value} = event.target
        setSelected((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const questions = data.map((ques,index) => {
        return (
            <div className="question" key={index}>
                {/* {console.log(ques,index)} */}
                <Question 
                    data={ques} 
                    index={index} 
                    handleChange={handleChange} 
                    selected={selected} 
                    check={check}
                    correct={correct}
                />
                <br />
                <hr style={{ border: '1px solid #DBDEF0' }}/>
            </div>
        )
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setCheck(prev => !prev)
        for(let i=0 ; i<5 ; i++){
            if(selected[`answer${i}`]===correct[`answer${i}`]){
                setCount(prev => prev+1)
            }
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {questions}
                <br />
                <div className="buttons">
                    {!check && <button>{isPending ? "Loading..." : "Check Answer"}</button>}
                </div>
            </form>
            {
                check &&
                <div className="buttons">
                    <h3>{`You scored ${count}/5 correct answers`}</h3>
                    <Link to="/">
                        <button>Play Again</button>
                    </Link>
                </div>
            }
        </div>
    );
}
 
export default Form;