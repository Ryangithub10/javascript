// membuat fungsi search array

function search(array, keyWord) {
  for (var i = 0; i < array.length; i++) {

    if (keyWord == array[i]) {
      return array[i];
    }

  }
}

var kota = [
  'jakarta',
  'bandung',
  'surabaya',
  'kalimantan'
];

var makanan = [
  'nasi goreng',
  'burger',
  'mie goreng',
  'bihun goreng',
  'kentuky',
  'kentang goreng'
];

var cariKota = search(kota, 'kalimantan');
var cariMakanan = search(makanan, 'kentang goreng');

console.log(cariKota);
console.log(cariMakanan);