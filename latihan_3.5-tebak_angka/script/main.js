let pertanyaan = true;

while (pertanyaan) {
  if (pertanyaan == false) {
    alert("Tebak angka dari 1 - 10" + "\nKamu punya 3 kesempatan");
  }

  const angka = Math.random() * 10;
  const computer = Math.ceil(angka);

  for (let kesempatan = 3; kesempatan >= 1; kesempatan--) {
    const player = prompt("Masukkan angka tebakan!");

    if (player == computer) {
      if (player == computer) {
        kesempatan = 0;
      }
      alert("Anda benar!" + "\nAngka yang dicari adalah : " + computer);
    } else if (kesempatan == 1) {
      alert(`Kesempatan anda habis!\nAngka yang dicari adalah : ${computer}`);
    } else {
      if (player < computer) {
        alert(`Terlalu RENDAH!\nAyo masih ada ${kesempatan - 1} kesempatan.`);
      } else {
        alert(`Terlalu TINGGI!\nAyo masih ada ${kesempatan - 1} kesempatan.`);
      }
    }
  }

  pertanyaan = confirm("Ingin bermain kembali?🤩");
}
alert("Terimakasih sudah bermain😍");
