$(function () {

  $('textarea.mention').mentionsInput({
    triggerChar: ["@", "#"],
    onDataRequest:function (mode, query, callback, triggerChar) {
      if(triggerChar == "@"){      
        var data = [
          { id:1, name:'sven', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
          { id:2, name:'josef', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
          { id:3, name:'marc', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' },
          { id:4, name:'rainer', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'contact' }
        ];
      } else if (triggerChar == "#") {
        var data = [
          { id:5, name:'decor', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'project' },
          { id:6, name:'bva', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'project' },
          { id:7, name:'tenrit', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'project' },
          { id:8, name:'neuland', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'project' },
          { id:9, name:'rennrad', 'avatar':'http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif', 'type':'project' }
        ];
      }
      data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;});

      callback.call(this, data);
    }
  });

  $('.get-syntax-text').click(function() {
    $('textarea.mention').mentionsInput('val', function(text) {
      alert(text);
    });
  });

  $('.get-mentions').click(function() {
    $('textarea.mention').mentionsInput('getMentions', function(data) {
      alert(JSON.stringify(data));
    });
  }) ;

});