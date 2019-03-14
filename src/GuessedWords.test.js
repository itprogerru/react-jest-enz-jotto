import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';


const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount:3 }]
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps} />)
};

test('does not throw warning with expected props не выдает предупреждение с ожидаемым реквизитом', () => {
  checkProps(GuessedWords, defaultProps);
})

describe('if there are not words guessed', () => {
  let wrapper
  beforeEach(()=> {
    wrapper = setup({guessedWords: []});
  })
  test('render without error', ()=> {
    const component = findByTestAttr(wrapper, 'component-guessed-word');
    expect(component.length).toBe(1);
  });
  test('render instructions to guess a word', ()=> {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });


});

describe('if there are  words guessed', () => {
  let wrapper
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount:3 },
    { guessedWord: 'agile', letterMatchCount:1 },
    { guessedWord: 'party', letterMatchCount:5 },
    ]
  beforeEach(()=> {
    wrapper = setup({guessedWords});
  })

  test('render without error', ()=> {
    const component = findByTestAttr(wrapper, 'component-guessed-word');
    expect(component.length).toBe(1);
  });
  test('render "guessed words" section', ()=> {
    const guesssedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guesssedWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', ()=> {
    const guesssedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guesssedWordsNodes.length).toBe(guessedWords.length);
  });
});



