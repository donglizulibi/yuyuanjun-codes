import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankTop from "./static/images/tank/top.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import bullet from "./static/images/bullet/bullet.jpg";

export default {
  canvas: {
    width: 900,
    height: 600,
  },
  straw: {
    num: 120,
  },
  wall: {
    num: 30,
  },
  water: {
    num: 30,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 1,
  },
  bullet: {
    width: 4,
    height: 4,
  },
  timeout: 20,
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
    bullet,
  },
};
