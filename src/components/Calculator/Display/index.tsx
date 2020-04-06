import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
// @ts-ignore
import styles from './index.scss?module';

interface Props {
  buffer: Array<string|number>,
  result: number
}

@Component
export default class Display extends VueComponent<Props> {

  @Prop() private buffer!: Array<string|number>;
  @Prop() private result!: number;

  render() {
    const {buffer, result} = this;

    return (
      <div class={styles.display}>
        <div class={styles.display__buffer}>{buffer.join(' ')}</div>
        <div class={styles.display__result}>{!!result && '='} {result}</div>
      </div>
    )
  }
}
