'use client'
import React, { useState } from 'react'

function page() {
    const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

    const handleInputChange = (index, field, value) => {
      const updatedQuestions = [...questions];
      updatedQuestions[index][field] = value;
      setQuestions(updatedQuestions);
    };

    const addNewQA = () => {
      setQuestions([...questions, { question: "", answer: "" }]);
    };

    const saveTraining = () => {
      console.log("Saved Q&A Data: ", questions);
      // Add logic to save the Q&A data
    };
  return (
    <div >
             
    <div className="mb-4">
      <label className="block text-black mb-2">Q&A</label>
      <div>
        {questions.map((qa, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Question"
              className="w-full px-4 py-2 mb-2 border rounded-md"
              value={qa.question}
              onChange={(e) =>
                handleInputChange(index, "question", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Answer"
              className="w-full px-4 py-2 border rounded-md"
              value={qa.answer}
              onChange={(e) =>
                handleInputChange(index, "answer", e.target.value)
              }
            />
          </div>
        ))}
        <button
          className="text-blue-500 flex items-center gap-2 hover:text-black font-medium mb-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={addNewQA}
        >
          <span className="font-semibold">+</span> Add New Q&A
        </button>

        {/* <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={saveTraining}
        >
          Save Training
        </button> */}
      </div>
    </div>
    <button
      onClick={saveTraining}
      className="w-full lg:w-auto py-2 px-4 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600"
    >
      Save Training
    </button>
  </div>
  )
}

export default page