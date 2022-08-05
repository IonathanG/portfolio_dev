import { useEffect, useState } from "react";
import skillsData from "../data/skillsData.json";

const useSkills = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(skillsData.SkillsData);
  }, []);

  return products;
};

export default useSkills;
