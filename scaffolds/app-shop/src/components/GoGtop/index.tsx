import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './index.module.css';

function GoTop(props) {
  return (
    <View {...props} className={styles.container} >
      <Image className={styles.image} source={{ uri: 'https://gw.alicdn.com/imgextra/i3/O1CN01n2f0AC1epPGxAnq8d_!!6000000003920-2-tps-200-200.png' }} />
      <Text className={styles.text}>顶部</Text>
    </View>
  );
}

export default GoTop;
