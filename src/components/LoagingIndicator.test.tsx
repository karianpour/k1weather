import React from 'react';
import { render, screen } from '../test-utils';
import LoagingIndicator from './LoagingIndicator';

test('renders loading indicator', () => {
  render(
    <LoagingIndicator />
  );
});
