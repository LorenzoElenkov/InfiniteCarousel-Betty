import Carousel from "./components/Carousel";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Carousel
        images={[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbhoPzhSGlHth9jG-UnNQm3TKFFmGVvrXg&usqp=CAU",
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpJBS6JfW6cqlU6qgqQdIz0Rc4jWD1x2yhA&usqp=CAU",
        ]}
      />
    </>
  );
}

export default App;
