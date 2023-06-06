import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
export default {
  canvas: {
    width: 900,
    height: 600,
  },
  straw: {
    num: 90,
  },
  wall: {
    num: 60,
  },
  water: {
    num: 60,
  },
  steel: {
    num: 50,
  },
  tank: {
    num: 10,
  },
  timeout: 5,
  model: {
    width: 30,
    height: 30,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankLeft,
    tankTop,
    tankBottom,
    tankRight,
  },
};
