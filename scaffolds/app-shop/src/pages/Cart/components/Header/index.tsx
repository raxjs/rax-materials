import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';

function Header() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>购物车</Text>
      <Text className={styles.extra}>管理</Text>
    </View>
  );
}

export default Header;
