import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import styles from './Avatar.module.css';

function Avatar() {
  return (
    <View className={styles.container}>
      <Image className={styles.crown} source={{ uri: 'https://gw.alicdn.com/tfs/TB103uFg49YBuNjy0FfXXXIsVXa-60-60.png?getAvatar=avatar_40x40q90_.webp' }} />
      <View className={styles.avatar}>
        <Image className={styles.user} source={{ uri: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg' }} />
      </View>
    </View>
  );
}

export default Avatar;
