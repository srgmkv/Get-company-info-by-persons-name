import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.select = React.createRef();
    this.state = {
      fio: '',
      suggestions: [],
      selectedItem: null,
      isSelectShown: false,
      orgsInfo: null
    }
  }
 
  handleChange = (e) => {
    this.setState({ fio: e.target.value });
    this.setState({ orgsInfo: null });

    const self = this;
    setTimeout(() => {
      axios({
        method: 'POST',
        url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
        data: {
          query: self.state.fio
        },
        headers: {
          "Authorization": "Token b8678ebf716355f62ab8f0a9d2afcbe82ea155c6",
          "Content-Type": "application/json; charset=UTF-8",
          "Accept": "application/json"
        }
      })
        .then(function (response) {
          const data = response.data.suggestions.map(item => item.value);
          self.setState({ suggestions: data });
          setTimeout(() => {
            self.setState({ isSelectShown: self.state.suggestions.length > 0 });
          }, 0);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, 0)
  }

  handleSelectClick = (item) => {
    const arr = item.split(' ');
    const newItem = arr.length === 3 ? item : item + ' ';
    this.setState({ isSelectShown: arr.length !== 3 });
    this.setState({ isSelectShown: false });
    this.setState({ fio: newItem });
    this.textInput.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ isSelectShown: false });
    const self = this;
    axios({
      method: 'POST',
      url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
      data: {
        query: self.state.fio

      },
      headers: {
        "Authorization": "Token b8678ebf716355f62ab8f0a9d2afcbe82ea155c6",
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      }
    })
      .then(response => {
        console.log('response', response)
        const data = response.data.suggestions.map(item => {
          return { value: item.value, inn: item.data.inn, address: item.data.address.value }
        });
        self.setState({ orgsInfo: data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    const selectList = this.state.suggestions.map((item, index) =>
      <div className="select-item" onClick={() => this.handleSelectClick(item)}>{item}</div>
    )

    const searchResult = this.state.orgsInfo && this.state.orgsInfo.map(item =>
      <div className="result">
        <div><span className="field-name">Наименование:</span> <span>{item.value}</span></div>
        <div><span className="field-name">ИНН:</span> <span>{item.inn}</span></div>
        <div><span className="field-name">Адрес:</span><span>{item.address}</span></div>
      </div>
    )

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input">
          <input type="text"
            ref={this.textInput}
            id="fio"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyPress}
            value={this.state.fio}
            placeholder="Введите ФИО"
          /><button>Искать</button>
        </div>
        {
          this.state.isSelectShown &&
          <div ref={this.select} className="select-list" size="11">
            <div className="select-item-sugg">Выберите из списка или продолжайте вводить</div>
            {selectList}
          </div>
        }
        {
          this.state.orgsInfo &&
          searchResult
        }
        {
          this.state.orgsInfo && this.state.orgsInfo.length === 0 &&
          <div className="no-result">По Вашему запросу ничего не найдено</div>
        }
      </form>
    )
  }
}
