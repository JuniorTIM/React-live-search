import { useState } from "react";
import "./styles.css";

function App() {
  const [object, setObject] = useState([
    {
      image:
        "https://ltdfoto.ru/images/2022/06/20/photo_2022-06-20_10-09-11.jpg",
      name: "Nike Sneaker",
      price: "$120",
    },

    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/352634/03/fnd/RUS/w/1000/h/1000/fmt/png",
      name: "Puma Cross",
      price: "$210",
    },

    {
      image:
        "https://icdn.lenta.ru/images/2021/08/10/13/20210810135231538/wide_4bcdf5cbba78fe8c48bd4e08b7747f61.jpg",
      name: "Adidas",
      price: "$180",
    },

    {
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/fac07cfbcdb04cf0bbc5abf1009bbb68_9366/Krossovki_Superstar_Moskva_belyj_S42992_01_standard.jpg",
      name: "Abibas Superstar",
      price: "$300",
    },

    {
      image:
        "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2638092_krossovki_adidas_zentic_w_belyy_tekstil_.JPG",
      name: "White",
      price: "$350",
    },

    {
      image:
        "https://defiletto.ru/upload/resize_cache/iblock/9de/240_320_1/9ded331b720873a5edc007c7c6bb87ca.jpeg",
      name: "Red",
      price: "$500",
    },
  ]);

  const [text, setText] = useState('')

  function handleText (e) {
    setText(e.target.value)
     
  }

  const searcher = object.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
  console.log(searcher)

  return (
    <div className="App">
      <div className="body">
        <input value={text} onChange={handleText} className="input"></input>
        <div className="cards">
          {searcher.map((item) => {
            console.log(item);
            return (
              <div className="card">
                <img alt="" src={item.image}></img>
                <h1 className="name">{item.name}</h1>
                <button className="detail">Детали</button>
                <h1 className="price">{item.price}</h1>
                <hr></hr>
                <div className="description">
                  Lorem ipsum moter ssfs oerjgeor nacsja egfuewif
                </div>
                <button className="cart">Добавить в корзину</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
