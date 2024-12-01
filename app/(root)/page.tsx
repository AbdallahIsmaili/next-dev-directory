import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

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
    </>
  );
}
