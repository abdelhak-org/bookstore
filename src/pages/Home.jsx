import React, { useEffect, useState } from "react";
import BasicCard from "../components/BasicCard";
import Container from "../ui/Container";
const Home = () => {
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooksList(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Container>


    <div className='w-full  flex justify-between py-16' >
    {
      booksList.map((book , i)=>{
        return(
          <BasicCard title={book.title} key={i} url={book.url} />
        )
      })
    }
    </div>
    </Container>

    
  );
};


export default  Home;
