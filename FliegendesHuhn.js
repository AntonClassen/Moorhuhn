let imgHuhn;
class FliegendesHuhn {
  constructor() {
    this.y = random(100, 400);
    this.status = "lebendig"; //oder "tot", oder "outOfMap"
    this.speed = int(random(-7, 7));
    this.größe = int(random(2, 10));
    this.punkte = this.speed + 15 - this.größe;
    this.x = this.positionX();
    this.img = imgHuhn.get();
  }
  static preload() {
    imgHuhn = loadImage("flughuhn.jpg");
  }

  draw() {
    this.img.resize(this.größe * 5, this.größe * 5);
    stroke("white");
    rect(this.x, this.y, 5 * this.größe, 5 * this.größe);
    image(this.img, this.x, this.y);
  }

  fliegen() {
    this.x = this.x + this.speed;
  }

  isShot() {
    this.x = -50;
    this.y = -50;
    this.speed = 0;
    this.status = "tot";
  }

  positionX() {
    if (this.speed < 0) {
      return 1000;
    } else if (this.speed == 0) {
      this.status = "outOfMap";
      this.x = -100;
      this.y = -100;
    } else {
      
      return 0;
    }
  }

  outOfMap() {
    if (
      (this.x > 1000 && this.status == "lebendig") ||
      (this.x < 0 && this.status == "lebendig")
    ) {
      this.x = -100;
      this.y = -100;
      this.speed = 0;
      this.status = "outOfMap";
      this.punkte = 0;
    }
  }
}
