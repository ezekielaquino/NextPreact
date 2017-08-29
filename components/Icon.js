import {Component} from 'react';
import PropTypes from 'prop-types';
import {Icons} from '../components/_constants';

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    color: '#000',
    size: 'default',
  }

  static PropTypes = {
    color: PropTypes.string,
    size: PropTypes.string
  }

  render() {
    const {type, color, size} = this.props;

    return (
      <svg className={size} viewBox="0 0 93 93" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g style={{
          fill: color
        }} dangerouslySetInnerHTML={{__html: Icons[type]}}>
        </g>


        <style jsx>{`
          svg {
            vertical-align: middle;
          }
          .small {
            height: 1rem;
          }
          .default {
            height: 1.5rem;
          }
          .large {
            height: 2rem;
          }
        `}</style>
      </svg>
    )
  }
}

export default Icon;