// import React, { useEffect, useRef, useState } from "react";

// function FadeInSection(props) {
//   const [isVisible, setVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     let observerValue = null;

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) setVisible(entry.isIntersecting);
//       });
//     });
//     observer.observe(domRef.current);
//     observerValue = domRef.current;

//     return () => observer.unobserve(observerValue);
//   }, []);

//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

// export default FadeInSection;
