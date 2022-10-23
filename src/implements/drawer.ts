import { I2048Drawer } from '../interfaces/drawer.interface';

export class Game2048Drawer implements I2048Drawer {
  /**
   * Number with console color
   */
  private NUMBERS: { [key: number]: string } = {
    2: '\x1b[37m\x1b[41m\x1b[1m2\x1b[0m',
    4: '\x1b[37m\x1b[42m\x1b[1m4\x1b[0m',
    8: '\x1b[37m\x1b[43m\x1b[1m8\x1b[0m',
    16: '\x1b[37m\x1b[44m\x1b[1m16\x1b[0m',
    32: '\x1b[37m\x1b[45m\x1b[1m32\x1b[0m',
    64: '\x1b[37m\x1b[46m\x1b[1m64\x1b[0m',
    128: '\x1b[37m\x1b[47m\x1b[1m128\x1b[0m',
    256: '\x1b[37m\x1b[41m\x1b[1m256\x1b[0m',
    512: '\x1b[37m\x1b[42m\x1b[1m512\x1b[0m',
    1024: '\x1b[37m\x1b[43m\x1b[1m1024\x1b[0m',
    2048: '\x1b[37m\x1b[44m\x1b[1m2048\x1b[0m',
  };

  /**
   * Add space to the number
   *
   * -If number < 10, add 3 spaces
   *
   * -If number < 100, add 2 spaces
   *
   * -If number < 1000, add 1 space
   *
   * @param number
   * @returns
   */
  private paddingNumber(number: number): string {
    if (number === 0) return '    ';

    const numberWithColor = this.NUMBERS[number];
    if (number < 10) {
      return `${numberWithColor}   `;
    }
    if (number < 100) {
      return `${numberWithColor}  `;
    }
    if (number < 1000) {
      return `${numberWithColor} `;
    }
    return numberWithColor;
  }

  draw(boards: number[][], scores: number, numberOfMoves: number): void {
    console.clear();
    console.log(`Score: ${scores} | Moves: ${numberOfMoves}`);
    for (let i = 0; i < boards.length; i++) {
      console.log(
        boards[i].map((number) => this.paddingNumber(number)).join(''),
      );
    }
  }

  drawLost(boards: number[][], scores: number, numberOfMoves: number): void {
    this.draw(boards, scores, numberOfMoves);
    console.log('You lost! 😭😭😭');
  }
  drawWin(boards: number[][], scores: number, numberOfMoves: number): void {
    this.draw(boards, scores, numberOfMoves);
    console.log('You win! 🎉🎉🎉');
  }
}
