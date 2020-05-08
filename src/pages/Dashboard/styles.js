import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: #333;
`;

// export const HeaderContainer = styled.View`
export const HeaderContainer = styled(Animated.View)`
  height: 190px;
  background-color: #7159c1;
`;

export const ImageContent = styled(Animated.Image)`
  width: 100%;
  height: 190px;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled(Animated.Text)`
  font-size: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const ScrollViewContainer = styled.View`
  padding: 20px 0;
  flex: 1;
`;

export const FlatListContent = styled(FlatList)``;

export const Item = styled.View`
  padding: 20px;
  margin: 10px 20px;
  background-color: #7159c1;
  border-radius: 5px;
`;

export const TextContent = styled.Text`
  color: #fff;
  font-weight: 700;
  text-align: center;
`;