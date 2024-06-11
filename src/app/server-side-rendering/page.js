////////////////////////--------method-1
const fetchingData = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data;
};
const ServerSideRendering = async () => {
  // ---------------------method-2
  //   let response = await fetch("https://dummyjson.com/products");
  //   let data = await response.json();
  //   console.log(data, "data");
  let data = await fetchingData();
  return (
    <div>
      {data.products.map((ele) => (
        <li>{ele.title}</li>
      ))}
    </div>
  );
};

export default ServerSideRendering;
