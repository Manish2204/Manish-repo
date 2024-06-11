import UseServerCompInClientComp from "../use-server-comp-in-client-component/page";
import GetPriceButton from "./get-price-button/page";

////////////////////////--------method-1
const fetchingData = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data;
};
const Combine = async () => {
  let data = await fetchingData();
  //   console.log(GetPriceButton, "kolkl");
  return (
    <div>
      {data.products.map((ele) => (
        <div className="flex gap-3 mb-3">
          <li>{ele.title}</li>
          <GetPriceButton price={ele.price}>
            <UseServerCompInClientComp />
          </GetPriceButton>
        </div>
      ))}
    </div>
  );
};

export default Combine;
