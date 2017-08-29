import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Section from '../components/Section';
import Title from '../components/Title';
import IndexIntro from '../sections/IndexIntro';

/**
 * This boilerplate / starter serves (for me) a styleguide.
 * See how pages are easily created using components. More complex
 * page sections are broken down into smaller pieces. The idea is
 * to make them act as much like LEGO as possible. Each component
 * aims to show formatting, and just general suggestions of how
 * your preact app (static or not) may look like. Check out the
 * Header component, it's the most commented of the lot
 */

const IndexPage = () => (
  <PageWrapper>
    <Header
      title="NextPreact" />

    {/* Each section could even be made into a specific
      component. e.g. /sections/IndexIntro etc.
      that way we have pages that look like
      <PageWrapper>
        <IndexIntro />
        <IndexCarousel />
        <IndexShowcase />
        ...so on and so forth
      </PageWrapper>
    */}
    <IndexIntro />

    <Section
      wrap="full"
      variant="red">
      <Title text="A full width section" />
    </Section>
  </PageWrapper>
)

export default IndexPage;