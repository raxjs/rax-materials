import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

const MyComponent = (props) => {
  const { title = 'Title', description = 'Description' } = props;
  return (
    <View className="text-card">
      <Text className="title">{title}</Text>
      <Text className="description">{description}</Text>
    </View>
  );
};

export default MyComponent;
