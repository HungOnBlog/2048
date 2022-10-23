import { I2048Drawer } from '../interfaces/drawer.interface';

export class Game2048Drawer implements I2048Drawer {
  draw(boards: number[][], scores: number, numberOfMoves: number): void {
    throw new Error('Method not implemented.');
  }
  drawLost(boards: number[][], scores: number, numberOfMoves: number): void {}
  drawWin(boards: number[][], scores: number, numberOfMoves: number): void {}
}
