import PizzaList from "./PizzaList";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza() {
  return (
      <div className="pizza">
          <Header />
          <PizzaList pizzaData={pizzaData} />
          <Footer />
    </div>
  );
}

export default Pizza;

function Header() {
    return (
      <div>
        <h2>---- fast react pizza co: ----</h2>;<h6>our menu</h6>;
        <p>
          Authetic Italian cuisine, 6 creative dishes to choose from. All from
          our stone oven. All Organic, all delicious
        </p>
      </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 11;

  return (
    <>
      <p>
        {
            hour <= closeHour && hour >= openHour ? (
          <p>Welcome to get a service</p>
        ) : (
          <p>Restaurant closed now</p>
            )
        }
        {
            new Date().toLocaleTimeString()
        } We deliver any where
      </p>
    </>
  );
}