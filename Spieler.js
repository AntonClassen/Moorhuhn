
class Spieler {
  constructor(name) {
    this.x = mouseX;
    this.y = mouseY;
    this.name = name;
    this.punktzahl = 0;
    
  }
  
  draw(){
    scope()
  }
  
  scope(){
    stroke('black')
    circle(mouseX, mouseY, 20);
    circle(mouseX, mouseY, 4)
    line(mouseX, mouseY - 10, mouseX, mouseY + 10)
    line(mouseX - 10, mouseY, mouseX + 10, mouseY)
  }

  update() {
    this.x = mouseX;
    this.y = mouseY;
  }

  schießen(fliegendesHuhn) {
    if (mouseIsPressed == true) {
      if (
        fliegendesHuhn.x <= mouseX &&
        mouseX <= fliegendesHuhn.x + 5 * fliegendesHuhn.größe &&
        fliegendesHuhn.y <= mouseY &&
        mouseY <= fliegendesHuhn.y + 5 * fliegendesHuhn.größe
      ) {
        fliegendesHuhn.isShot();
        this.punktzahl = this.punktzahl + fliegendesHuhn.punkte;

        //print("Treffer :)", this.punktzahl);
      } else {
        //print("kein Treffer :(", this.punktzahl);
      }
    } 
  }
}
