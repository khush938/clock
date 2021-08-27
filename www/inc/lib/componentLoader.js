function loadComponent(x,y){
    $.ajax({
        url: x,
        success: function(data) {
            $(y).html(data);
        }
    });
};