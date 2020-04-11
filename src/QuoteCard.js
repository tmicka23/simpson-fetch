import React from "react";
import "./QuoteCard.css";

class QuoteCard extends React.Component {
  state = {
    quote: {},
  };

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ quote: result[0] });
      });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const { image, character, quote } = this.state.quote;
    return (
      <React.Fragment>
        <br />
        <button className="btn" onClick={this.getQuote}>
          Click for Load another Quote !
        </button>
        <figure className="QuoteCard">
          <img src={image} alt={character} />
          <figcaption>
            <blockquote>{quote}</blockquote>
            <cite>{character}</cite>
          </figcaption>
        </figure>
      </React.Fragment>
    );
  }
}

export default QuoteCard;
