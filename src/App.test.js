
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';


it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div)
})


// it('Testing render planes function', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.instance().renderPlanes()).toEqual(True);
// })

it('Testing render planes function', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.instance().renderPages()).toEqual(True);
})

// it('input fields should be filled correctly', () => {
//   const searchInput = App.find('.search-field');
//   searchInput.value = "Dubai";
//   expect(passwordInput.value).toBe('Dubai');
// })

// import { render, screen, within } from "@testing-library/react"
// it("should render list of 5 fruits", () => {
//   render(<App />)
//   const list = screen.getByRole("list", {
//     name: /fruits/i,
//   })
//   const { getAllByRole } = within(list)
//   const items = getAllByRole("listitem")
//   expect(items.length).toBe(5)
// })



// it('Does click event', () => {
//   const div = document.createElement("div");
  
//   const { container } = ReactDOM.render(<App/>, div)

//   fireEvent.click(container.querySelector('.list'));

// });

// it("should update state on click", () => {
//   const changeSize = jest.fn();
//   const wrapper = mount(<App onClick={changeSize} />);
//   const handleClick = jest.spyOn(React, "useState");
//   handleClick.mockImplementation(size => [size, changeSize]);

//   wrapper.find("#para1").simulate("click");
//   expect(changeSize).toBeCalled();
// });

// const handleclick = require('../handleclick');

// test("test handleclick", () => {
//     expect(unCamelCase("camelCase")).toBe("Camel Case")
//     expect(unCamelCase("moreThanTwoWords")).toBe("More Than Two Words")
//     expect(unCamelCase("symb0lsAndNumber$")).toBe("Symb0ls And Number$")
// })

// import { shallow } from 'enzyme';
// import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// test('click', () => {
//   // render(
//   //   <div>
//   //     <label htmlFor="checkbox">Check</label>
//   //     <input id="checkbox" type="checkbox" />
//   //   </div>,
//   // )

//   userEvent.click(screen.getByText('1'))
//   expect(screen.getByLabelText('1')).toBeChecked()
// })

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

// describe('App', () => {
//   it('Should be true', () => {
//      const test = true;
//      expect(test).toBe(true);
//   });
// });

// let wrapper;
// // const props = {
// //   // Your props goes here..
// // };
// // beforeEach(() => {
// //   wrapper = shallow(<App/>);
// // });

//   it('should check `componentDidMount()`', () => {
//     const instance = wrapper.instance(); // you assign your instance of the wrapper
//     jest.spyOn(instance, 'randomFunction'); // You spy on the randomFunction
//     instance.componentDidMount();
//     expect(instance.randomFunction).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
//   });