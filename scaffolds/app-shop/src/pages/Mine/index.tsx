import { createElement } from 'rax';
import View from 'rax-view';
import Header from './components/Header';
import Order from './components/Order';
import Tools from './components/Tools';

import styles from './index.module.css';

function Mine() {
  return (
    <View className={styles.container}>
      <Header />
      <Order />
      <Tools />
    </View>
  );
}

export default Mine;
