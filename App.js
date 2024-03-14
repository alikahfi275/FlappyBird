import React from "react";
import { useWindowDimensions } from "react-native";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";

const App = () => {
  const { width, height } = useWindowDimensions();

  const bg = useImage(require("./assets/sprites/background-day.png"));
  const bird = useImage(require("./assets/sprites/yellowbird-upflap.png"));
  const pipe = useImage(require("./assets/sprites/pipe-green.png"));
  const pipeTop = useImage(require("./assets/sprites/pipe-green-top.png"));
  const base = useImage(require("./assets/sprites/base.png"));

  const pipeOffsite = -200;
  return (
    <Canvas style={{ width, height }}>
      {/* Background */}
      <Image image={bg} width={width} height={height} fit={"cover"} />

      {/* Pipes */}
      <Image
        image={pipeTop}
        width={103}
        height={640}
        x={width / 2}
        y={pipeOffsite - 320}
      />
      <Image
        image={pipe}
        width={103}
        height={640}
        x={width / 2}
        y={height - 320 + pipeOffsite}
      />

      <Image
        image={base}
        width={width}
        height={150}
        y={height - 75}
        x={0}
        fit={"cover"}
      />

      {/* Bird */}
      <Image
        image={bird}
        width={64}
        height={48}
        x={width / 4}
        y={height / 2 - 24}
      />
    </Canvas>
  );
};
export default App;
