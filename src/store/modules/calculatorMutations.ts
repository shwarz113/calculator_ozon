import { Mutation } from 'vuex-simple';
import {CalculatorState} from "@/store/modules/calculatorState";

export class CalculatorMutations extends CalculatorState {
  @Mutation()
  public cleanEverything() {
    this.buffer = [];
    this.result = 0;
    this.currentOperation = '';
    this.isProcessing = false;
    this.numberValue = null;
  }
  @Mutation()
  public async makeResult() {
    this.isProcessing = true;
    if (isValidbuffer(this.buffer)) {
     await new Promise(resolve => setTimeout(()=>{
       this.result = parseBufferAndGetResult(this.buffer);
       this.buffer = [this.result];
       this.isProcessing = false;
       resolve();
     }, 2000));
    } else {
      this.isProcessing = false;
    }
  }
  @Mutation()
  public pushNumberOrOperation(value: number | string) {
    if (typeof value === 'string') {
      if(typeof this.buffer[this.buffer.length-1] === 'string') {
        this.buffer.pop();
      }
      this.buffer.push(value);
    }
    if (typeof value === 'number') {
      if (typeof this.buffer[this.buffer.length-1] === 'number') {
        const prevNumber = this.buffer[this.buffer.length-1];
        const newNumber = Number.parseInt(prevNumber.toString() + value);
        this.buffer.pop();
        this.buffer.push(newNumber);
      } else {
        this.buffer.push(value);
      }
    }
  }
}

const parseBufferAndGetResult = (buffer: Array<string|number>): number => {
  const res = buffer.reduce((accum, el, index) => {
    if (typeof el === 'number') {
      accum.result = accum.operation === '+' || index === 0 ?
        accum.result + el :
        accum.result - el;
    } else {
      accum.operation = el;
    }
    return accum
  }, {result: 0, operation: ''});
  return res.result;
};

const isValidbuffer = (buffer: Array<string|number>): boolean =>
  !!(buffer && buffer.length && typeof buffer[buffer.length-1] === 'number');
