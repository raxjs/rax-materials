import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Title from './Title';

// mock data
import data from './data.json';

import styles from './Photos.module.css';

function Photos() {
  return (
    <View className={styles.container}>
      <Title name="买家秀(60)" />
      <View className={styles.wrap}>
        {data.photos.map((photo, index) => {
          return (
            <Image key={index} className={styles.image} source={{ uri: photo }} />
          );
        })}
      </View>
    </View>
  );
}

export default Photos;
