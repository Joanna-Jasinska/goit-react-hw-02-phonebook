import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

const INIT = {
  // contacts: [
  //   { name: 'Adamian', number: '234-56-78', id: 'adamianid' },
  //   { name: 'Ania', number: '245-46-85', id: 'aniaid' },
  //   { name: 'Bavunia', number: '234653', id: 'bavuniaid' },
  // ],
  // name: 'n',
  // number: '999999',
  // filter: '',
};
export class App extends Component {
  constructor() {
    super();
    this.state = { ...INIT };
  }
  render() {
    return (
      <div className="app">
        <Phonebook {...this.state} />
      </div>
    );
  }
}
