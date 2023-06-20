import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Phonebook />
      </div>
    );
  }
}
