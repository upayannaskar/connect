import { useAuth } from "@clerk/expo";
import { Image } from "expo-image";
import { Link, Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Link href={"/about"}>This is the about screen</Link>
      <Image
        source={
          "https://c.ndtvimg.com/2025-05/lrqqt5ng_virat-kohli-announces-retirement-from-test-cricket_625x300_12_May_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
        }
        style={{ width: 625, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
