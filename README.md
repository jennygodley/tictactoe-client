# Tic Tac Toe

## Technologies Used
- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- AJAX

## Planning

#### Wireframe

![wireframe image](https://i.imgur.com/2AzzUUXl.jpg)

#### User stories
  - As a user, I want to be able to create an account, and log in when I return.
  - As a user, I want to be able to create a new game when I am logged in.
  - As a user, I want to be able to make my move in an empty space.
  - As a user, I want the game to end when it's not winnable, and not continue until all spaces are full.
  - As a user, I want to be able to reset the game whenever I'd like.
  - As a user, I want feedback about whether I won or lost.
  - As a user, I want to be able to log out when I'm done playing.

## Process

I started out making the board itself, using Bootstrap. I wanted to start with game logic next, but after some advice from the prior cohort, I made the curl scripts, just so I'd be familiar with what the API expected of me. This was a good move for me, as I might have written my game to send out values that wouldn't have been helpful for the API calls!

I finished my game logic relatively quickly, but tying the API and the game together was challenging for me.

After this, I worked on styling the game——I really wanted it to match the wireframe I'd created. After this, I optimized styling for mobile as well as for desktop.

Once I finished what I believe are the requirements, I started working on an AI opponent. While this was challenging, even more challenging was to make the "play vs computer" and "play vs yourself" versions toggle-able.

## Future Iterations

I'd like to make an option to continue as a guest. I also intend to create a local score tracker that will display your score per session.
