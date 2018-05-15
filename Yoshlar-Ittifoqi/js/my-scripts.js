//document.getElementById('.up-down').onkeypress = function (e) {
//  return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
//};
//


    
    
    $(document).ready(function(){
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        var datePickerOptions = {
            locale: 'ru',
            viewMode: 'years',
            format: 'DD-MM-YYYY',
            icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar-alt",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down",
                    left: "fa fa-chevron-left",
                    right: "fa fa-chevron-right"
                }
        }
        $('.date').datetimepicker(datePickerOptions);

        var countryfield = 1;
        var langfield = 1;
        var relativefield = 1;

      /*  $("#addcountry_field").click(function(){
            $("#country_fields").append('<div class="fieldrow countryrow'+countryfield+'"><div class="col-sm-5" ><select class="custom-select" name="country'+countryfield+'"><option selected>Россия</option><option value="1">Германия</option><option value="2">Америка</option></select></div><label for="login" class="col-sm-1 col-form-label align-right">Год:</label><div class="col-sm-4"><div class="form-group"><div class="input-group"><input type="text" name="countrydate'+countryfield+'" class="form-control date" required=""><span class="input-group-addon facalendar"><span class="fa fa-calendar-alt"></span></span></div></div></div><div class="col-sm-2"><button class="btn btn-danger" onclick="remove_country_fields('+ countryfield +')";><span class="fa fa-trash-alt" aria-hidden="true"></span></button></div><div class="clearfix"></div>');
            countryfield++;
            $('.date').datetimepicker(datePickerOptions);
        });
        */

        
        $("#addUserMain_field").click(function(){
            $("#relative_field").append(
                
                '<tr class="relativesrow'+relativefield+'"><td><div class="form-group"><div class="" id="login">  <input type="email" class="form-control" id="login"></div></td>   <td><div class="form-group"><label for="login" class="col-sm-1 col-form-label input-mini">с</label><input type="text" class="form-control input-mini " id="login">     <label for="login" class="col-sm-1 col-form-label input-mini">до</label>     <input type="text" class="form-control input-mini" id="login"></div></td><td><div class="form-group"><div class="input-group"> <input type="number" value="1" class="my-center form-control up-down" id="login"></div></div></td>  <td><div class="form-group"> <input type="email" class="form-control" id="login">  </div></td><td><div class="form-group"><input type="email" class="form-control" id="login"></div></td><td style="padding:  0;"><button class="yes-btn" onclick="remove_relative_field('+ relativefield +')";></button></td><td style="padding:  0;"><button class="no-btn" onclick="remove_relative_field('+ relativefield +')";></button></td></tr>'
                                       
                                       );
            relativefield++;
            $('.date').datetimepicker(datePickerOptions);
        });
        
        
        


    });
    
    function remove_country_fields(rid) {
       $('.countryrow'+rid).remove();
    }
    function remove_lang_fields(rid) {
       $('.langrow'+rid).remove();
    }
    function remove_relative_field(rid) {
       $('.relativesrow'+rid).remove();
    }
    function list_file(id){
        var files = $('#'+id)[0].files;
        var list = $('#list_'+id);
        var counter = files.length;
        $("#counter_"+id).html(counter);

        list.empty();
        for(var i =0;i<counter; i++)
        {
            var el = '<div class="btn-group listbtn"><button type="button" class="btn addbtn">'+ files[i].name +'</button><button type="button" class="btn addbtn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true"><span class="sr-only"></span></button><div class="dropdown-menu"><a class="dropdown-item" href="#">Удалить</a></div></div>'
            list.append(el);
        }
    }






