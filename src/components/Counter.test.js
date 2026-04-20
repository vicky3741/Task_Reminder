import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../store';
import HomeScreen from '../screens/HomeScreen';

/*
 * EXPERIMENT 5: Write unit test for react component using Jest and react testing library.
 */

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

describe('HomeScreen Component', () => {
  const renderWithRedux = (component) => {
    return render(
      <Provider store={store}>
        {component}
      </Provider>
    );
  };

  it('renders the task manager title', () => {*
    const { getByText } = renderWithRedux(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('My Task Manager')).toBeTruthy();
  });

  it('renders initial tasks from store', () => {
    const { getByText } = renderWithRedux(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Learn React Native')).toBeTruthy();
    expect(getByText('Master Redux')).toBeTruthy();
  });
});
