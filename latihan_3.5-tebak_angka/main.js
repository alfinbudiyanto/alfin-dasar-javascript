alert("Tebak angka dari 1 - 10" + "\nKamu punya 3 kesempatan");

// angka yang digenerate
const angka = Math.random() * 10;
const computer = Math.ceil(angka);
// console.log(`angka tebakan : ${computer}`);

// kesempatan user menebak
let kesempatan = 2;

// untuk input user
for (kesempatan; kesempatan > 0; kesempatan--) {
  const player = prompt("Masukkan angka tebakan!");

  if (player) {
    player;
    // console.log(`kesempatan menebak : ${kesempatan}`);
  }

  if (player == computer) {
    alert("Anda benar!" + "\nAngka yang dicari adalah : " + computer);
  } else if (kesempatan == 0) {
    alert("Kesempatan anda habis!");
  } else {
    if (player < computer) {
      alert("Terlalu RENDAH!" + `\nAyo masih ada ${kesempatan} kesempatan.`);
    } else {
      alert("Terlalu TINGGI!" + `\nAyo masih ada ${kesempatan} kesempatan.`);
    }
  }
}
