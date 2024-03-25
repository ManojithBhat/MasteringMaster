export default [
  {
    id: 'q1',
    text: 'What is the Master\'s method used for?',
    answers: [
      'Solving recurrence relations',
      'Analyzing space complexity',
      'Sorting algorithms',
      'Calculating time complexity of non-recursive algorithms'
    ]
  },
  {
    id: 'q2',
    text: 'Which of the following is NOT a requirement for applying the Master\'s method?',
    answers: [
      'The subproblems should have equal size',
      'Recurrence relation should have the form T(n) = aT(n/b) + f(n)',
      'The function f(n) should be asymptotically smaller than the recursive part',
      'The values of a and b should be integers'
    ]
  },
  {
    id: 'q3',
    text: 'What is the time complexity of an algorithm if the Master\'s method yields T(n) = 4T(n/2) + n^2?',
    answers: [
      'O(n^2)',
      'O(n log n)',
      'O(n^2 log n)',
      'O(n^3)'
    ]
  },
  {
    id: 'q4',
    text: 'Which case of the Master\'s method applies when f(n) = Θ(n^c) and a > b^c?',
    answers: [
      'Case 1',
      'Case 2',
      'Case 3',
      'None of the above'
    ]
  },
  {
    id: 'q5',
    text: 'What is the time complexity of an algorithm if the Master\'s method yields T(n) = 2T(n/2) + n log n?',
    answers: [
      'O(n log n)',
      'O(n)',
      'O(n^2)',
      'O(n^2 log n)'
    ]
  },
  {
    id: 'q6',
    text: 'In which case of the Master\'s method is it challenging to determine the time complexity without further analysis?',
    answers: [
      'Case 3',
      'Case 1',
      'Case 2',
      'All cases are straightforward'
    ]
  },
  {
    id: 'q7',
    text: 'What is the time complexity of an algorithm if the Master\'s method yields T(n) = 3T(n/2) + n^2 log n?',
    answers: [
      'O(n^3)',
      'O(n^2)',
      'O(n^2 log n)',
      'O(n^3 log n)'
    ]
  },
  { 
    id: 'q8',
    text: 'In the Master\'s method, if f(n) is polynomially larger than the recursive part, which case typically applies?',
    answers: [
      'Case 3',
      'Case 1',
      'Case 2',
      'It depends on the specific polynomial relationship'
    ]
  },
  {
    id: 'q9',
    text: 'Which of the following is NOT a step in applying the Master\'s method?',
    answers: [
      'Optimizing space complexity',
      'Identifying the form of the recurrence relation',
      'Checking the base case',
      'Solving the recurrence relation'
    ]
  },
  {
    id: 'q10',
    text: 'Which case of the Master\'s method applies when f(n) is asymptotically smaller than the recursive part?',
    answers: [
      'Case 1',
      'Case 2',
      'Case 3',
      'There is no such case'
    ]
  }
];