import { Metadata } from 'next';
import Container from "@/app/ui/ainews/container";
import { HeroPost } from "@/app/ui/ainews/hero-post";
import { Intro } from "@/app/ui/ainews/intro";
import { MoreStories } from "@/app/ui/ainews/more-stories";
import { getAllPosts } from "@/app/lib/api";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'IA News',
};
export default function Page() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  console.log(heroPost);

  const morePosts = allPosts.slice(1);
  return (<main>
    <Container><Intro />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  </main>);
}