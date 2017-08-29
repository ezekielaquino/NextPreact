import {Component} from 'react';
import Link from 'next/link';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';

class IndexIntro extends Component {
  render() {
    return (
      <Section>
        <Title
          type="main"
          text="Title Component"/>

        <Title
          text="Section Title"
          type="section"/>

        <Title
          text="Default title"/>

        <Link href="/about">
          <a>
            <Button
              text="Go to about"
              type="link"/>
          </a>
        </Link>

        <Button
          text="A Sample Button Component" />
      </Section>
    )
  }
}

export default IndexIntro;