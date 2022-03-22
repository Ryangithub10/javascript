// membuat barisan bilangan prima

function primeLine(nilaiAwal, n) {
  while (nilaiAwal <= n) {
    if (nilaiAwal > 1) {
      if (
        nilaiAwal % 2 > 0 &&
        nilaiAwal % 3 > 0 &&
        nilaiAwal % 5 > 0
      ) {

        console.log(nilaiAwal);

      } else if (
        nilaiAwal === 2 ||
        nilaiAwal === 3 ||
        nilaiAwal === 5
      ) {

        console.log(nilaiAwal);

      }
    }
    nilaiAwal++;
  }
}

var n = 20;
var nilaiAwal = 1;

primeLine(nilaiAwal, n);
