import React, { Component } from 'react';
import './AgencyInventory.css'

class AgencyInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: 'Agency Facilities',
          columns: ['Facilities', 'Quantity', 'Usage'],
          items: [],
          newItem: {
            Facilities: '',
            Quantity: '',
            Usage: '',
          },
          searchQuery: '',
        },
        {
          name: 'Staffing Records',
          columns: ['Staff Name', 'Contact Number', 'Address', 'Salary Type', 'Aadhar Number'],
          items: [],
          newItem: {
            'Staff Name': '',
            'Contact Number': '',
            Address: '',
            'Salary Type': '',
            'Aadhar Number': '',
          },
          searchQuery: '',
        },
        {
          name: 'Financial',
          columns: ['Purpose', 'Amount used', 'Upload bill'],
          items: [],
          newItem: {
            Purpose: '',
            'Amount used': '',
            'Upload bill': null,
          },
          searchQuery: '',
        },
      ],
    };
  }

  handleInputChange = (categoryIndex, columnName, value) => {
    const { categories } = this.state;
    categories[categoryIndex].newItem[columnName] = value;
    this.setState({ categories });
  };

  handleUploadBill = (categoryIndex, file) => {
    const { categories } = this.state;
    categories[categoryIndex].newItem['Upload bill'] = file;
    this.setState({ categories });
  };

  handleAddItem = (categoryIndex) => {
    const { categories } = this.state;
    const newItem = { ...categories[categoryIndex].newItem };
    categories[categoryIndex].items.push(newItem);
    categories[categoryIndex].newItem = {};
    this.setState({ categories });
  };

  handleDeleteItem = (categoryIndex, itemIndex) => {
    const { categories } = this.state;
    categories[categoryIndex].items.splice(itemIndex, 1);
    this.setState({ categories });
  };

  handleSearch = (categoryIndex, query) => {
    const { categories } = this.state;
    categories[categoryIndex].searchQuery = query;
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;

    return (
      <div className='inbody56'>
      <div className='inven01'>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className='inhead01'>{category.name}</h2>
            <table className='intable56'>
              <thead className='inthead56'>
                <tr className='inhentr56'>
                  {category.columns.map((column, columnIndex) => (
                    <th key={columnIndex}>{column}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='inhentbody56'>
                {category.items
                  .filter((item) =>
                    Object.values(item).some((value) =>
                      String(value).toLowerCase().includes(category.searchQuery.toLowerCase())
                    )
                  )
                  .map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      {category.columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{item[column]}</td>
                      ))}
                      <td>
                        <button className = 'inhenbutton78' onClick={() => this.handleDeleteItem(categoryIndex, itemIndex)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className='inven456'>
              {category.columns.map((column, columnIndex) => (
                <input className='inven789'
                  key={columnIndex}
                  type="text"
                  placeholder={column}
                  value={category.newItem[column]}
                  onChange={(e) =>
                    this.handleInputChange(categoryIndex, column, e.target.value)
                  }
                />
              ))}
              {category.name === 'Financial' && (
                <input className='inven789'
                  type="file"
                  onChange={(e) => this.handleUploadBill(categoryIndex, e.target.files[0])}
                />
              )}
              <button className = 'button456' onClick={() => this.handleAddItem(categoryIndex)}>Save</button>
              <input className='inven789'
                type="text"
                placeholder="Search"
                value={category.searchQuery}
                onChange={(e) => this.handleSearch(categoryIndex, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default AgencyInventory;
