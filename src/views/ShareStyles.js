import { Platform } from 'react-native';

let stackNavigatorHeaderUnderline = () => {
  if (Platform.OS === 'android' && Platform.Version < 21) {
    return {borderBottomWidth: 0.5, borderBottomColor: '#efefef'};
  }
  return {}
};

export const ShareStyles = {
  stackNavigatorHeader: {
    backgroundColor: '#fff',
    ...stackNavigatorHeaderUnderline()
  },
  stackNavigatorHeaderTitle: {alignSelf: 'center'}
};