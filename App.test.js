import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { render, screen } from '@testing-library/react';



describe("attributes", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);

 

})


// it('uses the right homepage', () => {
//     const app = new App()
//     expect(app.homepage).toEqual("github.com/facebookincubator/create-react-app")
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });


it('get the right color scheme for the environment' , () => {
 const app = new App()
 expect(app.colorScheme()).toequal("green")

})

})


it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});