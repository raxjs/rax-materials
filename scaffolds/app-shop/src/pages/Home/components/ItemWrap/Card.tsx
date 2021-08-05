import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

interface IProps {
  index: number;
  titleImage: string;
  items: Array<{
    tag?: {
      text: string;
      color: string;
    };
    image: string;
  }>;
}

function Card(props: IProps) {
  const { index, titleImage, items } = props;
  return (
    <View className={styles.container} style={index % 2 !== 0 ? { borderLeft: '1px solid #f2f2f2' } : {}}>
      <Image className={styles.title} source={{ uri: titleImage }} />
      <View className={styles.items}>
        {items.map((item) => {
          return (
            <View key={item.image} className={styles.item}>
              <Text x-if={item.tag} className={styles.tag} style={{ color: item.tag?.color }}>{item.tag?.text}</Text>
              <Image className={styles.image} source={{ uri: item.image }} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Card;
