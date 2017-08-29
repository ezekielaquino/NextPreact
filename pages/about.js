import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';

const AboutPage = () => (
  <PageWrapper>
    <Header
      title="About" />

    <Section>
      <Title
        text="About"
        type="main"/>

      <Button
        text="About Button"
        icon="triangle"
        iconColor="pink"/>
    </Section>
  </PageWrapper>
)

export default AboutPage;