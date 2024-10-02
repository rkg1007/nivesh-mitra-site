const blogs = [
  
  {
    title: "Where to invest if not FD ?",
    description:
      "Strain of other specified muscles, fascia and tendons at thigh level, right thigh, initial encounter",
    category: "Investment",
    publishedAt: "2024-10-01",
    image: "http://dummyimage.com/737x775.png/cc0000/ffffff",
  },
  {
    title: "Fixed Income Investment Options in India",
    description:
      "Strain of other specified muscles, fascia and tendons at thigh level, right thigh, initial encounter",
    category: "Options",
    publishedAt: "2024-10-01",
    image: "http://dummyimage.com/737x775.png/cc0000/ffffff",
  },
];

export const getBlogs = () => {
  blogs.sort((a, b) => {
    if (new Date(a) < new Date(b)) return -1;
    return 1;
  });
  return blogs;
};

export const getUniqueCategories = () => {
  const categoryObject = {};
  blogs.forEach((blog) => {
    categoryObject[blog.category] = true;
  });
  return Object.keys(categoryObject);
};

export const filterBlogsByCategory = (category) => {
  const blogs = getBlogs();
  if (category == "all") return blogs;
  return blogs.filter(
    (blog) => blog.category.toLowerCase() == category.toLowerCase()
  );
};

