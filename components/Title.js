import {Component} from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    text: 'Title component',
    type: 'default'
  }

  static PropTypes = {
    text: PropTypes.string,
    type: PropTypes.string
  }

  render() {
    const {type, text} = this.props;
    const levels = {
      main: `h1`,
      section: `h2`,
      default: `h3`
    };
    const Heading = levels[type];

    return (
      <Heading className={type}>
        {text}


        {/* Lets set it globally */}
        <style jsx global>{`
          .main {
            font-size: 5rem;
          }
          .section {
            font-size: 3rem;
          }
        `}</style>
      </Heading>
    )
  }
}

export default Title;