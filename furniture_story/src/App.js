import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Armchair',
          img: 'armchair-3.jpg',
          desc: 'A comfortable gray armchair ',
          category: 'chairs',
          price: '47.79'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'A style gray table',
          category: 'tables',
          price: '130.99'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'A uncredible convenient sofa',
          category: 'Sofa',
          price: '175.23'
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'light.jpg',
          desc: 'A style lamp',
          category: 'Lights',
          price: '30.99'
        },
        {
          id: 5,
          title: 'Shelf',
          img: 'shelf.jpg',
          desc: 'A pleasure shelf',
          category: 'Shelfs',
          price: '120.50'
        },
        {
          id: 6,
          title: 'Kitchen',
          img: 'kitchen.jpg',
          desc: 'Furniture for your kitchen',
          category: 'Kitchens',
          price: '1390.00'
        }
      ]
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App;
