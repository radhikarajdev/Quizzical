// import { useEffect, useState } from "react";

// const Question = (props) => {
//     // const [style, setStyle] = useState("");
//     const shuffleArray = (array) => {
//         return array.sort(() => Math.random() - 0.5);
//       };
//     const [allAnswers, setAllAnswers] = useState([]);
//     useEffect(()=>{
//         setAllAnswers(shuffleArray([
//                 ...props.data.incorrect_answers,
//                 props.data.correct_answer
//               ]))
//     },[props.data])
//     let x = `answer${props.index}`
//     // const color = (ans) => {
//     //     if(props.checked){
//     //         if(ans === props.selected[x]){
//     //             if(ans === props.correct[x]){
//     //                 setStyle("correct")
//     //             }
//     //             else{
//     //                 setStyle("incorrect")
//     //             }
//     //         }
//     //         else{
//     //             setStyle("others")
//     //         }
//     //     }
//     //     else{
//     //         setStyle("label")
//     //     }
//     // }
    
//     return (
//         <div>
//             <h3 className="ques">{props.data.question}</h3>
//             <br />
//             <div className="all-inputs">
//                 {allAnswers.map((ans,index)=>(
//                     <div key={index}>
//                         <input
//                             type="radio"
//                             id={ans}
//                             name={x}
//                             value={ans}
//                             onChange={(e)=>props.handleChange(e)}
//                             checked={ans === props.selected[x]}
//                             className="radio"
//                         />
//                         {/* {()=> color(ans)} */}
//                         <label className="label" htmlFor={ans}>{ans}</label>
//                     </div>
//                     )
//                 )}
//             </div>
//         </div>
        
//     );
// }
 
// export default Question;







import { useEffect, useState } from "react";

const Question = (props) => {
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5); // Clone the array before shuffling to avoid side effects
    };

    const [allAnswers, setAllAnswers] = useState([]);

    useEffect(() => {
        setAllAnswers(shuffleArray([
            ...props.data.incorrect_answers,
            props.data.correct_answer
        ]));
    }, [props.data]);

    let x = `answer${props.index}`;

    const getLabelClass = (ans) => {
        if (props.check) {
            if (ans === props.selected[x]) {
                if(ans === props.data.correct_answer) {
                    return "correct";
                }
                else{
                    console.log("incorrect")
                    return "incorrect";
                }
            }
            else{
                if(ans === props.data.correct_answer) {
                    return "correct"
                }
                else{
                    return "others";
                }
            }
        }
        else{
            return "label";
        }
    };

    return (
        <div>
            <h3 className="ques">{props.data.question}</h3>
            <br />
            <div className="all-inputs">
                {allAnswers.map((ans, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={ans}
                            name={x}
                            value={ans}
                            onChange={(e) => props.handleChange(e)}
                            checked={ans === props.selected[x]}
                            className="radio"
                        />
                        {console.log(x)}
                        {console.log(ans)}
                        {console.log(props.selected[x])}
                        {console.log(props.check)}
                        {console.log(props.data.correct_answer)}
                        <label
                            className={getLabelClass(ans)}
                            htmlFor={ans}
                        >
                            {ans}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
// 