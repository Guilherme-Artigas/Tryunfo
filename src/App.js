import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    onSaveButtonClick: () => {
      const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
        cardAttr3 } = this.state;
      const lista = { cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 };
      this.setState((estadoAnterior) => ({
        savedCards: [...estadoAnterior.savedCards, lista],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
      }));
    },
  };

  handle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
        cardAttr3, cardRare, cardTrunfo } = this.state;

      if (cardName !== ''
        && cardDescription !== ''
        && cardImage !== ''
        && cardRare !== '') {
        const sumAttributes = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
        const limitSum = 211;
        const limitCard = 91;
        const minimum = -1;
        if (Number(cardAttr1) > minimum && Number(cardAttr1) < limitCard
          && Number(cardAttr2) > minimum && Number(cardAttr2) < limitCard
          && Number(cardAttr3) > minimum && Number(cardAttr3) < limitCard
          && sumAttributes < limitSum) {
          this.setState({ isSaveButtonDisabled: false });
        } else {
          this.setState({ isSaveButtonDisabled: true });
        }
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
      if (cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
    });
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, savedCards, hasTrunfo } = this.state;

    return (
      <>
        <Form
          onInputChange={ this.handle }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {savedCards.map((e, i) => (
          <Card
            key={ i }
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardImage={ e.cardImage }
            cardAttr1={ e.cardAttr1 }
            cardAttr2={ e.cardAttr2 }
            cardAttr3={ e.cardAttr3 }
            cardRare={ e.cardRare }
            cardTrunfo={ e.cardTrunfo }
          />
        ))}
      </>
    );
  }
}

export default App;
