/**
 * @jest-environment jsdom
 */


// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
//   });



import React from 'react';

import App from './client/components/App.js'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme'
import RelatedProducts from './client/components/RelatedProductsAndOutfits/RelatedProducts.jsx'
Enzyme.configure({ adapter: new Adapter() })


test('Renders Correctly', () => {
  const app = shallow(<App currentProductId='37313'/>)
  //console.log(app.currentProductId)
  expect(app).toMatchSnapshot();
})


// const clickFn = jest.fn();

// test('Re-renders App when clicking on related product correctly', () => {
//   const card = shallow(<RelatedProducts  onClick={clickFn}/>)
//   var nextButton = card.find('.carousal-next')
//   console.log(nextButton)
//   nextButton.simulate('click');

//   expect(clickFn).toHaveBeenCalled();
// })