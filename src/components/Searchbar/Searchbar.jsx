import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

import {
  SearchbarHeader,
  Form,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import Notiflix from 'notiflix';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      // return alert('Введіть назву зображень!');
      return Notiflix.Notify.warning('Please enter a search query.');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch style={{ fontSize: 20 }} />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="searchName"
            value={this.state.query}
            onChange={this.handleNameChange}
           
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarHeader>
    );
  }
}

