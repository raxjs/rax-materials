import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';

function Nav() {
  return (
    <View className={styles.nav}>
      <View className={styles.navItem}>
        111
      </View>
    </View>
  );
}

export default Nav;
