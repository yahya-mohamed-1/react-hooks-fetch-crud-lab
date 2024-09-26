import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  // Fetch questions when the component is rendered
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  // Function to handle deleting a question
  function handleDelete(id) {
    // Remove the deleted question from the state
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
