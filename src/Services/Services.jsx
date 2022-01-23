import { toast } from 'react-toastify';

const API_KEY = "24419358-338d9960aaa56c480bc3e3cda";
const BASE_URL = "https://pixabay.com/api/";


function getImages(search, page) {
  return fetch( `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`${search} not found`));
    })
      .then((response) => {
        if (response.hits.length === 0) {
          toast.error(` ${search} not found`);
        }
      return response.hits;
    });
}
const API = { getImages };
export default API;

// import { Component } from 'react';
// import './App.css';
// import API from './components/Services/Services';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import ImageGallery from './components/ImageGallery/ImageGallery';
// import Searchbar from './components/Searchbar/Searchbar';
// import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';
// import Loader from './components/Loader/Loader';

// class App extends Component {
//   state = {
//     search: '',
//     img: [],
//     loading: false,
//     page: 1,
//     modal: false,
//     picture: '',
//     // status: idle,
//   };

//   handleSubmit = search => {
//     this.setState({ search, page: 1, img: null });
//   };

//   handleOpenModal = e => {
//     const picture = e.target.dataset.action;
//     console.log(e.target.dataset.action);
//     this.setState({ modal: true, picture });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.search !== this.state.search ||
//       prevState.page !== this.state.page
//     ) {
//       this.setState({ loading: true });
//       this.searchImages(this.state.page);
//     }
//   }

//   searchImages = page => {
//     const { search } = this.state;
//     API.getImages(search, page)
//       .then(response =>
//         this.setState(({ img }) => ({
//           img: [...response],
//         })),
//       )
//       .catch(error => console.log(error))
//       .finally(() => {
//         this.setState({ loading: false });
//       });
//   };

//   handleChangePage = () => {
//     this.searchImages(this.state.page);
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });

//     // fetch(
//     //   `https://pixabay.com/api/?q=${this.state.search}&page=${
//     //     this.state.page + 1
//     //   }&key=24419358-338d9960aaa56c480bc3e3cda&image_type=photo&orientation=horizontal&per_page=12`,
//     // )
//     //   .then(res => res.json())
//     //   .then(img => {
//     //     this.setState(prevState => {
//     //       return { img: [...prevState.img, ...img.hits] };
//     //     });
//     //     window.scrollTo({
//     //       top: document.documentElement.scrollHeight,
//     //       behavior: 'smooth',
//     //     });
//     //   })
//     //   .catch(error => console.log(error))
//     //   .finally(() => {
//     //     this.setState({ loading: false });
//     //   });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handleSubmit} />
//         <ToastContainer autoClose={3000} />

//         {this.state.img && this.state.img.length > 0 && (
//           <>
//             <ImageGallery img={this.state.img} onClick={this.handleOpenModal} />
//             <Button onClick={this.handleChangePage} img={this.state.img} />
//           </>
//         )}
//         {this.state.loading && <Loader />}
//         {this.state.modal && <Modal picture={this.state.picture} />}
//       </div>
//     );
//   }
//   //   if (status === 'pending') {
//   //     <Loader />
//   // }
//   //   if (status === 'openModal') {
//   //     <Modal picture={this.state.picture} />
//   //   }
//   //   if (status === 'resolved') {
//   //     <>
//   //             <ImageGallery img={this.state.img} onClick={this.handleOpenModal} />
//   //             <Button onClick={this.handleChangePage} img={this.state.img} />
//   //           </>
//   // }
// }

// export default App;
