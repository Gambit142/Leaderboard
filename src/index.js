import './style.css';
import { createUserAndScore, fetchFromApi } from './api';

const submitButton = document.querySelector('.submit-btn');
const refreshButton = document.querySelector('.refresh-button');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(scoreInput.value);
  createUserAndScore(nameInput.value, scoreInput.value);
console.log('Hello');
})
console.log(refreshButton);

