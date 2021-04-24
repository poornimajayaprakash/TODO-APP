$(document).ready(function() { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("list.json",function(data) {
            var list_data ='';
            $.each(data, function (key, value) {
                list_data += '<tr>';
                list_data += '<td>' + value.userId + '</td>';
                list_data += '<td>' + value.id + '</td>';
                list_data += '<td>' + value.title + '</td>';
               if(value.completed==true){
                   list_data += '<td>' + '<input type="checkbox" checked=true disabled=true>';
                   }
                   else{
                    list_data += '<td>' + '<input type="checkbox" onchange="check();" class="check_boxes">';
                   }
  
                 list_data += '</tr>';
            });
            $('#ltable').append(list_data);
        } );
        
  });