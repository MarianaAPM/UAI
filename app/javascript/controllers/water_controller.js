import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["wave", "loading", "uai"]

  connect() {
    const wave = this.waveTarget;
    let counter = 0

    const interval = setInterval(() => {
      counter++;
      wave.style.transform = "translate(0" + "," + (100 - counter) + "%)";
      this.loadingTarget.style.zIndex = 4
      this.loadingTarget.innerText = "site em construção"
      if (counter == 70) {
        clearInterval(interval);
        this.loadingTarget.innerHTML = "<div class='container-message'><img src='/images/logo.png' class='logo'><div class='message'><h4>para saber mais, entre em contato com a gente </h4><a href='https://contate.me/uaipiscinas'><p><i class='fa-brands fa-whatsapp'></i> (31)92009-3281</p></a></div></div>"
      }
    }, 60);
  }
}