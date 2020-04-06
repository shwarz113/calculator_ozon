import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import Display from "./Display";
import ButtonsArea from "./ButtonsArea";
// @ts-ignore
import styles from './index.scss?module';

interface Props {
  buffer: Array<string|number>,
  result: number,
  isProcessing: boolean,
  clean: Function,
  makeResult: Function,
  pushNumberOrOperation: Function
}

@Component
export default class Calculator extends VueComponent<Props> {

  @Prop() private buffer!: Array<string|number>;
  @Prop() private result!: number;
  @Prop() private isProcessing!: boolean;
  @Prop() private clean!: Function;
  @Prop() private makeResult!: Function;
  @Prop() private pushNumberOrOperation!: Function;

  render() {

    return (
      <div class={`${styles.calculator}`}>
        <Display
          buffer={this.buffer}
          result={this.result}
        />
        <ButtonsArea
          isProcessing={this.isProcessing}
          clean={this.clean}
          makeResult={this.makeResult}
          pushNumberOrOperation={this.pushNumberOrOperation}
        />
      </div>
    )
  }
}
