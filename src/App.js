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
    isSaveButtonDisabled: true,
    savedCards: [],
    onSaveButtonClick: () => {
      const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
        cardAttr3 } = this.state;
      const lista = [{ cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 }];
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
        cardAttr3, cardRare } = this.state;

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
    });
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled,
      onSaveButtonClick, savedCards } = this.state;

    console.log(savedCards);
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
      </>
    );
  }
}

export default App;

// e.target.form[0].value = '';
// e.target.form[1].value = '';
// e.target.form[5].value = '';
// e.target.form[2].value = '0';
// e.target.form[3].value = '0';
// e.target.form[4].value = '0';
// e.target.form[6].value = 'normal';
// const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
//   cardAttr3 } = this.state;
// cardName = '';
// 0: input#cardNameId
// 1: textarea#textAreaId
// 2: input#attrId1
// 3: input#attrId2
// 4: input#attrId3
// 5: input#imgId
// 6: select#selectId
// 7: input#checkId
// const teste = e;
// teste.target.form[0].value = '';
// console.log(teste);
// console.log(this.state);

// onSaveButtonClick: () => {
//   const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
//     cardAttr3 } = this.state;
//   const lista = [{ cardName,
//     cardDescription,
//     cardImage,
//     cardRare,
//     cardAttr1,
//     cardAttr2,
//     cardAttr3 }];
//   this.setState({ savedCars: [...lista] }, () => console.log(this.state));
// },
