import { createElement } from 'rax';
import View from 'rax-view';
import Base from './Base';
import Favorite from './Favorite';

import styles from './index.module.css';

function Header() {
  return (
    <View className={styles.container}>
      <Base />
      <Favorite />
    </View>
  );
}

export default Header;
