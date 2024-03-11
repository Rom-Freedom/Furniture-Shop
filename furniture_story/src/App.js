import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
          category: "sofa",
          price: "175.23",
        },
        {
          id: 4,
          title: "Lamp",
          img: "light.jpg",
          desc: "A style lamp",
          category: "lamps",
          price: "30.99",
        },
        {
          id: 5,
          title: "Shelf",
          img: "shelf.jpg",
          desc: "A pleasure shelf",
          category: "shelfs",
          price: "120.50",
        },
        {
          id: 6,
          title: "Kitchen",
          img: "kitchen.jpg",
          desc: "Furniture for your kitchen",
          category: "kitchens",
          price: "1390.00",
        },
        {
          id: 7,
          title: "Armchair",
          img: "arch-2.jpg",
          desc: "A comfortable gray armchair ",
          category: "chairs",
          price: "49.00",
        },
        {
          id: 8,
          title: "Armchair",
          img: "armchair-1.jpg",
          desc: "A comfortable gray armchair ",
          category: "chairs",
          price: "70.99",
        },
        {
          id: 9,
          title: "Kitchen",
          img: "f-4.jpg",
          desc: "Furniture for your kitchen",
          category: "kitchens",
          price: "1300.35",
        },
        {
          id: 10,
          title: "Sofa",
          img: "simpsofa.jpg",
          desc: "A uncredible convenient sofa",
          category: "sofa",
          price: "155.20",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
