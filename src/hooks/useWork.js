import { useEffect, useState } from "react";
import workData from "../workData.json";

const useWork = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(workData.workProjects);
  }, []);

  return products;
};

export default useWork;
