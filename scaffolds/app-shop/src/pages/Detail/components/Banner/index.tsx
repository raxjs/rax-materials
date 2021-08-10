import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Slider from 'rax-slider';

// mock data
import data from './data.json';

import styles from './index.module.css';

function Banner() {
  const [index, setIndex] = useState(1);

  function handleChange(e) {
    setIndex(Number(e.index) + 1);
  }

  return (
    <View className={styles.container}>
      <Slider
        className="slider"
        width={750}
        height={750}
        loop={false}
        showsPagination={false}
        onChange={handleChange}
      >
        {data.map((item) => {
          return (
            <View key={item} className="itemWrap">
              <Image className={styles.image} source={{ uri: item }} />
            </View>
          );
        })}
      </Slider>
      <View className={styles.pagination}>
        <Text className={styles.paginationText}>{index}/{data.length}</Text>
      </View>
    </View>
  );
}

export default Banner;
