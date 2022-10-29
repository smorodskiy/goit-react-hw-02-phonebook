import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Phonebook extends Component {
  render() {
    const { handleAddContact, handleInputName } = this.props;
    return (
      <form>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputName}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" onClick={handleAddContact}>
          Add contact
        </button>
      </form>
    );
  }
}

export { Phonebook };

// Types
Phonebook.propTypes = {
  // message: PropTypes.string,
};
