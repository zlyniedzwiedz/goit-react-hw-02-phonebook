import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class Form extends Component {
  render() {
    const { onDataSubmit } = this.props;

    return (
      <div>
        <form>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onSubmit={onDataSubmit}
            />
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onSubmit={onDataSubmit}
            />
            <button type="submit" onClick={onDataSubmit}>Add Contact</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onDataSubmit: Proptypes.func,
};
