var knopki = [15, 14 ,13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ""];

$(document).ready(function() {
    updateView(knopki);
    initializeClicks();
});

function updateView(model){
  $("#box").children().each(
        function(ind, element) {
            $(element).text(model[ind]);
            
        }
    );
};

function initializeClicks() {
$("#k1").on("click", function(){trymove(0);});
$("#k2").on("click", function(){trymove(1);});
$("#k3").on("click", function(){trymove(2);});
$("#k4").on("click", function(){trymove(3);});
$("#k5").on("click", function(){trymove(4);});
$("#k6").on("click", function(){trymove(5);});
$("#k7").on("click", function(){trymove(6);});
$("#k8").on("click", function(){trymove(7);});
$("#k9").on("click", function(){trymove(8);});
$("#k10").on("click", function(){trymove(9);});
$("#k11").on("click", function(){trymove(10);});
$("#k12").on("click", function(){trymove(11);});
$("#k13").on("click", function(){trymove(12);});
$("#k14").on("click", function(){trymove(13);});
$("#k15").on("click", function(){trymove(14);});
$("#k16").on("click", function(){trymove(15);});
};

function trymove(position){
  var a = item_above(position);
  if(a !== -1 && knopki[a]==""){
    move(a, position);
    return;
  }

  var u = item_under(position);
  if(u !== -1 && knopki[u]==""){
      move(u, position);
      return;
  }

  var l = item_left(position);
  if(l !== -1 && knopki[l]==""){
    move(l, position);
    return;
  }
  

  var r = item_right(position);
  if(r !== -1 && knopki[r]==""){
      move(r, position);
      return;
  }
};

  function item_above(position){
    if (position < 4){
      return -1 
    } else { return position-4
    }
  };
  function item_under(position){
     if (position > 11){
       return -1 
     } else { return position + 4
    }
  };
  function item_left(position){
    if (position==0 || position==4 || position==8 || position==12){
      return -1 
    } else { return position - 1
    }
  };

  function item_right(position){
    if (position==3 || position==7 || position==11 || position==15){
      return -1 
    } else { return position + 1
    }
  };

function move(sosed, position){ 
  knopki[sosed]=knopki[position];
  knopki[position] = "";
  updateView(knopki);
};
