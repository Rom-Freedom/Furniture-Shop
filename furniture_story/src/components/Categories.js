import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
        categories: [
            {
                key: 'all',
                name: 'Everything'
            },
            {
                key: 'chair',
                name: 'Chairs'
            },
            {
                key: 'table',
                name: 'Tables'
            },
            {
                key: 'sofa',
                name: 'Sofa'
            },
            {
                key: 'kitchen',
                name: 'Kitchens'
            },
            {
                key: 'lamp',
                name: 'Lamps'
            },
            {
                key: 'shelf',
                name: 'Shelfs'
            },
        ]
    }
  }  
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories