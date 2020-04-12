import React from "react";
import "./QuoteCard.css";

class QuoteCard extends React.Component {
  state = {
    quote: {},
  };

  getQuote = async () => {
    let result = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    ).then((response) => response.json());

    this.setState({ quote: result[0] });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getQuote();
    }, 2000);
  }

  render() {
    const { image, character, quote } = this.state.quote;
    return (
      <React.Fragment>
        <br />
        <button className="btn" onClick={this.getQuote}>
          Click for Load another Quote !
        </button>
        {quote === undefined ? (
          <p>Loading ...</p>
        ) : (
          <figure className="QuoteCard">
            <img src={image} alt={character} />
            <figcaption>
              <blockquote>{quote}</blockquote>
              <cite>{character}</cite>
            </figcaption>
          </figure>
        )}
      </React.Fragment>
    );
  }
}

export default QuoteCard;
