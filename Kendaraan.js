function cekPlatNomor(plat) {
  // Ekstrak angka dari plat nomor
  const angka = plat.match(/\d+/g);

  if (!angka || angka.length === 0) {
    return 'Plat nomor tidak valid';
  }

  // Ambil angka terakhir dari bagian angka
  const angkaTerakhir = parseInt(angka[angka.length - 1]);

  // Cek ganjil atau genap dengan switch
  switch (true) {
    case (angkaTerakhir % 2 === 0):
      return `Plat ${plat} adalah Genap`;
    case (angkaTerakhir % 2 !== 0):
      return `Plat ${plat} adalah Ganjil`;
    default:
      return 'Terjadi kesalahan dalam pengecekan plat';
  }
}

console.log(cekPlatNomor("B 248 XYZ")); // Output: Genap
console.log(cekPlatNomor("D 1231 ABC")); // Output: Ganjil
