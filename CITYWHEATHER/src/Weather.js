import React, { Component } from "react";
import ItemDetails from './Weather/item-details';
import NewItem from './Weather/new-item';
import EditItem from './Weather/edit-item'; 
import ItemService from './shared/weather-service';
import SearchField from "react-search-field";
import './App.css';
//import TypeChecker from 'typco';
 
class Weather extends Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
        this.onSelect = this.onSelect.bind(this);
        this.onNewItem = this.onNewItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
        this.onCreateItem = this.onCreateItem.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.state = {
          showDetails: false,
          editItem: false,
          selectedItem: null,
          newItem: null
        }
      }
      componentDidMount() {
          this.getItems();
      }
      render() {
        const items = this.state.items;
        if(!items) return null;
        const showDetails = this.state.showDetails;
        const selectedItem = this.state.selectedItem;
        const newItem = this.state.newItem;
        const editItem = this.state.editItem;
        const listItems = items.map((item) =>
          <li key={item.link} onClick={() => this.onSelect(item.link)}>
             <span className="item-name">{item.name}</span> |  {item.summary}
          </li>
        );
        return (
          <div className="App">
            <ul>
            <SearchField
              placeholder="Search..."
              //onChange={this.onChange}
              onClick={this.onSearchClick}
              searchText="This is initial search text"
              classNames="test-class"
/>
            </ul>
              <ul className="items">
                {listItems}
              </ul>
              <br/>
              <button type="button" name="button" onClick={() => this.onNewItem()}>New Item</button>
              <br/>
                {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}/>}
                {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem}  onDelete={this.onDeleteItem} />}
                {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} />}
          </div>
        );
      }
      getItems() {
        this.itemService.retrieveItems().then(items => {
              this.setState({items: items});
            }
        );
      }
      onSelect(itemLink) {
        this.clearState();
        this.itemService.getItem(itemLink).then(item => {
          this.setState({
              showDetails: true,
              selectedItem: item
            });
          }
        );
      }
      onCancel() {
        this.clearState();
      }
      onNewItem() {
        this.clearState();
        this.setState({
          newItem: true
        });
      }
      onEditItem() {
        this.setState({
          showDetails: false,
          editItem: true,
          newItem: null
        });
      }
      onCancelEdit() {
        this.setState({
          showDetails: true,
          editItem: false,
          newItem: null
        });
      }
      onUpdateItem(item) {
        this.clearState();
        this.itemService.updateItem(item).then(item => {
            this.getItems();
          }
        );
      }
      onCreateItem(newItem) {
        this.clearState();
        this.itemService.createItem(newItem).then(item => {
            this.getItems();
          }
        );
      }
      onDeleteItem(itemLink) {
        this.clearState();
        this.itemService.deleteItem(itemLink).then(res => {
            this.getItems();
          }
        );
      }
      clearState() {
        this.setState({
          showDetails: false,
          selectedItem: null,
          editItem: false,
          newItem: null
        });
      }

      onChange(event) {
        this.setState({
          value: event.target.value,
        });
       // if (TypeChecker.isFunction(this.props.onChange)) {
          this.props.onChange(event.target.value, event);
       // }
      }

      onSearchClick() {
        //if (TypeChecker.isFunction(this.props.onSearchClick)) {
         this.props.onSearchClick(this.state.value);
       // }
      }

      
}
 
export default Weather;