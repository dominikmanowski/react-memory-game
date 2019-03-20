# React Memory Game

## Game assumptions / functional requirements

* The game consists in choosing two cards showing the same picture from 9 cards.
* All cards at the beginning should be covered.
* Cards are revealed by clicking on then.
* It is possible to turn over only one card at a time, rest is temporarily blocked and the card is covered after few seconds, unlocking all other cards again.
* After revealed two identical cards one after another, both remain flipped over and a point is awarded.
* The game asks to enter players nickname before the start.
* Card images are generated randomly
* The image of the covered card is generated randomly (but it should look like the ordinary playing card back).
* After revealed all the cards congratulations and the time the game took will pop up.

## Development mode

### Install project dependencies:

`yarn` or `npm install`

Installs all necessary dependencies.

## Run the development server:

`yarn start` or `npm run start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.

### Build for production:

`yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

App is ready to be deployed.