import { createElement, useRef } from 'rax';
import View from 'rax-view';
import ScrollView from 'rax-scrollview';
import Nav from './Nav';
import Scrollbar, { IRefObject } from './Scrollbar';

import styles from './index.module.css';

function NavList() {
  const scrollbarRef = useRef<IRefObject>(null);

  const handleScroll = (e) => {
    scrollbarRef.current?.handleTargetScroll(e);
  };

  return (
    <View className={styles.navList}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <View className={styles.list} id="navList">
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品1" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品2" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品3" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品4" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品5" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品6" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品7" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品8" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品9" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品10" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品11" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品12" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品13" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品14" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品15" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品16" />
          </View>
          <View>
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品17" />
            <Nav image="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png" text="天马新品18" />
          </View>
        </View>
      </ScrollView>
      <Scrollbar ref={scrollbarRef} target="#navList" />
    </View>
  );
}

export default NavList;
