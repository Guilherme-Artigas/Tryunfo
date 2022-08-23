import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="cardNameId">
          <input
            id="cardNameId"
            type="text"
            name=""
            placeholder="Nome da Carta"
            data-testid="name-input"
          />
        </label>

        <br />

        <label htmlFor="textAreaId">
          <textarea
            id="textAreaId"
            type="textarea"
            name=""
            placeholder="Descrição da Carta"
            data-testid="description-input"
          />
        </label>

        <br />

        <label htmlFor="attrId1">
          <input
            id="attrId1"
            type="number"
            name=""
            placeholder="Atributo 1"
            data-testid="attr1-input"
          />
        </label>

        <br />

        <label htmlFor="attrId2">
          <input
            id="attrId2"
            type="number"
            name=""
            placeholder="Atributo 2"
            data-testid="attr2-input"
          />
        </label>

        <br />

        <label htmlFor="attrId3">
          <input
            id="attrId3"
            type="number"
            name=""
            placeholder="Atributo 3"
            data-testid="attr3-input"
          />
        </label>

        <br />

        <label htmlFor="imgId">
          <input
            id="imgId"
            type="text"
            name=""
            placeholder="Link da imagem da carta"
            data-testid="image-input"
          />
        </label>

        <br />

        <label htmlFor="selectId">
          <select id="selectId" name="" data-testid="rare-input">
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
            name=""
            data-testid="trunfo-input"
          />
        </label>

        <br />

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
