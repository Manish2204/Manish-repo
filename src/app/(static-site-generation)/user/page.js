import Link from "next/link";

////////////////////////--------method-1
const fetchingData = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data;
};
const ServerSideRendering = async () => {
  let data = await fetchingData();
  return (
    <div>
      {data.products.map((ele) => (
        <div key={ele.id}>
          {" "}
          <Link href={`user/${ele.id}`}>{ele.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ServerSideRendering;
