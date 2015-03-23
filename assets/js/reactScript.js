

/** @jsx React.DOM */


$(document).ready(function() {

var List = React.createClass({
  render: function(){
    return (
      <ul id="add-list" onClick = {this.addId}>
      {
        this.props.items.map(function(item) {
          return <li  key={item}> {item} </li>

        })
       }
      </ul>
    )
  },
  addId : function(){
    return (
        $('li').each(function (i) {
         
            $(this).attr('id', 'task' + i);
            i++;

             alert(this.id);
        })
      )
  },
  removeItem : function(){
  	$("#add-list li").click(function(){
  		   alert($(this).attr('id'));
  	})
  }
});

// var CompletedTask = React.createClass({
// 	addCompleted: function(){

// 	}
// })
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
	      <div class="btn-wrapper">
	       <button id="addBtn" onClick={this.filterList}> Add </button>
	      <input type="text" id="newToDo" placeholder="To Do" />
	     </div>
      <List items={this.state.items}/>
      </div>
    );
  }
});

React.renderComponent(new FilteredList(), document.getElementById('container'));
}); 
