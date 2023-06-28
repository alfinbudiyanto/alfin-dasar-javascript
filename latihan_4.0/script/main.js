let penumpang = ["Alfin", undefined, "Sandhika"];

const tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang) {
    penumpang.push(namaPenumpang);

    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
  }
};

tambahPenumpang();
