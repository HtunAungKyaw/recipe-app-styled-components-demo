import React from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const light = "#fff";
  const dark = "#000";

  const recipes = [
    {
      name: "Ramen",
      info: "45 min | 2 servings",
      image: require("./assets/ramen.jpg"),
    },
    {
      name: "Sushi & Sashimi",
      info: "20 min | 2 servings",
      image: require("./assets/sashimi-sushi.jpg"),
    },
    {
      name: "Soba Noodle",
      info: "35 min | 2 servings",
      image: require("./assets/soba-noodle.jpg"),
    },
    {
      name: "Tempura Crabsticks",
      info: "15 min | 2 servings",
      image: require("./assets/tempura-crabsticks.jpg"),
    },
    {
      name: "Kare Raisu",
      info: "50 min | 2 servings",
      image: require("./assets/kare-raisu.jpg"),
    },
  ];

  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>*/
    <Container>
      <StatusBar barStyle="dark-content" />
      <RecipeBackground source={require("./assets/shrimp.jpg")} blurRadius={0}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color={light} />
              <Text style={{ marginLeft: 10 }}>Ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color={light} />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Spicy Shrimp
            </Text>
            <Divider />
            <Text bold>80 calories per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
          <Btn>
            <Text bold small>
              LEARN MORE
            </Text>
          </Btn>
        </SafeAreaView>
      </RecipeBackground>
      <RecipeContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark small>
          18 recipes available
        </Text>
        <Recipes showsVerticalScrollIndicator={false}>
          {recipes.map((recipe, index) => {
            return (
              <Recipe key={index}>
                <RecipeImage source={recipe.image} />
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <AntDesign name="hearto" size={18} color="#000" />
              </Recipe>
            );
          })}
        </Recipes>
      </RecipeContainer>
    </Container>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#fff")};

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size:32px;`;
      case large:
        return `font-size:20px`;
      case small:
        return `font-size:13px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
      case heavy:
        return `font-weight:700`;
    }
  }}
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: white;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Btn = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipeContainer = styled.View`
  margin-top: -25px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  flex: 1;
`;

const Recipes = styled.ScrollView`
  margin-top: 10px;
  margin-bottom: -16px;
`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;
