import {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static PropTypes = {
    onChange: PropTypes.function
  }

  handleClick() {
    const bool = !this.state.isOpen;
    this.props.onChange(bool);
    this.setState({ isOpen: bool });
  }

  render() {
    return (
      <div
        className={this.state.isOpen ? 'is-open' : ''}>
        <button
          onClick={this.handleClick}>
            {this.state.isOpen ? 'Close' : 'Menu'}
        </button>

        <nav>
          {/* We can probably just map this... */}
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link href="/contact"><a>Contact</a></Link>
            </li>
          </ul>
        </nav>


        <style jsx>{`
          button {
            position: relative;
            z-index: 9999;
          }
          nav {
            width: 70vw;
            padding: 2rem;
            position: absolute;
            right: 0;
            top: 0;
            text-align: center;
            background: green;
            color: white;
            transform: translateY(-100%) translateZ(0);
            transition: transform 0.5s;
          }
          .is-open nav {
            transform: translateY(0) translateZ(0);
          }
          li {
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Menu;