
/** @jsx React.DOM */

$(document).ready(function() {
  var List = React.createClass({
    render: function(){
      return (
        <ul id="add-list" onClick = {this.removeItem}>
        {
          this.props.items.map(function(item) {
            return <li key={item}> {item} </li>
          })
         }
        </ul>
      )
    },
    // addId : function(){
    //   return (
    //       $('li').each(function (i) {     
    //           $(this).attr('id', 'task' + i);
    //           i++;
    //       })s
         
    //     )
    // },
    removeItem : function(){
    	// $("#add-list to_complete").click(function(){
     //     alert('hi')
    	// })
    $('#add-list li').click( function () {
        $(this).remove();
    });

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
         items: []
       }
    },
    componentWillMount: function(){
      $.ajax({
        url: "assets/json/toDo.json",
        dataType: 'json',
        success: function(data) {
          var initialItem = data.initial_task
          var task_collector = [];
          for(i=0;i<3;i++){
            var task;
            task = ("init_task"+i);
            task_collector.push(initialItem[0][task]);
          }
          this.setState({initialItems: task_collector}); 
          this.setState({items: task_collector});       
        }.bind(this)
      });
    },
    // componentDidUpdate: function(prevProps, prevState) {
    // localStorage.state = JSON.stringify(this.state);
    // },
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
  React.renderComponent(<FilteredList/>, document.getElementById('container'));
}); 
