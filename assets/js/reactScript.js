

/** @jsx React.DOM */


$(document).ready(function() {

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

var FilteredList = React.createClass({
  filterList: function(){    
		    updatedList = this.state.initialItems;	
	      	newItem = $('#newToDo').val();
	      	updatedList.push(newItem);
	      	$('#newToDo').val('');	
	    	this.setState({items: updatedList});
	    	this.setState({initialItems: updatedList});	    	
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Morning walk",
         "Make vanilla pudding",
         "Gym"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
       <button id="addBtn" onClick={this.filterList}> Add </button>
      <input type="text" id="newToDo" placeholder="To Do" />
     
      <List items={this.state.items}/>
      </div>
    );
  }
});

React.renderComponent(new FilteredList(), document.getElementById('container'));
}); 