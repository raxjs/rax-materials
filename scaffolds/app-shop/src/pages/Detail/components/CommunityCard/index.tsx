import { createElement } from 'rax';
import View from 'rax-view';
import Comment from './Comment';
import Photos from './Photos';
import AskAll from './AskAll';

import styles from './index.module.css';

function CommunityCard() {
  return (
    <View className={styles.container}>
      <Comment />
      <Photos />
      <AskAll />
    </View>
  );
}

export default CommunityCard;
