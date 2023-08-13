export default {
  el(id: string) {
    return document.querySelector<HTMLAudioElement>(id)!;
  },
  fire() {
    this.el("#aFire").play();
  },
  start() {
    // console.log(document.querySelector('body'))
    this.el("#aStart").play();
  },
  blast() {
    this.el("#aBlast").play();
  },
};
