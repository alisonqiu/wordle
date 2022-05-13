# Wordle (but better than the original!)
## Getting Started
Use `npm start` for both wordle_server and wordle_client

## Tools used
**Frontend** : ReactJS, Material UI
**Backend** : nodeJS, express, Rapid API

## How it works
![alt text](https://i.ibb.co/ZW0w4C6/Screen-Shot-2022-05-12-at-5-48-53-PM.png)
The frontend react app allows you to six attempts to guess a five letter word. 
For each attempt, if the letter is in the correct word in the correct position, the letter on the board would turn green after you hit enter; if the letter is in the correct word but in a different spot, the letter on the board would turn yellow; otherwise, the color on the board will not change, but the letter on the keyboard will turn grey to tell you that the letter it's not in the correct word. 
<img width="828" alt="Screen Shot 2022-05-12 at 5 50 40 PM" src="https://user-images.githubusercontent.com/90943803/168200696-adab7764-324c-4ae9-976c-234d32fe4fd3.png">

If you try to engage in actions that are not allowed, such as deleting an empty word or typing a word that has more than five letters, you will also be alerted that the action can’t be carried out. 
<img width="821" alt="Screen Shot 2022-05-12 at 5 54 28 PM" src="https://user-images.githubusercontent.com/90943803/168200813-5e839cf5-6ef8-40ff-b014-f17db881e604.png">
<img width="825" alt="Screen Shot 2022-05-12 at 5 53 41 PM" src="https://user-images.githubusercontent.com/90943803/168200824-ec8459f6-a7d4-4e9b-b994-f5e9f8010cbc.png">


You can toggle between light mode and dark mode, and you can click on the status button on the top left to see your overall performance and history. 

<img width="842" alt="Screen Shot 2022-05-12 at 5 48 43 PM" src="https://user-images.githubusercontent.com/90943803/168200562-e019c1f2-7d19-4a72-bca2-dd0247997c81.png">

The backend queries 2 APIs provided by RapidAPI, one for getting a random word and The other for checking whether the input is a valid word in the dictionary 
(Note: Since I'm using the free version of the API, the number of queries is limited per month, so I also wrote code to parse a txt file to instead of an API to get random words)
<img width="680" alt="Screen Shot 2022-05-12 at 9 44 12 PM" src="https://user-images.githubusercontent.com/90943803/168201126-e8701257-b689-400b-b973-7ea428f14947.png">


## Why it's better than the original
This Wordle game is more than just a clone. It has some extra features that you can't find in the original game:
- If you correctly guess the word, confettis will fall from the top of the screen to celebrate your success
 <img width="611" alt="Screen Shot 2022-05-12 at 5 56 19 PM" src="https://user-images.githubusercontent.com/90943803/168200880-37ec2d64-f598-484f-9a26-770a49833ae0.png">
<img width="609" alt="Screen Shot 2022-05-12 at 5 55 53 PM" src="https://user-images.githubusercontent.com/90943803/168200898-30d6e381-b7d6-4eac-b493-f1bebcc4cff2.png">

- Both light mode and dark mode have cooler backgrounds then the original game 
- If you feel like one game per day it's not enough, you have the option to play the game again by clicking "play again!"
<img width="609" alt="Screen Shot 2022-05-12 at 7 29 19 PM" src="https://user-images.githubusercontent.com/90943803/168200920-f354c044-337f-4758-a8e8-ab1b49c53347.png">

## More features to come
