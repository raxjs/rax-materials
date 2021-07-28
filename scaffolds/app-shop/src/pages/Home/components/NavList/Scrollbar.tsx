import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import { getInfoSync } from '@uni/system-info';
import { getBoundingClientRect } from '@uni/element';
import styles from './Scrollbar.module.css';

interface IProps {
  target: string;
  translateX: number;
}

function Scrollbar(props: IProps) {
  const [width, setWidth] = useState(0);

  const { target, translateX } = props;

  function init() {
    const { screenWidth } = getInfoSync();
    getBoundingClientRect(target).then((ret) => {
      setWidth(screenWidth / ret[0].width);
    });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.scrollbar}>
        <View
          className={styles.drag}
          style={{
            width: `${Math.round(width * 100)}%`,
            transform: `translateX(${translateX}rpx)`,
          }}
        />
      </View>
    </View>
  );
}

export default Scrollbar;
