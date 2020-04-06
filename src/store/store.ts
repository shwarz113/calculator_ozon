import { Module } from 'vuex-simple';
import {CalculatorMutations} from './modules/calculatorMutations';

export class MyStore {

  @Module()
  public calculator = new CalculatorMutations();

}
