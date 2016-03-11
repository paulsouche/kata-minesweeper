export interface IBoardPosition {
  x: number;
  y: number;
}

export class BoardPosition implements IBoardPosition {
  constructor(public x: number, public y: number) { }
}

export class PositionState {
  isMine: boolean;

  constructor() {
    this.isMine = Math.random() > 0.8;
  }
}

export class Board {
  public positions: Map<BoardPosition, PositionState>;

  constructor(public width: number, public height: number) {
    this.positions = new Map<BoardPosition, PositionState>();
    (Object.keys(new Int8Array(width)).map(Number)).map((indexX: number) => {
      (Object.keys(new Int8Array(height)).map(Number)).map((indexY: number) => {
        this.positions.set(new BoardPosition(indexX, indexY), new PositionState());
      });
    });
  }

  private _findState(position: IBoardPosition) {
    var pos = this._findPosition(position);
    if (!!pos) {
      return this.positions.get(pos);
    }
    return null;
  }

  private _findPosition(position: IBoardPosition) {
    var iter = this.positions.keys(),
      hit = iter.next();
    while(!hit.done) {
      if (hit.value.x === position.x && hit.value.y === position.y) {
        break;
      }
      hit = iter.next();
    }
    return hit.value;
  }

  public mineAround(position:IBoardPosition): number {
    return NaN;
  }
}


