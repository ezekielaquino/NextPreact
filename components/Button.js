import {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../components/Icon';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    size: 'default',
    type: 'button',
    text: 'Button Text',
    iconColor: 'black'
  }

  static PropTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    iconColor: PropTypes.string
  }

  render() {
    const {size, type, text, icon, iconColor} = this.props;
    const Element = type === 'button' ? `button` : `div`;
    const elementClasses = classNames(type, size, {
      'icon': icon
    });

    return (
      <Element
        className={elementClasses}>

        { icon ? (
          <Icon
            size={size}
            type={icon}
            color={iconColor} />
        ): null}

        <span>
          {text}
        </span>


        <style jsx global>{`
          .button,
          .link {
            border: 0;
            border-radius: 30px;
            padding: 1rem 1.5rem;
            background: blue;
            color: white;
          }
          .link {
            display: inline-block;
          }
          .small {
            font-size: 0.8rem;
          }
          .default {
            font-size: 1rem;
          }
          .large {
            font-size: 1.2rem;
          }
          .icon span {
            margin-left: 1rem;
          }
        `}</style>
      </Element>
    )
  }
}

export default Button;