import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Header.module.css';

function Header() {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>必备工具</Text>
      <View className={styles.extra}>
        <Text className={styles.extraText}>查看全部工具</Text>
        <Image className={styles.arrow} source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN014Rz7lW1LDPimYq8rD_!!6000000001265-2-tps-200-200.png' }} />
      </View>
    </View>
  );
}

export default Header;
