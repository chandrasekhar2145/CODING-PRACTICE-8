// Write your code here.
import {Component} from 'react'

import './index.css'
class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeCount = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="text-con">
            <h1>Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onChangeCount}
              />
            </div>
            <br />
            <p className="button" type="button">
              No.of letters: {count.length}
            </p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
