// Menu kopi
const coffeeMenu = [
  { 
    name: 'Espresso', 
    price: 'Rp15,000', 
    image: 'https://i.pinimg.com/564x/07/b7/e9/07b7e99bb01cca8732387d18919b2b4e.jpg' // URL Gambar Espresso
  },
  { 
    name: 'Latte', 
    price: 'Rp20,000', 
    image: 'https://i.pinimg.com/236x/6b/f0/63/6bf06398c094203a72d75178b1314677.jpg' // URL Gambar Latte
  },
  { 
    name: 'Cappuccino', 
    price: 'Rp20,000', 
    image: 'https://i.pinimg.com/236x/78/2c/d4/782cd4d2727ee1e8c46d4411c84606bf.jpg' // URL Gambar Cappuccino
  },
  { 
    name: 'Americano', 
    price: 'Rp18,000', 
    image: 'https://i.pinimg.com/236x/3c/37/f5/3c37f59000a30a49f049bbf1518d2627.jpg' // URL Gambar Americano
  },
];

// Fungsi untuk menampilkan menu kopi
function displayMenu() {
  const menuDiv = document.getElementById('coffee-menu');

  coffeeMenu.forEach(coffee => {
    const coffeeDiv = document.createElement('div');
    coffeeDiv.classList.add('coffee-item');

    const coffeeImage = document.createElement('img');
    coffeeImage.src = coffee.image;
    coffeeImage.alt = coffee.name;
    coffeeDiv.appendChild(coffeeImage);

    const coffeeName = document.createElement('h3');
    coffeeName.textContent = coffee.name;
    coffeeDiv.appendChild(coffeeName);

    const coffeePrice = document.createElement('p');
    coffeePrice.textContent = coffee.price;
    coffeeDiv.appendChild(coffeePrice);

    menuDiv.appendChild(coffeeDiv);
  });
}

// Menampilkan menu saat halaman dimuat
window.onload = displayMenu;
