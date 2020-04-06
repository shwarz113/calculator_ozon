import { Component, Vue } from 'vue-property-decorator';
import { MyStore } from '@/store/store';
import {useStore} from "vuex-simple";
import {store} from "@/store/index";
import Calculator from './components/Calculator';
import './App.scss'

@Component
export default class App extends Vue {

  public store: MyStore = useStore(store);

  render() {
    return (
      <div id="app">
        <Calculator
          buffer={this.store.calculator.buffer}
          result={this.store.calculator.result}
          isProcessing={this.store.calculator.isProcessing}
          clean={this.store.calculator.cleanEverything}
          makeResult={this.store.calculator.makeResult}
          pushNumberOrOperation={this.store.calculator.pushNumberOrOperation}
        />
      </div>
    )
  }
}
