import './style.css';
import { createUserAndScore, fetchFromApi } from './api.js';

const submitButton = document.querySelector('.submit-btn');
const refreshButton = document.querySelector('.refresh-button');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreBoardContainer = document.querySelector('.scoreboard');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  createUserAndScore(nameInput.value, scoreInput.value);
  const message = document.querySelector('.message');
  message.innerHTML = `Player's Score added, Kindly click the Refresh Button`;
  message.style.padding = '0.5rem'
  nameInput.value = '';
  scoreInput.value = '';
});

refreshButton.addEventListener('click', () => {
  fetchFromApi(scoreBoardContainer);
  const message = document.querySelector('.message');
  message.style.display = 'none';
});