import { data } from "autoprefixer";

export default async function Home() {
  const response = await fetch(
    `https://65786cfaf08799dc804548db.mockapi.io/todos`,
    { cache: "no-store" }
  );
  const data = await response.json();

  return (
    <>
      <div className="w-full flex flex-wrap min-h-screen">
        <h1>Server Side Rendering</h1>
        {data.map((cur, i) => {
          return (
            <div key={i} className="border w-1/3 mx-4 my-2">
              <p>{cur.title}</p>
              <p>{cur.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
