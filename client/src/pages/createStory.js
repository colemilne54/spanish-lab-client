import React from "react";
import {useNavigate } from "react-router-dom";
const CreateStory = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/create-story');
    }
    return (
        <div className="standardPage displayBlock createQuestionsPage">
            <h1>Create New Story</h1>
                <div className= "">
                    <label htmlFor="">Question 1</label>
                    <input id="createQuestions" type="text" name="question1" />
                    <button className= "secondaryButton" >Add Image</button>
                </div>
                <div className="">
                    <label htmlFor="password">Options</label>
                    <input id="option1" type="text" name="option1" />
                    <input id="option2" type="text" name="option2" />
                    <input id="option3" type="text" name="option3" />
                    <button className= "secondaryButton">Add Option</button>
                </div>
                <div>
                    <button className= "secondaryButton secondaryBottomRightButton">Add Question</button>
                    <button className= "primaryButton bottomRightButton">Finish Questions</button>
                </div>
        </div>

    );
};

export default CreateStory;