import React from 'react';
import Board from './Component/Board';
import './style.css';

class App extends React.Component {
  state = {
    height: 8,
    width: 8,
    mines: 10
  };

  render() {
    const { height, width, mines } = this.state;

    return (
      <div className="game">
        <Board height={height} width={width} mines={mines} />
        <br />
        <div className="uButton">
          <button className="restart" onClick={() => window.location.reload(false)}>Restart Game</button>
          <br />
          <br />
          <div>
            <h3 className="Display-3">Instructions:</h3>
            <p>
              <br />
              <span>You are presented with a board of squares. Some squares contain mines (bombs),
                  others don't. If you click on a square containing a bomb, you lose. If you manage to
                  click all the squares (without clicking on any bombs) you win.</span>
              <br />
              <br />
              <span>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares
                containing bombs. Use this information plus some guess work to avoid the bombs.</span>
              <br />
              <br />
              <span>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
