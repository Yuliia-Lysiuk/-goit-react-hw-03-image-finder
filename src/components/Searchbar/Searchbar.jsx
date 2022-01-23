import { Component } from 'react';
import './Searchbar.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


class Searchbar extends Component {
  state = {
    search: '',
  };

    static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleChangeInput = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    const { search } = this.state
    e.preventDefault();
    if (search.trim() === "") {
      toast.warning(' Search image');
      return
    }
    this.props.onSubmit(search );
    this.setState({ search: '' });
  };

  render() {
    return (
      
        <header className="Searchbar ">
          <form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <BsSearch height={100} width={100}/>
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              value={this.state.search}
              onChange={this.handleChangeInput}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      
    );
  }
}

export default Searchbar;