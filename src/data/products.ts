import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Galaxy S23+ Ultra",
    price: 1000000,
    originalPrice: 12000000,
    image:
      "https://www.phonemart.ng/wp-content/uploads/2023/04/images-56.jpeg.webp",
    category: "smart-phones",
    badge: "HOT",
    discount: 17,
    rating: 4.8,
    reviews: 124,
    description: "The ultimate smartphone experience with pro-grade camera.",
  },
  {
    id: "2",
    name: "MacBook Pro M3",
    price: 2700000,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M3_Max/IMG_1008.JPG",
    category: "laptops",
    badge: "NEW",
    rating: 4.9,
    reviews: 86,
    description: "Supercharged for pros with the M3 chip.",
  },
  {
    id: "3",
    name: "AirPods 5th Generation",
    price: 200000,
    originalPrice: 262000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIkEABLvck8KTzaaEh_9drlM4bz0iE5ev72PnRZB_-A&s&ec=121585071",
    category: "airpods",
    badge: "SALE",
    discount: 9,
    rating: 4.7,
    reviews: 210,
    description: "Best-in-class audio with active noise cancellation.",
  },
  {
    id: "4",
    name: "Smartwatch 7",
    price: 409000,
    image:
      "https://techmall-images-repo.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/08/13082116/Samsung-Galaxy-watch-7.png",
    category: "smartwatches",
    badge: "NEW",
    rating: 4.6,
    reviews: 58,
    description: "Light on price, packed with features.",
  },
  {
    id: "5",
    name: "Headset Max 3rd Gen",
    price: 70000,
    originalPrice: 93000,
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/9508814/1.jpg?2211",
    category: "headphones",
    badge: "SALE",
    discount: 25,
    rating: 4.5,
    reviews: 99,
    description: "Studio-quality sound in a premium over-ear headset.",
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "smart-phones", name: "Smart Phones" },
  { id: "laptops", name: "Laptops" },
  { id: "airpods", name: "Airpods" },
  { id: "smartwatches", name: "Smartwatches" },
  { id: "headphones", name: "Headphones" },
  { id: "speaker", name: "Speaker" },
  { id: "smarttv", name: "SmartTV" },
  { id: "tablets", name: "Tablets" },
];
