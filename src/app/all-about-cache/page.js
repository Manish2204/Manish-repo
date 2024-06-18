// import React from 'react'

// const Cache = () => {
//   return (
//     // Using 'default' cache option (This is the default behavior)
// let responseDefault = await fetch("https://dummyjson.com/products", { cache: "default" });
// let dataDefault = await responseDefault.json();
// console.log("Default Cache:", dataDefault);

// // Using 'no-store' cache option (always fetch from the network, do not cache the response)
// let responseNoStore = await fetch("https://dummyjson.com/products", { cache: "no-store" });
// let dataNoStore = await responseNoStore.json();
// console.log("No-Store Cache:", dataNoStore);

// // Using 'reload' cache option (fetch from the network and update the cache)
// let responseReload = await fetch("https://dummyjson.com/products", { cache: "reload" });
// let dataReload = await responseReload.json();
// console.log("Reload Cache:", dataReload);

// // Using 'no-cache' cache option (validate with the server, use cached response if valid, otherwise fetch from network)
// let responseNoCache = await fetch("https://dummyjson.com/products", { cache: "no-cache" });
// let dataNoCache = await responseNoCache.json();
// console.log("No-Cache:", dataNoCache);

// // Using 'force-cache' cache option (use cached response even if stale, fetch from network if not cached)
// let responseForceCache = await fetch("https://dummyjson.com/products", { cache: "force-cache" });
// let dataForceCache = await responseForceCache.json();
// console.log("Force-Cache:", dataForceCache);

// // Using 'only-if-cached' cache option (use cached response if available, otherwise fail with a network error)
// try {
//     let responseOnlyIfCached = await fetch("https://dummyjson.com/products", { cache: "only-if-cached" });
//     let dataOnlyIfCached = await responseOnlyIfCached.json();
//     console.log("Only-If-Cached:", dataOnlyIfCached);
// } catch (error) {
//     console.log("Only-If-Cached Error:", error);
// }

// // Using 'immutable' cache option (always use cached response without validation)
// let responseImmutable = await fetch("https://dummyjson.com/products", { cache: "immutable" });
// let dataImmutable = await responseImmutable.json();
// console.log("Immutable Cache:", dataImmutable);

//   )
// }

// export default Cache

"use client";
import React, { useEffect, useState } from "react";

const Cache = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data, "data");
      setProduct(data.products);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //   console.log(product, "ss");
  return (
    <div className="100">
      <ul>
        {product.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cache;
