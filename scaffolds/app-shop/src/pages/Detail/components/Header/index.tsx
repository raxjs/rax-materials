import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Link from '@/components/Link';

import styles from './index.module.css';

function Header() {
  return (
    <View className={styles.container}>
      <View className={styles.button}>
        <Link href="/home">
          <Image className={styles.icon} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01U8ASos1gbKKc32hmM_!!6000000004160-2-tps-64-64.png' }} />
        </Link>
      </View>
      <View className={styles.button}>
        <Link href="/cart">
          <Image className={styles.icon} source={{ uri: 'https://img.alicdn.com/imgextra/i1/O1CN01lDjcPl1nAUQktdY1O_!!6000000005049-2-tps-64-64.png' }} />
        </Link>
      </View>
    </View>
  );
}

export default Header;
