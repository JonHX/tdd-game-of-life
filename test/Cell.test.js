import { expect } from 'chai'
import Cell from '../Cell'
import CellState from '../CellState'

describe('Cell', () => {
  it('Should be initialized with a cellState of alive', () => {
    const cell = new Cell(CellState.ALIVE)
    expect(cell.state).to.equal(CellState.ALIVE)
  })
  it('Should be initialized with a cellState of dead', () => {
    const cell = new Cell(CellState.DEAD)
    expect(cell.state).to.equal(CellState.DEAD)
  })
  it('Should die if it has fewer than 2 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith0Neighbour = cell.getNextState(0)
    expect(nextStateWith0Neighbour).to.equal(CellState.DEAD)
    const nextStateWith1Neighbour = cell.getNextState(1)
    expect(nextStateWith1Neighbour).to.equal(CellState.DEAD)
  })
  it('Should live with 2 or 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith2neighbours = cell.getNextState(2)
    expect(nextStateWith2neighbours).to.equal(CellState.ALIVE)

    const nextStateWith3neighbours = cell.getNextState(3)
    expect(nextStateWith3neighbours).to.equal(CellState.ALIVE)
  })

  it('should die with more than 3 neighbours', () => {
    const cell = new Cell(CellState.ALIVE)
    const nextStateWith4neighbours = cell.getNextState(4)
    expect(nextStateWith4neighbours).to.equal(CellState.DEAD)

    const nextStateWith5neighbours = cell.getNextState(5)
    expect(nextStateWith5neighbours).to.equal(CellState.DEAD)
  })

  it('Should come alive with exactly 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD)
    const nextStateWith3neighbours = cell.getNextState(3)
    expect(nextStateWith3neighbours).to.equal(CellState.ALIVE)
  })
})


RESUME AT 35MINUTES********* https://www.youtube.com/watch?v=JB3OkBdP_eM
