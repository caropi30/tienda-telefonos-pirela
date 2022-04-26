const stockData = [
  {
    id: 1,
    name: "iPhone 12",
    brand: "Apple",
    image: "../../../assets/img/phones/apple/IPHONE_12.png",
    price: 0,
    stock: 5,
  },
  {
    id: 2,
    name: "V20",
    brand: "Vivo",
    image: "../assets/img/phones/vivo/VIVO_V20.png",
    price: 0,
    stock: 5,
  },
  {
    id: 3,
    name: "K41s",
    brand: "LG",
    image: "../assets/img/phones/lg/K41S.png",
    price: 0,
    stock: 5,
  },
  {
    id: 4,
    name: "Galaxy S20",
    brand: "Samsung",
    image: "../assets/img/phones/samsung/GALAXY_S20.png",
    price: 0,
    stock: 5,
  },
  {
    id: 5,
    name: "Redmi Note 9",
    brand: "Xiaomi",
    image: "../assets/img/phones/xiaomi/REDMI_NOTE_9.png",
    price: 0,
    stock: 5,
  },
  {
    id: 6,
    name: "Nokia 2.3",
    brand: "Nokia",
    image: "../assets/img/phones/nokia/NOKIA_2-3.png",
    price: 0,
    stock: 5,
  },
  {
    id: 7,
    name: "iPhone 12",
    brand: "Apple",
    image: "../assets/img/phones/apple/IPHONE_12.png",
    price: 0,
    stock: 5,
  },
  {
    id: 8,
    name: "V20",
    brand: "Vivo",
    image: "../assets/img/phones/vivo/VIVO_V20.png",
    price: 0,
    stock: 5,
  },
  {
    id: 9,
    name: "K41s",
    brand: "LG",
    image: "../assets/img/phones/lg/K41S.png",
    price: 0,
    stock: 5,
  },
  {
    id: 10,
    name: "Galaxy S20",
    brand: "Samsung",
    image: "../assets/img/phones/samsung/GALAXY_S20.png",
    price: 0,
    stock: 5,
  },
  {
    id: 11,
    name: "Redmi Note 9",
    brand: "Xiaomi",
    image: "./assets/img/phones/xiaomi/REDMI_NOTE_9.png",
    price: 0,
    stock: 5,
  },
  {
    id: 12,
    name: "Nokia 2.3",
    brand: "Nokia",
    image: "../assets/img/phones/nokia/NOKIA_2-3.png",
    price: 0,
    stock: 5,
  },
];

const getStock = new Promise((resolve) => {
  setTimeout(() => {
    resolve(stockData);
  }, 2000);
});

export default getStock;