import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["wave", "loading", "uai"]

  connect() {
    const wave = this.waveTarget;
    let counter = 0

    const interval = setInterval(() => {
      counter++;
      wave.style.transform = "translate(0" + "," + (100 - counter) + "%)";
      this.loadingTarget.innerText = "estamos em construção"
      if (counter == 70) {
        clearInterval(interval);
        this.loadingTarget.innerHTML = "<img src='/images/logo.png' class='teste'>"
        this.loadingTarget.style.zIndex = 4
      }
    }, 60);
  }
}