import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createDate: new Date(),
      views: 15,
      author: {
        id: 1,
        name: "Ais",
      },
      description: "this is a description",
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Unleash Your Potential <br /> Create Projects that Transform the World
        </h1>

        <p className="sub-heading !max-w-3xl">
          Share Your Vision, Shape Creative Projects, and Gain Recognition in
          Competitive Challenges.
        </p>

        <SearchForm query={query}/>
      </section>

      <div className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : 'All Potentials'}
        </p>

        <ul className="mt-7 card_grid">
          {posts ?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No potential found.</p>
          )}
        </ul>
      </div>
    </>
  );
}
