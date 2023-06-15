import React, { Component } from 'react';
import css from './../Phonebook.module.css';
import { nanoid } from 'nanoid';
export class ContactForm extends Component {
  constructor({ name, number, addContactHandle, inputOnChange }) {
    super({ name, number, addContactHandle, inputOnChange });
    // this.props = { name, number, addContactHandle, inputOnChange };
  }

  render() {
    return (
      <div className={css.card}>
        <form
          onSubmit={e =>
            this.props.addContactHandle(e, {
              name: this.props.name,
              number: this.props.number,
              id: nanoid(),
            })
          }
        >
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            value={this.props.name}
            onChange={this.props.inputOnChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={css.label} htmlFor="number">
            Number
          </label>
          <input
            className={css.input}
            type="tel"
            id="number"
            name="number"
            value={this.props.number}
            onChange={this.props.inputOnChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={`${css.add} ${css.button}`} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
