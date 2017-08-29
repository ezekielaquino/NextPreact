import {Component} from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    wrap: 'default',
    variant: 'default'
  }

  static PropTypes = {
    wrap: PropTypes.string,
    variant: PropTypes.string
  }

  render() {
    const {wrap, variant} = this.props;

    return (
      <section className={variant}>
        <div
          className={wrap}>
          {this.props.children}
        </div>


        <style jsx>{`
          section {
            width: 100%;
            border-bottom: 2px solid red;
          }
          section.default {
            background: white;
            color: black;
          }
          section.red {
            background: red;
            color: white;
          }
          div {
            margin: 0 auto;
            padding: 1rem;
          }
          div.default {
            width: 80vw;
          }
          @media (max-width: 600px) {
            .default {
              width: 90vw;
            }
          }
          div.full {
            width: 100%;
          }
        `}</style>
      </section>
    )
  }
}

export default Section;