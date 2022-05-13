# Wordle (but better than the original!)
## Getting Started
Use `npm start` for both wordle_server and wordle_client

## Tools used
**Frontend** : ReactJS, Material UI
**Backend** : nodeJS, express, Rapid API

## How it works
![alt text](https://i.ibb.co/ZW0w4C6/Screen-Shot-2022-05-12-at-5-48-53-PM.png)
The frontend react app allows you to six attempts to guess a five letter word. For each attempt, if the letter is in the correct word in the correct position, the letter on the board would turn green after you hit enter; if the letter is in the correct word but in a different spot, the letter on the board would turn yellow; otherwise, the color on the board will not change, but the letter on the keyboard will turn grey to tell you that the letter it's not in the correct word. If you try to engage in actions that are not allowed, such as deleting an empty word or typing a word that has more than five letters, you will also be alerted that the action can’t be carried out. 

You can toggle between light mode and dark mode, and you can click on the status button on the top left to see your overall performance and history. 

The backend queries 2 APIs provided by RapidAPI, one for getting a random word and The other for checking whether the input is a valid word in the dictionary 
(Note: Since I'm using the free version of the API, the number of queries is limited per month, so I also wrote code to parse a txt file to instead of an API to get random words)

## Why it's better than the original
This Wordle game is more than just a clone. It has some extra features that you can't find in the original game:
- If you correctly guess the word, confettis will fall from the top of the screen to celebrate your success 
- Both light mode and dark mode have cooler backgrounds then the original game 
- If you feel like one game per day it's not enough, you have the option to play the game again!
