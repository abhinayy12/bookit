import axios from "axios";
import { Experience } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
export const api = axios.create({ baseURL });

const MOCK = !process.env.NEXT_PUBLIC_API_BASE; // true until backend ready

const mock: Experience[] = [
    {
      id: "kayak-001",
      title: "Kayaking",
      location: "Udupi, Karnataka",
      price: 999,
      images: ["/kayak1.png"],
      description:
        "Curated small-group experience. Certified guide. Safety first with gear included. Helmet and life jackets along with an expert will accompany in kayaking.",
      days: [],
    },
    {
      id: "sunrise-001",
      title: "Nandi Hills Sunrise",
      location: "Bangalore",
      price: 899,
      images: ["/mock/sunrise.jpg"],
      description:
        "Experience a serene sunrise from the top of Nandi Hills. Includes travel, breakfast, and guided trek.",
      days: [],
    },
    {
      id: "coffee-001",
      title: "Coffee Trail",
      location: "Coorg",
      price: 1299,
      images: ["/mock/coffee1.jpg"],
      description:
        "Walk through aromatic coffee plantations in Coorg. Learn about the bean-to-brew process with local guides.",
      days: [],
    },
    {
      id: "kayak-002",
      title: "Kayaking",
      location: "Udupi, Karnataka",
      price: 999,
      images: ["/mock/kayak2.jpg"],
      description:
        "An adventurous kayaking experience with professional trainers and top safety gear.",
      days: [],
    },
    {
      id: "sunrise-002",
      title: "Nandi Hills Sunrise",
      location: "Bangalore",
      price: 899,
      images: ["/mock/sunrise2.jpg"],
      description:
        "Catch the sunrise from Nandi Hills with our guided group. Refreshments included.",
      days: [],
    },
    {
      id: "boat-001",
      title: "Boat Cruise",
      location: "Sundarban",
      price: 999,
      images: ["/mock/boat.jpg"],
      description:
        "Relax on a scenic boat ride through the beautiful mangrove forests of the Sundarbans.",
      days: [],
    },
    {
      id: "bungee-001",
      title: "Bungee Jumping",
      location: "Manali",
      price: 999,
      images: ["/mock/bungee.jpg"],
      description:
        "Feel the adrenaline rush of bungee jumping from Manali’s tallest jump site.",
      days: [],
    },
    {
      id: "coffee-002",
      title: "Coffee Trail",
      location: "Coorg",
      price: 1299,
      images: ["/mock/coffee2.jpg"],
      description:
        "A relaxing nature walk through Coorg’s lush plantations with a tasting session at a local estate.",
      days: [],
    },
];  

export async function getExperiences(): Promise<Experience[]> {
    if (MOCK) return mock;
    const { data } = await api.get("/experiences");
    return data.map((x: any) => ({
      ...x,
      id: x._id   // ✅ important!
    }));
}
  
  export async function getExperience(id: string): Promise<Experience> {
    if (MOCK) return mock.find(x => x.id === id)!;
    const { data } = await api.get(`/experiences/${id}`);
    return { ...data, id: data._id }; // ✅ map DB to FE shape
}  