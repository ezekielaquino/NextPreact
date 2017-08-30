import {Component} from 'react';
import Head from 'next/head';
import cssReset from '../components/_cssReset';

/**
 * This component just wraps all views,
 * including global styles (here we have reset),
 * and metas injected in <head>
 */

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        {this.props.children}


        {/* An example: we can also load stylesheets from another module */}
        <style jsx global>{cssReset}</style>
        <style jsx global>{`
          html {
            font-size: 20px;
          }
          body {
            font-family: 'Arial', sans-serif;
            -webkit-font-smoothing: antialiased;
          }
        `}</style>
      </div>
    )
  }
}

export default PageWrapper;