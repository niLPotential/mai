export default async function Page() {
  const data = await getData();

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>;
    </>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
