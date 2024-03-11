import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Armchair",
          img: "armchair-3.jpg",
          desc: "A comfortable gray armchair ",
          category: "chairs",
          price: "47.79",
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desc: "A style gray table",
          category: "tables",
          price: "130.99",
        },
        {
          id: 3,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "A uncredible convenient sofa",
          category: "Sofa",
          price: "175.23",
        },
        {
          id: 4,
          title: "Lamp",
          img: "light.jpg",
          desc: "A style lamp",
          category: "Lights",
          price: "30.99",
        },
        {
          id: 5,
          title: "Shelf",
          img: "shelf.jpg",
          desc: "A pleasure shelf",
          category: "Shelfs",
          price: "120.50",
        },
        {
          id: 6,
          title: "Kitchen",
          img: "kitchen.jpg",
          desc: "Furniture for your kitchen",
          category: "Kitchens",
          price: "1390.00",
        },
      ],
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {});
  }
}

export default App;
