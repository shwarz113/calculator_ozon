import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import ButtonItem from "./ButtonItem";
// @ts-ignore
import styles from './index.scss?module';

interface Props {
  isProcessing: boolean,
  clean: Function,
  makeResult: Function,
  pushNumberOrOperation: Function
}

@Component
export default class ButtonsArea extends VueComponent<Props> {

  @Prop() private isProcessing!: boolean;
  @Prop() private clean!: Function;
  @Prop() private makeResult!: Function;
  @Prop() private pushNumberOrOperation!: Function;

  private buttonsArray = [
    {isOperation: false, value: 7, func: this.pushNumberOrOperation},
    {isOperation: false, value: 8, func: this.pushNumberOrOperation},
    {isOperation: false, value: 9, func: this.pushNumberOrOperation},
    {isOperation: true, value: 'C', func: this.clean},
    {isOperation: false, value: 4, func: this.pushNumberOrOperation},
    {isOperation: false, value: 5, func: this.pushNumberOrOperation},
    {isOperation: false, value: 6, func: this.pushNumberOrOperation},
    {isOperation: true, value: '-', func: this.pushNumberOrOperation},
    {isOperation: false, value: 1, func: this.pushNumberOrOperation},
    {isOperation: false, value: 2, func: this.pushNumberOrOperation},
    {isOperation: false, value: 3, func: this.pushNumberOrOperation},
    {isOperation: true, value: '+', func: this.pushNumberOrOperation},
    {isOperation: false, value: 0, func: this.pushNumberOrOperation},
    {isOperation: true, value: '=', func: this.makeResult}
  ];

  render() {

    return (
      <div class={`${styles.buttonsArea}`}>
        {
          this.buttonsArray.map(({isOperation, value, func}) => (
            <ButtonItem
              isOperation={isOperation}
              value={value}
              func={func}
              isProcessing={this.isProcessing}
            />
          ))
        }

      </div>
    )
  }
}
