import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import ImageComponent from './generateImage';

const socket = io('http://localhost:3001');

const popularAnswers = [];

function Room() {
    const { roomId } = useParams();
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isTeacher, setIsTeacher] = useState(false);
    const [promptIndex, setPromptIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [finalPrompt, setFinalPrompt] = useState('');
    const [showPopularAnswer, setPopularAnswer] = useState(false);
    const Questions = [
        { "question": "What animal is our story about?", "options": ["Dog", "Cat", "Lion", "Bear"] },
        { "question": "What is the animal eating?", "options": ["Hamburger", "Sushi", "Pizza", "Burrito"] },
        { "question": "Where is the animal eating?", "options": ["On the beach", "At School", "In The Mountains", "At the Lake"] },
    ]
    const Preguntas = [
        { "question": "¿De qué animal trata nuestra historia?", "options": ["perro", "gato", "león", "oso"] },
        { "question": "¿Qué está comiendo el animal?", "options": ["hamburguesa", "sushi", "pizza", "burrito"] },
        { "question": "¿Dónde está comiendo el animal?", "options": ["en la playa", "en la escuela", "en las montañas", "en el lago"] },
    ]

    var isDone = false;
    var displayEnd = (promptIndex + 1 === Questions.length) ? true : false;

    useEffect(() => {
        socket.emit('joinRoom', roomId);

        socket.on('receiveAnswer', (receivedAnswer) => {
            setAnswers((prevAnswers) => [...prevAnswers, receivedAnswer]);
        });

        socket.on('teacher', () => {
            setIsTeacher(true);
        });

        socket.on('nextPrompt', () => {
            setPromptIndex((prevIndex) => prevIndex + 1);
            setAnswers([]);
            setHasAnswered(false);
        });

        return () => {
            socket.off('receiveAnswer');
            socket.off('teacher');
            socket.off('nextPrompt');
        };
    }, [roomId]);

    const handleNextPrompt = () => {
        popularAnswers.push(popularAnswer());
        console.log(promptIndex + " " + Questions.length)
        if (promptIndex + 1 === Questions.length) {
            isDone = true;
        } else {
            socket.emit('nextPrompt', roomId);
        }
    };

    const handleEndQuiz = () => {
        popularAnswers.push(popularAnswer());
        setFinalPrompt(`A cartoon ${popularAnswers[0]} eating a ${popularAnswers[1]} ${popularAnswers[2]}`);
        setShowImage(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('newAnswer', { roomId, answer: selectedAnswer });
        setSelectedAnswer('');
        setHasAnswered(true);
    };

    const popularAnswer = () => {
        const counts = {};
        let maxCount = 0;
        let maxValue = null;

        answers.forEach((a) => {
            counts[a] = (counts[a] || 0) + 1;
            if (counts[a] > maxCount) {
                maxCount = counts[a];
                maxValue = a;
            }
        });
        return maxValue;
    };

    return (
        <div className="roomPage">
            {showImage ? <ImageComponent prompt={finalPrompt} /> :
                <div>
                    <h1>Room: {roomId}</h1>
                    <div className="columnDisplay">
                        <h2>Prompt: {Questions[promptIndex].question}</h2>
                        <form className="question" onSubmit={handleSubmit}>
                            {Questions[promptIndex].options.map((choice, index) => (
                                <div key={index}>
                                    <input
                                        key={`prompt-${promptIndex}-choice-${index}`}
                                        type="radio"
                                        id={`choice-${index}`}
                                        name="answer"
                                        value={choice}
                                        onChange={(e) => setSelectedAnswer(e.target.value)}
                                        required
                                    />
                                    <label htmlFor={`choice-${index}`}>{choice}</label>
                                </div>
                            ))}
                            <button className="secondaryButton" type="submit" disabled={hasAnswered}>Submit Answer</button>
                        </form>
                    </div>
                    <div className="columnDisplay">
                        <h2>Popular Answer: {popularAnswer()}</h2>
                        <h3>All Answers:</h3>
                        <ul>
                            {answers.map((answer, index) => (
                                <li key={index}>{answer}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rightAlignedContainer bottomRightButton">
                    {isTeacher && (
                            <div>
                                {displayEnd ?
                                    <button className="primaryButton" type="button" onClick={handleEndQuiz}>
                                        End Quiz
                                    </button> :
                                    <button className="primaryButton" type="button" onClick={handleNextPrompt}>
                                        Next Prompt
                                    </button>
                                }
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
}

export default Room;
