import  { expect } from 'chai'
import CellState from '../CellState'
describe('CellState', () => {
  it('Should have an alive state', () => {
    expect(CellState.ALIVE).to.equal(1)
  })
  it('Should have a dead state', () => {
    expect(CellState.DEAD).to.equal(0)
  })
})
