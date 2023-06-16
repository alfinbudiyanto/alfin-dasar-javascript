const jmlAngkot = 10;
const angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}
