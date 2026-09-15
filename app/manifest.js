import { site } from "@/lib/site";

export default function manifest() {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1c2434",
    icons: [
      {
        src: "/image/Avijeet.jpeg",
        sizes: "140x140",
        type: "image/jpeg"
      }
    ]
  };
}
