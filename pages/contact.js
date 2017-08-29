import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Section from '../components/Section';
import Title from '../components/Title';
import Button from '../components/Button';

const ContactPage = () => (
  <PageWrapper>
    <Header
      title="Contact" />

    <Section>
      <Title
        text="Section Title"
        type="section"/>

      <Button
        text="Contact page Button"
        icon="square"
        iconColor="yellow" />
    </Section>
  </PageWrapper>
)

export default ContactPage;