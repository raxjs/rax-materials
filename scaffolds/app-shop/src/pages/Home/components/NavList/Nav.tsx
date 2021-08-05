import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Nav.module.css';

interface IProps {
  image: string;
  text: string;
}

function Nav(props: IProps) {
  const { image, text } = props;
  return (
    <View className={styles.nav}>
      <Image className={styles.image} source={{ uri: image }} />
      <Text className={styles.text}>{text}</Text>
    </View>
  );
}

export default Nav;
