import { Component } from 'react';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import API from './Services/Services';

class App extends Component {
  state = {
    search: '',
    img: [],
    loading: false,
    page: 1,
    modal: false,
    largePicture: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.searchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };

  handleSubmit = search => {
    this.setState({ search, page: 1, img: null });
  };

  handleOpenModal = e => {
    const largePicture = e.target.dataset.action;
    this.setState({ largePicture });
    this.toggleModal();
  };

  searchImages = () => {
    this.setState({ loading: true });
    const { search, page } = this.state;
    API.getImages(search, page)
      .then(response => {
        if (page === 1) {
          return this.setState({ img: [...response] });
        }

        this.setState(({ img }) => {
          return { img: [...img, ...response] };
        });

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleChangePage = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    this.searchImages();
  };

  render() {
    const { loading, img, largePicture, modal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ToastContainer autoClose={3000} />
        {img && (
          <>
            <ImageGallery img={img} onClick={this.handleOpenModal} />
            {!loading && <Button onClick={this.handleChangePage} img={img} />}
          </>
        )}
        {loading && <Loader />}
        {modal && (
          <Modal largePicture={largePicture} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
