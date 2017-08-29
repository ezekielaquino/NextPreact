import {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Menu from '../components/Menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  componentDidMount() {
    // Do stuff on mount.Further reading:
    // https://facebook.github.io/react/docs/react-component.html
  }

  // Define default props immediately so each
  // component is super delcarative
  static defaultProps = {
    variant: 'light'
  }

  // Also define PropTypes
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static PropTypes = {
    variant: PropTypes.string
  }

  // Just an example how a child component can return some value
  // to its parent component (state, elem ref, etc). Here the menuState
  // form the menu component is set as the header state when it changes
  handleMenuChange(menuState) {
    this.setState({ menuIsOpen: menuState });
  }

  render() {
    // Let's destructure the props
    const {variant, title} = this.props;
    const variants = {
      dark: {
        backgroundColor: '#000',
        color: '#FFF'
      },
      light: {
        backgroundColor: '#cdcdcd',
        color: '#000'
      }
    }

    return (
      <header
        style={{
          backgroundColor: variants[variant].backgroundColor,
          color: variants[variant].color
        }}>

        <h1>
          {/*
            Link is just a decorator, you must have <a> within it
            https://github.com/zeit/next.js/#with-link
          */}
          <Link href="/">
            <a>
              {this.state.menuIsOpen ? 'OMG Menu is Open!' : title}
            </a>
          </Link>
        </h1>

        <Menu
          onChange={menuState => this.handleMenuChange(menuState)}/>


        <style jsx>{`
          header {
            width: 100%;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            position: relative;
          }
        `}</style>
      </header>
    )

    /**
     * A note on styles:
     * We're going for style jsx here, next ships with it.
      IMO css in js is the way to go when going the component/
      modular route. Otherwise I feel like the whole concept
      doesn't make any sense. Also, no need to add a class on
      each element, we can just rely on semantics here unless
      absolutely needed (e.g. multiple elements of type), scope
      of styles is isolated to the component!
     */
  }
}

export default Header;