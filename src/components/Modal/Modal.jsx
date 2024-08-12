import Modal from 'react-modal';
import {  Image } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    marginTop: '36px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto', 
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({isOpen, onClose, src, tags}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <Image src={src} alt={tags} />
  </Modal> 
  )
}



