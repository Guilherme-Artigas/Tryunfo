import React from 'react';
import PropTypes from 'prop-types';
import './css/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <section className="previewCard">
        <h1>Visualização da carta</h1>
        <p data-testid="name-card">
          {cardName}
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          Descrição:
          {' '}
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          Atributo 1:
          {' '}
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Atributo 2:
          {' '}
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Atributo 3:
          {' '}
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          Raridade da carta:
          {' '}
          {cardRare}
        </p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
