const postCount = () => Math.floor(Math.random() * (750000 - 1000 + 1)) + 1000;

export const topics = [
  {
    title: "Gaming Trending",
    topic: {
      type: "#",
      key: "GTA 6",
    },
    postCount: postCount(),
  },
  {
    title: "Trending in Turkey",
    topic: {
      type: "general",
      key: "Parkinson",
    },
    postCount: postCount(),
  },
  {
    title: "Gaming  Trending",
    topic: {
      type: "#",
      key: "PlayStation",
    },
    postCount: postCount(),
  },
  {
    title: "Tech Trending",
    topic: {
      type: "#",
      key: "Nvidia",
    },
    postCount: postCount(),
  },
  {
    title: "Entertainment",
    topic: {
      type: "general",
      key: "Netflix",
    },
    postCount: postCount(),
  },
  {
    title: "Politics",
    topic: {
      type: "#",
      key: "President",
    },
    postCount: postCount(),
  },
];
