import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    <h2>{faq.title}</h2>
    <p>{faq.descsription}</p>
  </Container>
);

export default Faq;
