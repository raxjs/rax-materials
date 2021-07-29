import { createElement, useEffect, forwardRef, useImperativeHandle, useState } from 'rax';
import View from 'rax-view';
import { getInfoSync } from '@uni/system-info';
import { getBoundingClientRect } from '@uni/element';
import type { ScrollEvent } from 'rax-scrollview';
import styles from './Scrollbar.module.css';

interface IProps {
  target: string;
}
export interface IRefObject {
  handleTargetScroll: (e: ScrollEvent) => void;
}

function Scrollbar(props, ref) {
  const { target } = props;

  const [dragWidth, setDragWidth] = useState(0);
  const [dragTX, setDragTX] = useState(0);

  useImperativeHandle(ref, () => ({
    handleTargetScroll: (e) => {
      setDragTX(e.nativeEvent.contentOffset?.x / e.nativeEvent.contentSize?.width * 100);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      // 兼容异步渲染的小程序
      const { screenWidth } = getInfoSync();
      getBoundingClientRect(target).then((ret) => {
        setDragWidth(screenWidth / ret[0].width);
      });
    }, 0);
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.scrollbar}>
        <View
          className={styles.drag}
          style={{
            width: `${Math.round(dragWidth * 100)}%`,
            transform: `translateX(${dragTX}rpx)`,
          }}
        />
      </View>
    </View>
  );
}

export default forwardRef<IRefObject, IProps>(Scrollbar);
