import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function HeatHackers() {
  const products = [
    {
      name: "Smart Portable Neck Fan",
      description: "Hands-free wearable fan for summer heat relief.",
      image: "/images/neck-fan.jpg",
      link: "https://www.amazon.com/dp/B0BXYZ1234?tag=youraffid",
      price: "$27.99"
    },
    {
      name: "Mini Outdoor Projector",
      description: "Perfect for backyard movie nights and summer travel.",
      image: "/images/mini-projector.jpg",
      link: "https://www.amazon.com/dp/B0CXYZ5678?tag=youraffid",
      price: "$79.99"
    },
    {
      name: "Inflatable Pool Float Lounger",
      description: "Ultimate comfort in the pool with a built-in cooler.",
      image: "/images/pool-float.jpg",
      link: "https://www.amazon.com/dp/B08XYZ4321?tag=youraffid",
      price: "$34.99"
    },
    {
      name: "Waterproof Bluetooth Speaker",
      description: "Loud, bass-rich sound for beach or poolside fun.",
      image: "/images/bluetooth-speaker.jpg",
      link: "https://www.amazon.com/dp/B07XYZ0987?tag=youraffid",
      price: "$49.99"
    },
    {
      name: "Cold Brew Maker",
      description: "Portable cold brew coffee maker for travel and summer mornings.",
      image: "/images/cold-brew.jpg",
      link: "https://www.amazon.com/dp/B08XYZ6543?tag=youraffid",
      price: "$22.99"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <Card key={index} className="rounded-2xl shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <Link href={product.link} target="_blank">
              <Button className="w-full">Buy Now</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
