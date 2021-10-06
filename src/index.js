import './style.css';
import { createUserAndScore, fetchFromApi } from './api';

const submitButton = document.querySelector('.submit-btn');
const refreshButton = document.querySelector('.refresh-button');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreBoardContainer = document.querySelector('.scoreboard');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  createUserAndScore(nameInput.value, scoreInput.value);
})

refreshButton.addEventListener('click', () => {
  fetchFromApi(scoreBoardContainer);
})

