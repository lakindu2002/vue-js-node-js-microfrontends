type Post = {
  title: string;
  description: string;
};

const posts: Post[] = [
  {
    title: 'Title 01',
    description: 'This is a sample description of title 01'
  },
  {
    title: 'Title 02',
    description: 'This is a sample description of title 02'
  },
  {
    title: 'Title 03',
    description: 'This is a sample description of title 03'
  },
  {
    title: 'Title 04',
    description: 'This is a sample description of title 04'
  },
  {
    title: 'Title 05',
    description: 'This is a sample description of title 05'
  },
]

export function useGetPosts() {
  return posts;
}