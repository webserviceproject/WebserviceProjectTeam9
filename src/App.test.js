import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutTheApp from './aboutTheApp';
import AboutUS from './aboutUS';
import ContactUS from './contactUS';
import { BeginMatching } from './BeginMatching';

configure({adapter: new Adapter()});

describe("testing", () =>{

  //  Test #1  
  test('render the ABOUT THE APP title', () => {
    const element = shallow(<AboutTheApp/>);
    expect(element.find('.howdoesitworks h1').text()).toContain("How does It Work");
  
  });

  // Test #2 
  test('render the ABOUT THE APP title', () => {
    const element = shallow(<AboutTheApp/>);
    expect(element.find('.benefitsoftheapp h1').text()).toContain("Benefits of the app");
  
  });

// Test #3
test("render the ABOUT THE APP title", () => {
  const element = shallow(<AboutUS/>);
  expect(element.find('.mission h2').text()).toContain("MISSION");
});
      
// Test #4
test("render text in our story", ()=>{
  const wrapper = shallow(<AboutUS/>);
  expect(wrapper.find('.ourstoryContent p').text()).toContain("Our team comprises of four individuals, each pursuing a master's degree in Software Engineering at");
});

// Test #5
test("render contact us title", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('.page-title h1').text()).toContain("Contact the Dev Team Here");
});

    // Test #6
test("render the mail link in contact us page", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('a').text()).toContain("Mail me here");
});

// Test #7
test("render contact us team number", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('.team9 h2').text()).toContain("This is Team9 player matching game development team");
});

// Test #8
test("render contact us team header", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('.section-title h2').text()).toContain("MEET THE TEAM MEMBERS");
});

// Test #9
test("render team member --- veeramma", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('.VeeraName h3').text()).toContain("Veeramma Boddapati");
});

// Test 10
test("render team member --- Sahith", () => {
  const element = shallow(<ContactUS/>);
  expect(element.find('.SahithName h3').text()).toContain("Sahith Vancha");
});


// Sprint2 testing

//  Test #11  
test('render the ABOUT THE APP time title', () => {
  const element = shallow(<AboutTheApp/>);
  expect(element.find('.insidetime h3').text()).toContain("Time");

});

// Test #12 
test('render the ABOUT THE APP quality title', () => {
  const element = shallow(<AboutTheApp/>);
  expect(element.find('.insidequality h3').text()).toContain("Quality");

});

// Test #13
test("render the BeginMatching", () => {
const element = shallow(<BeginMatching/>);
expect(element.find('.fname label').text()).toContain("First Name");
});
    
// Test #14
test("render BeginMatching", ()=>{
  const element = shallow(<BeginMatching/>);
  expect(element.find('.fname label').text()).toContain("First Name");

});

// Test #15
test("render BeginMatching", () => {
  const element = shallow(<BeginMatching/>);
  expect(element.find('.lname label').text()).toContain("Last Name");
});

  // Test #16
test("render the BeginMatching", () => {
  const element = shallow(<BeginMatching/>);
  expect(element.find('.rankLevel label').text()).toContain("Rank Level");
});

// Test #17
test("render BeginMatching", () => {
  const element = shallow(<BeginMatching/>);
  expect(element.find('.wins label').text()).toContain("Wins");
});

// Test #18
test("render BeginMatching", () => {  
  const element = shallow(<BeginMatching/>);
  expect(element.find('.numOfGames label').text()).toContain("number of Games");
});

// Test #19
test("render BeginMatching", () => {
  const element = shallow(<BeginMatching/>);
  expect(element.find('.attitude label').text()).toContain("Attitude");
});

// Test 20
test("render BeginMatching", () => {
const element = shallow(<BeginMatching/>);
expect(element.find('.tabnamecn h1').text()).toContain("Players List");
});

  })
 
  