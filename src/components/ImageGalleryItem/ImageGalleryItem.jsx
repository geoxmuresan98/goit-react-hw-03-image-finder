import React, { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { ImageModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  }

  openModal = () => {
    this.setState({ isOpenModal: true });
  }

  closeModal = () => {
    this.setState({ isOpenModal: false });
  }

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    const { isOpenModal } = this.state;
    return (
      <>
        <Item onClick={this.openModal}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        <ImageModal isOpen={isOpenModal} onClose={this.closeModal} src={largeImageURL} tags={tags} />
      </>
    );
  }
};
