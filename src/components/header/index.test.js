import React from 'react';
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import Header from './index';

test('check Header component', () => {
  render(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
  )
})
