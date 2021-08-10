import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Title.module.css';

interface IProps {
  name: string;
}

function Title(props: IProps) {
  return (
    <View className={styles.title}>
      <Text className={styles.titleText}>{props.name}</Text>
      <View className={styles.extra}>
        <Text className={styles.extraText}>查看全部</Text>
        <Image className={styles.icon} source={{ uri: 'https://gw.alicdn.com/imgextra/i2/O1CN01Lnk0v51qhPkpLfTww_!!6000000005527-2-tps-64-64.png' }} />
      </View>
    </View>
  );
}

export default Title;
