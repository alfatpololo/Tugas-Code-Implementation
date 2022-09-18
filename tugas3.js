function divideAndSort(x) {
    if (typeof x == "number") {
      //Fungsi untuk merubah X ke String
      const toString = x.toString();
  
      // Merubah string pada parameter kedalam array menggunakan metode split (.split)
      const arrayX = toString.split("0");
      // Maka hasilnya akan menjadi "595656" "159466" "56"
  
      // Setelah berhasil menjadi 2 index ( terhitung dari 0-2) lalu split lagi hasil split sebelumnya agar terurai
      for (let i = 0; i < arrayX.length; i++) {
        arrayX[i] = arrayX[i].split("");
      }
  // split dan join
      for (let i = 0; i < arrayX.length; i++) {
        arrayX[i] = arrayX[i].sort().join("");
      }
  
      //join
      const hasilSorting = arrayX.join("");
      console.log(hasilSorting);
    }
  }
  divideAndSort(5956560159466056);