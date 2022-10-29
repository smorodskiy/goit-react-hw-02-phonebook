import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';

import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = e => {
    e.preventDefault();
    const currentName = this.state.name;
    const contacts = this.state.contacts;

    const isExist = contacts.some(user => {
      return user.name === currentName;
    });

    if (!isExist) {
      const currentUser = { id: nanoid(), name: currentName };

      this.setState(prevState => {
        return { contacts: [...prevState.contacts, currentUser] };
      });
    }
  };

  handleOnDeleteUser = e => {
    e.preventDefault();

    const userName = e.target.getAttribute('user');

    this.setState(prevState => {
      const newContacts = prevState.contacts;
      const pos = newContacts.findIndex(user => user.name === userName);
      if (pos >= 0) {
        newContacts.splice(pos, 1);
        return { contacts: newContacts };
      }
    });
  };

  handleInputName = e => {
    const newName = e.target.value;
    this.setState({ name: newName });
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook
            handleAddContact={this.handleAddContact}
            handleInputName={this.handleInputName}
          />
        </Section>

        <Section title="Contacts">
          <Contacts
            contacts={this.state.contacts}
            handleOnDeleteUser={this.handleOnDeleteUser}
          />
        </Section>
      </Container>
    );
  }
}

export { App };
