import { movies } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movies() {
  const router = useRouter();

  function handleRandomRedirect() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    router.push(`/movies/${randomMovie.slug}`);
  }

  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleRandomRedirect}>
        Suprise me!
      </button>
    </>
  );
}
