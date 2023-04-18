// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function guessTheNumber() {
  const userGuess = parseInt(document.getElementById("user-number").value);
  const generatedNumber = Math.floor(Math.random() * 6) + 1;

  if (userGuess === generatedNumber) {
    document.getElementById("user-guess").innerHTML = "Goodjob, you guessed the correct number which was " + (generatedNumber) + ".";
  }
  
  if (userGuess != generatedNumber) {
    document.getElementById("user-guess").innerHTML = "Sorry, you guessed the incorrect number which was " + (generatedNumber) + ", you guessed " + (userGuess) + ".";
  }
}