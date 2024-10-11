import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export default async function Blogs() {
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
      <Dialog defaultOpen={true}>
        <DialogContent className="max-h-[80vh] overflow-y-auto max-w-screen-xl">
          <DialogHeader>
            <DialogTitle>
              Grow Your Green Thumb: The Perfect Starter Kit for Beginners!
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <Image
              src="/images/starter-kit.jpg"
              width={400}
              height={300}
              alt=""
            />
          </div>
          <h3>About the Kit</h3>
          <DialogDescription>
            Our starter kit has everything you need to embark on your
            plant-growing adventure, even if you’ve never touched a plant
            before. It includes a curated selection of seeds, nutrient-rich
            soil, eco-friendly pots, and essential tools for planting and
            maintenance. The step-by-step guide ensures you know exactly what to
            do at every stage, making it easy and fun to start growing right
            away. Whether you're looking to add some greenery to your home or
            start a garden, this kit has you covered.
          </DialogDescription>
          <h3>Consistency is Key</h3>
          <DialogDescription>
            When it comes to growing plants, regular care is crucial. That’s why
            we’ve designed the kit with a simple yet effective watering and
            maintenance schedule that anyone can follow. By sticking to these
            routines, you’ll be helping your plants grow healthy and strong.
            Consistent watering, proper sunlight exposure, and occasional
            feeding are essential habits that will set you up for long-term
            success. With a little bit of daily attention, you’ll soon see just
            how rewarding plant care can be!
          </DialogDescription>
          <h3>Become a Certified Farmer</h3>
          <DialogDescription>
            This kit isn’t just about growing plants—it's about growing your
            skills as a budding gardener. By following the instructions and
            getting hands-on experience, you'll build a deeper understanding of
            what it takes to care for different types of plants. As you gain
            confidence and see your plants flourish, you'll feel like a
            certified plant expert. The more you practice, the more you'll
            develop the skills needed to take on bigger gardening projects in
            the future, laying the foundation to become a successful farmer.
          </DialogDescription>
          <div className="flex justify-center">
            <button className="bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300 w-80">
              Buy it now!
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="py-8 px-8 rounded-sm">
        {blogPosts.map((item) => (
          <BlogCard
            blogId={item.blogId}
            image={item.image}
            title={item.title}
            description={item.description}
            more={item.more}
            alt={item.alt}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
}
