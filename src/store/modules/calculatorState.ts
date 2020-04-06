import { State } from 'vuex-simple';

export class CalculatorState {
  @State()
  public buffer: Array<string|number> = [];
  @State()
  public result: number = 0;
  @State()
  public currentOperation: string = '';
  @State()
  public isProcessing: boolean = false;
  @State()
  public numberValue: number | null = null;
}
