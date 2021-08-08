# Project_Pomodoro_Timer
 A Productivity Timer that allows a user to set an interval for focusing, followed by an interval for a break.
 
## Links
- [Live Demo](https://dry-dusk-16081.herokuapp.com/)

# Screenshots
## **Initial State** 
Allows the user to set the focus and break time intervals, then to start the timer with a play button.
- Focus Duration 
  - Defaults to 25 minutes
  - Can be changed only in increments of 5 minutes
  - Minimum duration allowed is 5 minutes
  - Maximum duration allowed is 60 minutes (1 hour)
- Break Duration
  - Defaults to 5 minutes
  - Can be changed only in increments of 1 minute
  - Minimum duration allowed is 1 minute
  - Maximum duration allowed is 15 minutes 
  
![Initial State Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Pomodoro_Timer/main/Screenshots/pom.png)

## **Timer Running State** 
Once the timer has begun, the page renders a count-down timer and a progress bar telling the user how far along they are into their specific session.
- Once the current session ends, an alarm sound goes off, and a session of the opposite type begins.
- While a session is active, the timer setting controls become disabled.
- At any time during an active session, the user may press the pause button to temporarily stop the session, but not end it. The session is then resumed when the user presses the play button again.
- This cycle will repeat until the user presses the stop button, which will terminate the session, and return the user to the initial state, but with the same timer settings instead of the default.

![Session State Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Pomodoro_Timer/main/Screenshots/timer.png)

## Technology
- Built with React
- Tested with Mocha & Chai 
- Styled with Bootstrap

### TODO:
- Restyle to match brand colors
- Re-design visual layout to be more aesthetically pleasing
- Additional features TBD