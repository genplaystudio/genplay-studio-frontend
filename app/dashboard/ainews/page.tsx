import { Metadata } from 'next';
import Container from "@/ui/ainews/container";
import { HeroPost } from "@/ui/ainews/hero-post";
import { Intro } from "@/ui/ainews/intro";
import { MoreStories } from "@/ui/ainews/more-stories";
import { getAllPosts } from "@/lib/api";
import Footer from "@/ui/ainews/footer";

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
    <Footer />
  </main>);
}