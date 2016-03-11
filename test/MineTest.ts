import * as chai from 'chai';
import {Board} from '../src/Mine';

var expect = chai.expect;
describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(8, 8);
  });

  it('should generate a board', () => {
    expect(board.positions.size).to.equal(64);
  });
});