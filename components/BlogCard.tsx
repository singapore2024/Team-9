import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface BlogProps extends React.HTMLAttributes<HTMLDivElement> {
  blogId: number;
  image: string;
  title: string;
  description: string;
  more: string;
  alt: string;
  commentsNo: number;
  likesNo: number;
}

export default function BlogCard(props: BlogProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="flex flex-row items-center justify-start bg-slate-50 h-80 w-full gap-5 px-10 mb-5">
            {/** Media */}
            <Image
              src={props.image}
              width={200}
              height={100}
              className="mx-auto rounded-lg"
              alt={props.alt}
            />
            <div className="flex flex-col text-left">
              {/** Title */}
              <h1 className="font-bold text-xl">{props.title}</h1>
              {/** Description */}
              <p>{props.description.substring(0, 500)}...</p>
              <div className="flex flex-row gap-5 mt-3">
                <div>
                  <MessageCircle className="h-5 w-5" />
                  <p>{props.commentsNo}</p>
                </div>
                <div>
                  <Heart className="h-5 w-5" />
                  <p>{props.likesNo}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto max-w-screen-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{props.title}</DialogTitle>
          </DialogHeader>
          <Image
            src={props.image}
            width={400}
            height={300}
            className="mx-auto rounded-lg"
            alt={props.alt}
          />
          <DialogDescription>{props.description}</DialogDescription>
          <DialogDescription>{props.more}</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
