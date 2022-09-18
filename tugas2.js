// const harga = 0;
// const potongan = 0;
// const biayaAntar = 0;
// const pajak = 0;
// const voucher = "";
// const jarak = 0;
// const promo = 0;

// const subTotal = harga - potongan + biayaAntar + pajak;


// console.log("harga " + harga);
// console.log("potongan " + potongan);
// console.log("biaya antar " + biayaAntar);
// console.log("pajak " + pajak);
// console.log("subtotal " + subTotal);
// console.log("promo " + promo);


const pijarFood = (harga, voucher, jarak, pajak) => {
    let subTotal;
    let discount;
    const ongkir = jarak <= 2 ? 5000 : (jarak - 2) * 3000 + 5000;
    const tax = pajak == true ? harga * 0.05 : 0;
  
  
    if (voucher == false) {
      subTotal = harga + ongkir + tax;
  
    } else if (voucher == 'PIJARFOOD5') {
      discount = 0.5 * harga;
      if (harga >= 50000) {
          if (discount >= 50000)
            subTotal = harga + ongkir + tax - 50000;
              else{
            subTotal = harga + ongkir + tax - discount;
  
          }
        } else if (harga < 50000) {
          subTotal = harga + ongkir + tax;
  
      }
    } else if (voucher == 'DITRAKTIRPIJAR') {
      discount = 0.6 * harga;
      if (harga >= 25000) {
          if (discount >= 30000) {
              subTotal = harga + ongkir + tax - 30000;
  
          } else  {
              subTotal = harga + ongkir + tax - discount;
  
          }
  
      }
    } else {
      return 'Kode Voucher tidak ada';
    }
  return console.log(`Harga       = ${harga}
  Discount    = ${discount}
  Biaya Antar = ${ongkir}
  Pajak       = ${tax}
  Subtotal    = ${subTotal}`)
  };
  
  pijarFood(60000, 'PIJARFOOD5', 2, true) 