import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Appstyled, LoaderWrapper } from './Appstyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from 'services/images.service';
import { RotatingLines } from 'react-loader-spinner';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    perPage: 12,
    totalPages: '',
    isError: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      this.fetchData(query, page);
    }
  }

  fetchData = async (query, page, perPage) => {
    try {
      const data = await getImages(query, page, perPage);
      
        if (data.hits.length === 0) {
          // this.setState({isError: `Query with name '${query}' not faund`})
          Notiflix.Notify.failure(`Query with name '${query}' not faund`)
        }
        this.setState(prevState => ({
          images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
          totalPages: (data.total / this.state.perPage),
        }));
      
      } catch (error) {
        const errorFetching = error.message
      this.setState({ isError: errorFetching })
      
      } finally {
        this.setState({ isLoading: false });
      }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalPages, page, isLoading, isError } = this.state;
    return (
      <Appstyled>
        <Searchbar onSubmit={this.handleSubmit} />
        {isError && <h1>{isError}</h1>}
       {isLoading && (
          <LoaderWrapper>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </LoaderWrapper>
        )}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !isLoading && totalPages > page && <Button onClick={this.handleLoadMore} />}
        <GlobalStyle />
      </Appstyled>
    );
  }
}

