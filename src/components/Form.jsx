import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props; // Puxar hasTrunfo

    return (
      <form>
        <label htmlFor="cardNameId">
          <input
            id="cardNameId"
            type="text"
            name="cardName"
            placeholder="Nome da Carta"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="textAreaId">
          <textarea
            id="textAreaId"
            type="textarea"
            name="cardDescription"
            placeholder="Descrição da Carta"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="attrId1">
          <input
            id="attrId1"
            type="number"
            name="cardAttr1"
            placeholder="Atributo 1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="attrId2">
          <input
            id="attrId2"
            type="number"
            name="cardAttr2"
            placeholder="Atributo 2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="attrId3">
          <input
            id="attrId3"
            type="number"
            name="cardAttr3"
            placeholder="Atributo 3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="imgId">
          <input
            id="imgId"
            type="text"
            name="cardImage"
            placeholder="Link da imagem da carta"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <label htmlFor="selectId">
          <select
            id="selectId"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <br />

        <label htmlFor="checkId">
          Esta carta é Super Trunfo
          <input
            id="checkId"
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <br />

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  isSaveButtonDisabled: false,
  onSaveButtonClick: () => {},
};

export default Form;
