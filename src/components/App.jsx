import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import user from './../data/user.json';
// import data from './../data/data.json';
// import friends from './../data/friends.json';
// import transactions from './../data/transactions.json';

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
