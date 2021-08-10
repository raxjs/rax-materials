import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Slider from 'rax-slider';
import Link from '@/components/Link';

// mock data
import data from './data.json';

import styles from './index.module.css';

function Banner() {
  return (
    <View>
      <Slider
        className="slider"
        width={750}
        height={240}
        autoPlay
        loop
        showsPagination
        paginationStyle={{
          position: 'absolute',
          width: 750,
          height: 40,
          bottom: 20,
          left: 0,
          itemColor: 'rgba(255, 255, 255, 0.5)',
          itemSelectedColor: 'rgb(255, 80, 0)',
          itemSize: 16,
        }}
      >
        {data.map((item) => {
          return (
            <View key={item} className="itemWrap">
              <Link href={'/detail'}>
                <Image className={styles.image} source={{ uri: item }} />
              </Link>
            </View>
          );
        })}
      </Slider>
    </View>
  );
}

export default Banner;
