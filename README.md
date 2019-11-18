# Minesweeper Game

## Detailed Instructions:

A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.

If you open a square with 0 neighboring bombs, all its neighbors will automatically open. This can cause a large area to automatically open.

To remove a bomb marker from a square, point at it and right-click again.

If you mark a bomb incorrectly, you will have to correct the mistake before you can win. Incorrect bomb marking doesn't kill you, but it can lead to mistakes which do.

You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

Click the Restart Game button to start a new game.

<br />

# To run the application on your local machine

To try out the game and run it on you local machine, please copy the folder to your root directory and navigate to the folder with commands.

Once navigated to the folder, please run the following to install the required modules:

### `npm install`

Once the above has been completed you need to run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
