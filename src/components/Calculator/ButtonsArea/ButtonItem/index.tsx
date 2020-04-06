import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
// @ts-ignore
import styles from './index.scss?module';

interface Props {
  isOperation: boolean,
  value: number | string,
  func: Function,
  isProcessing: boolean
}

@Component
export default class ButtonItem extends VueComponent<Props> {

  @Prop() private isOperation!: boolean;
  @Prop() private isProcessing!: boolean;
  @Prop() private value!: number | string;
  @Prop() private func!: Function;

  public handleButton = () => {
    const {func, value, isProcessing} = this;
    if (!isProcessing) {
      if (value === '=' || value === 'C') {
        func()
      } else {
        func(value);
      }
    }
  };

  render() {

    const { isOperation, value, handleButton, isProcessing } = this;

    return (
      <div
        class={`
        ${styles.buttonItem} 
        ${isOperation && styles.buttonItem_operation}
        ${isProcessing && styles.buttonItem_disabled}
        `}
        onclick={handleButton}
      >
        {value}
      </div>
    )
  }
}
