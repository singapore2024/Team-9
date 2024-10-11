import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Image from "next/image";
import { ChatbotLauncher } from "@/components/ChatbotLauncher"; // Ensure the correct path
import { auth } from "@/auth";
import { signOut } from "@/auth";
import Marketplace from "@/components/Marketplace";

export default async function Home() {
  // const router = useRouter();
  // if (session) {
  //   return (
  //     <div>
  //       <p>Signed in as {session.user?.email}</p>
  //       {/* <form
  //         action={async () => {
  //           "use server"
  //           await signOut()
  //           }}
  //         >
  //         <button type="submit">Sign Out</button>
  //       </form> */}
  //     </div>
  //   );
  // }
  const blogPosts = [
    {
      blogId: 1,
      image: "/images/blog-1.jpg",
      title: "My Amazing Homegrown Harvest: How I Achieved a Bountiful Yield!",
      description:
        "After months of dedication and learning the art of home gardening, I'm thrilled to share my journey and the incredible results! From tiny seedlings to a flourishing harvest, I'll walk you through the techniques I used, the challenges I faced, and the tips that helped me maximize my yield. Whether you're just starting out or looking to improve your garden's productivity, my story is here to inspire and guide you.",
      alt: "Bountiful garden harvest with fresh vegetables and fruits",
      more: "Starting as a complete beginner, I embarked on a journey of home gardening, transforming tiny seedlings into a flourishing harvest. Along the way, I learned about soil, sunlight, and watering techniques while facing challenges like pests and diseases. By experimenting with natural fertilizers, companion planting, and adjusting care routines, I maximized my garden's productivity. The experience taught me valuable lessons in patience, resilience, and the joy of nurturing life, inspiring me to continue growing and expanding my garden.",
    },
    {
      blogId: 2,
      image: "/images/blog-2.jpg",
      title: "From Seed to Harvest: My Journey to an Abundant Crop!",
      description:
        "What started as a simple hobby has blossomed into a rewarding experience with an amazing harvest. In this post, I'll share how I transformed a few seeds into a thriving garden, the steps I took to boost growth, and the lessons learned along the way. Whether you're looking to grow your own food or simply enjoy the beauty of nature, discover the secrets behind my success and get inspired to cultivate your own fruitful garden.",
      alt: "Homegrown garden with a variety of fresh produce",
      more: "Starting as a complete beginner, I embarked on a journey of home gardening, transforming tiny seedlings into a flourishing harvest. Along the way, I learned about soil, sunlight, and watering techniques while facing challenges like pests and diseases. By experimenting with natural fertilizers, companion planting, and adjusting care routines, I maximized my garden's productivity. The experience taught me valuable lessons in patience, resilience, and the joy of nurturing life, inspiring me to continue growing and expanding my garden.",
    },
    {
      blogId: 3,
      image: "/images/blog-3.jpeg",
      title:
        "My Best Harvest Yet: How I Achieved a Garden Overflowing with Produce!",
      description:
        "This season, my garden surpassed all expectations with a truly remarkable yield. I’ll share the strategies that made the difference, from choosing the right plant varieties to using natural fertilizers and optimizing watering schedules. Join me as I recount the highs and lows of the growing season and offer practical tips for anyone looking to boost their garden's productivity and enjoy the rewards of homegrown produce.",
      alt: "A bountiful harvest of fresh fruits and vegetables from the garden",
      more: "Starting as a complete beginner, I embarked on a journey of home gardening, transforming tiny seedlings into a flourishing harvest. Along the way, I learned about soil, sunlight, and watering techniques while facing challenges like pests and diseases. By experimenting with natural fertilizers, companion planting, and adjusting care routines, I maximized my garden's productivity. The experience taught me valuable lessons in patience, resilience, and the joy of nurturing life, inspiring me to continue growing and expanding my garden.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Marketplace/>

    </div>
  );
}
