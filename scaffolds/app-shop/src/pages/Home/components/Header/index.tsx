import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Text from 'rax-text';

import styles from './index.module.css';

function Header() {
  return (
    <View className={styles.header}>
      <Image className={styles.logo} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01l2ZYVg1EL0ylPHIJH_!!6000000000334-2-tps-63-48.png' }} />
      <View className={styles.searcher}>
        <Image className={styles.searcherIcon} source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN01QW41YX1aiIf7nyqGi_!!6000000003363-2-tps-200-200.png' }} />
        <Text className={styles.searcherText} >寻找宝贝店铺</Text>
      </View>
    </View>
  );
}

export default Header;
