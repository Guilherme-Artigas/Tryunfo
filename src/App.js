import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import './components/css/Card.css';

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
    // filtros: [],
    onSaveButtonClick: () => {
      const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
        cardAttr3, cardTrunfo } = this.state;
      if (cardTrunfo) this.setState({ cardTrunfo: false });

      const lista = { cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardTrunfo };
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

  delleteCard = (card) => {
    const { savedCards } = this.state;
    const newList = savedCards.filter((e) => e.cardName !== card);
    this.setState({ savedCards: newList });
    const trunfo = newList.some((e) => e.cardTrunfo === true);
    if (!trunfo) this.setState({ hasTrunfo: false });
  };

  searchField = ({ target: { value } }) => {
    const { savedCards } = this.state;
    const filtered = savedCards.filter((e) => e.cardName.includes(value));
    if (value !== '') {
      // this.setState({ filtros: filtered });
    }
    // se value !== '' e filtered retornar vazio, eu não posso exibir nada na tela

    console.log(filtered);
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      savedCards,
      /* filtros */ } = this.state;

    return (
      <>
        <section className="registrationAndViewing">
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
        </section>
        <section className="searchField">
          <label htmlFor="searchField">
            Filtros de Busca:
            <br />
            <input
              data-testid="name-filter"
              onChange={ this.searchField }
            />
          </label>
        </section>
        <section className="listSavedCards">
          {/* {filtros.length > 0 ? (
            <ul>
              {filtros.map((e, i) => (
                <li key={ `${e}${i}` }>
                  <Card
                    cardName={ e.cardName }
                    cardDescription={ e.cardDescription }
                    cardImage={ e.cardImage }
                    cardAttr1={ e.cardAttr1 }
                    cardAttr2={ e.cardAttr2 }
                    cardAttr3={ e.cardAttr3 }
                    cardRare={ e.cardRare }
                    cardTrunfo={ e.cardTrunfo }
                  />
                  <button
                    type="button"
                    onClick={ () => this.delleteCard(e.cardName) }
                    data-testid="delete-button"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>) : ''} */}
          {savedCards.length > 0 && (
            <ul>
              {savedCards.map((e, i) => (
                <li key={ `${i}` }>
                  <Card
                    cardName={ e.cardName }
                    cardDescription={ e.cardDescription }
                    cardImage={ e.cardImage }
                    cardAttr1={ e.cardAttr1 }
                    cardAttr2={ e.cardAttr2 }
                    cardAttr3={ e.cardAttr3 }
                    cardRare={ e.cardRare }
                    cardTrunfo={ e.cardTrunfo }
                  />
                  <button
                    type="button"
                    onClick={ () => this.delleteCard(e.cardName) }
                    data-testid="delete-button"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>)}
        </section>
      </>
    );
  }
}

export default App;
