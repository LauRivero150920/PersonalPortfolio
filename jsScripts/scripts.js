$.ajax({
    url:'data/profile.json',
    method:'GET',
    datatype:'JSON',
    data:'',
    beforeSend: function(){

    },
    success: function(data){
        $('#descServices').html(data.services.description);
        data.services.listServices.forEach(element => {
            let card = '<div class = "col-md-6" id="Card">'+
            '<div class="card w-75">'+
                '<div class="card-body">'+
                    '<h5 class="card-title">'+element.title+'</h5>'+
                    '<p class="card-text">'+element.description+'</p>'+
                    '<a href="#" class="btn btn-info">Button</a>'+
                '</div>'+
                '</div>'+
            '</div>'
            $('#contentServices').append(card);
        });
    },
    error: function(){
        alert('error');
    }
});
