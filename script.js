let quizData = {
    title: '',
    questions: []
  };
  
  document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    quizData.title = document.getElementById('title').value;
    // Send quizData to backend
    fetch('http://localhost:5000/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quizData)
    }).then(response => response.json())
      .then(data => console.log(data));
  });
  
  function addQuestion() {
    const questionBlock = document.querySelector('.questionBlock');
    const questionText = questionBlock.querySelector('[name="question"]').value;
    const options = [
      questionBlock.querySelector('[name="option1"]').value,
      questionBlock.querySelector('[name="option2"]').value,
      questionBlock.querySelector('[name="option3"]').value,
      questionBlock.querySelector('[name="option4"]').value
    ];
    const correctAnswer = questionBlock.querySelector('[name="correct"]').value;
    quizData.questions.push({ questionText, options, correctAnswer });
    alert('Question added successfully!');
  }
  