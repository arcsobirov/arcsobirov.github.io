function editEvent(event) {
    $('#event-modal input[name="event-index"]').val(event ? event.id : '');
    $('#event-modal input[name="event-name"]').val(event ? event.name : '');
    $('#event-modal input[name="event-location"]').val(event ? event.location : '');
    $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
    $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
    $('#event-modal').modal();
}

function deleteEvent(event) {
    var dataSource = $('#calendar').data('calendar').getDataSource();

    for(var i in dataSource) {
        if(dataSource[i].id == event.id) {
            dataSource.splice(i, 1);
            break;
        }
    } 
    
    $('#calendar').data('calendar').setDataSource(dataSource);
}

function saveEvent() {
    var event = {
        id: $('#event-modal input[name="event-index"]').val(),
        name: $('#event-modal input[name="event-name"]').val(),
        location: $('#event-modal input[name="event-location"]').val(),
        startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
        endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
    }
    
    var dataSource = $('#calendar').data('calendar').getDataSource();

    if(event.id) {
        for(var i in dataSource) {
            if(dataSource[i].id == event.id) {
                dataSource[i].name = event.name;
                dataSource[i].location = event.location;
                dataSource[i].startDate = event.startDate;
                dataSource[i].endDate = event.endDate;
            }
        }
    }
    else
    {
        var newId = 0;
        for(var i in dataSource) {
            if(dataSource[i].id > newId) {
                newId = dataSource[i].id;
            }
        }
        
        newId++;
        event.id = newId;
    
        dataSource.push(event);
    }
    
    $('#calendar').data('calendar').setDataSource(dataSource);
    $('#event-modal').modal('hide');
}

$(function() {
    var currentYear = new Date().getFullYear();

    $('#calendar').calendar({ 
        selectRange: function(e) {
            editEvent({ startDate: e.startDate, endDate: e.endDate });
        },
        
        

        
        
        
        
        clickDay: function(e) {
            e.stopPropagation();
            if(e.events.length > 0) {
                
               
        
            for(var i in e.events) {

              
                 $('.event-list').click(function(){
                    $(".tab-content-event").css("display", "none");
                    $(".event-box").css("display", "block");
            
                 });
                

                $("#calendar").append(
                '<div class="event-box "onclick="showInfo'+i+'()"><div class="event-date1" style="background-color: '+ e.events[i].eventColor + ';"><span>'+ e.events[i].eventDate +' </span><span class="mini-month">'+ e.events[i].eventMonth +' </span></div><div class="event-l"><span class="title ">'+ e.events[i].name +'</span>'+
                '<span>Место проведения:<span>'+ e.events[i].location +'</span></span><span>Ответственная организация:<span>Союзь Молодежи Узбекистана</span></span>'+
                '<span>Участники:<span>'+ e.events[i].userNum +' активист(ов)</span></span></div><div class="event-r">'+
                '<span>Время проведения:<span>с '+ e.events[i].timeFrom +' до '+ e.events[i].timeTo +'</span></span>'+
                '<span>Ответственные лица:<span>'+ e.events[i].mainUserNum +' активист(ов)</span></span></div></div> '
                    + 
                '<div class="tab-content-event" id="myTabContent' + i +'"><div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab"><div class="row"><div class="col-sm-12"><div class="row personaldata event-infol">'
                +
                '<!----1st col------><div class="col-sm-6 col-mini"><div class="form-group row">'+
                '<label  class="col-sm-5 col-form-label align-right">Название мероприятия</label><div class="col-sm-su8 event-subtitle "><span>'+ e.events[i].name +'</span></div></div><div class="form-group row">'+
                '<label  class="col-sm-5 col-form-label align-right">Место проведения</label><div class="col-sm-su8 event-subtitle"><span>'+ e.events[i].location +'</span></div></div><div class="form-group row">'+
                '<label  class="col-sm-5 col-form-label align-right">Ответственное лицо</label><div class="col-sm-su8 event-subtitle"><span>'+ e.events[i].mainPer +'</span></div></div><div class="form-group row">'+
                '<label  class="col-sm-5 col-form-label align-right">Ответсвенная организация</label><div class="col-sm-su8 event-subtitle"><span>'+ e.events[i].mainOrg +'</span></div></div></div><div class="col-sm-6 event-titlel col-mini"><div class="form-group row">'+
                '<label  class="col-sm-3 col-form-label align-right">Дата</label><div class="col-sm-9"><label  class="col-sm-9 col-form-label  label-mini-text float-left">'+
                '<span class="float-left">11.03.2018</span> Время с <span>'+ e.events[i].timeFrom +'</span> до <span>'+ e.events[i].timeTo +'</span></label></div></div><div class="form-group row">'+
                '<label  class="col-sm-3 col-form-label align-right">Примечания</label><div class="col-sm-9"><label  class="col-sm-12 col-form-label  label-mini-text left-align float-left"><span>'+ e.events[i].comment +'</span></label></div></div></div></div><!-- /personal data -->'+
                '<!-----Add new member------><div class="row addMember"><div class="col-sm-12"><table class="table"><thead><tr><th scope="col" style="width:25%">Ответсвенное лицо</th>'+
                '<th scope="col" style="width:20%">Время проведения <br>мероприятия</th><th scope="col" style="width:10%">Количество</th>'+
                '<th scope="col" style="width:28%">Выбранные волонтёры</th><th scope="col">Роль</th></tr></thead>'+
                '<tbody id="relative_field"><tr class="relativesrow justify-content-center"><td><div class="form-group">'+
                '<!--Ответсвенное лицо--><label  class="col-sm-12 col-form-label">Абдурахмон Бердиев Рахимович</label></div></td><td><div class="form-group">'+
                '<!--Время проведения --><label  class="col-sm-1 col-form-label input-mini">с</label>'+
                '<label  class="col-sm-2 col-form-label input-mini">9:00</label><label  class="col-sm-1 col-form-label input-mini">до</label>    <label  class="col-sm-2 col-form-label input-mini">18:00</label></div></td><td><div class="form-group"><div class="input-group amount"><label class="col-sm-12 col-form-label input-mini">6</label></div></div></td>'+
                '<td><ul class="volont-list" id="list1" style="height: 38px;">'+
                    '<li><label  class="col-sm-12 col-form-label">Ахмадалиев Миршод Махмудович</label></li>'+
                    '<li><label  class="col-sm-12 col-form-label">Ахмадалиев Миршод Махмудович</label></li>'+
                    '<li><label  class="col-sm-12 col-form-label">Ахмадалиев Миршод Махмудович</label></li>'+
                    '<li><label  class="col-sm-12 col-form-label">Ахмадалиев Миршод Махмудович</label></li>'+
                '</ul><span class="list-btn" id="btnDrop1" onclick="openlist("list1"); return false" ><img src="img/icons/down-icon.png" alt=""></span></td><td><div class="form-group">'+
                '<label class="col-sm-12 col-form-label">Дизайнер</label></div></td></tr>\
                    </tbody></table><tfoot class="col-ms-12"><tr class="col-ms-12"><td class="col-ms-12">'+
                '<label class="col-sm-12 col-form-label down-files align-left left-align">Файлы <span>2 файла загружено</span></label><div class="btn-group">'+
                '<button type="button" class="btn btn-info clasclas">Diplom.pdf</button>'+
                '<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button><ul class="dropdown-menu"><li><a href="#">Удалить</a></li><li><a href="#">Изменить</a></li></ul></div><div class="btn-group"><button type="button" class="btn btn-info">Приложение для диплома_2010_123.pdf</button><button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span><span class="sr-only">Toggle Dropdown</span></button><ul class="dropdown-menu"><li><a href="#">Удалить</a></li><li><a href="#">Изменить</a></li></ul></div></td></tr></tfoot></div> </div><!--/info relative form --></div></div></div><script>\
                \
                function showInfo'+i+'(){\
                    $(".tab-content").css("display", "none");\
                    $("#myTabContent' + i + '").css("display", "block"); \
                    $(".event-box").css("display", "none");}\
                </script>'
            );
                    
      
                
                
                
                
        }/*end of FOR inner*/

            }else{
                $("#calendar").append(
                '<p>No info date</p>');
            }
        
}/*Func end*/,
        
        

        
        
        dataSource: [
            {
                id: 0,
                eventLocation: '',
                name: 'Google I/O',
                location: 'San Francisco, CA',
                eventDate: 02,
                eventMonth: 'Mart',
                startDate: new Date(currentYear, 1, 1),
                endDate: new Date(currentYear, 1, 1),
                eventColor: 'black',
                userNum: 652,
                mainUserNum: 22,
                month: 'Какойто',
                timeFrom: '9:00',
                timeTo: '17:00',
                comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                mainPer: 'Анваров Санжар Тухтабаевич',
                mainOrg: 'Мирабатский отдел СМУ',
                userList: [
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        volounList:[
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                                    ],
                        role: 'Дизайнер'
                    },
                    
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        role: 'Ментор'
                    },
                ]
                
            },
            {
                id: 1,
                name: 'Microsoft Convergence',
                location: 'New Orleans, LA',
                eventColor: 'yellow',
                startDate: new Date(currentYear, 2, 16),
                endDate: new Date(currentYear, 2, 17),
                userNum: 652,
                mainUserNum: 22,
                month: 'Какойто',
                timeFrom: '9:00',
                timeTo: '17:00',
                comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                mainPer: 'Анваров Санжар Тухтабаевич',
                mainOrg: 'Мирабатский отдел СМУ',
                userList: [
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        volounList:[
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                                    ],
                        role: 'Дизайнер'
                    },
                    
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        role: 'Ментор'
                    },
                ]
            }, 
            {
                id: 55,
                name: 'Second',
                location: 'New Orleans, LA',
                eventColor: 'pink',
                startDate: new Date(currentYear, 2, 16),
                endDate: new Date(currentYear, 2, 17),userNum: 652,
                mainUserNum: 22,
                month: 'Какойто',
                timeFrom: '9:00',
                timeTo: '17:00',
                comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                mainPer: 'Анваров Санжар Тухтабаевич',
                mainOrg: 'Мирабатский отдел СМУ',
                userList: [
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        volounList:[
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                                    ],
                        role: 'Дизайнер'
                    },
                    
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        role: 'Ментор'
                    },
                ]
            },
            {
                id: 2,
                name: 'Microsoft Build Developer Conference',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 3, 29),
                endDate: new Date(currentYear, 4, 1),
                userNum: 652,
                mainUserNum: 22,
                month: 'Какойто',
                timeFrom: '9:00',
                timeTo: '17:00',
                comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                mainPer: 'Анваров Санжар Тухтабаевич',
                mainOrg: 'Мирабатский отдел СМУ',
                userList: [
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        volounList:[
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                                    ],
                        role: 'Дизайнер'
                    },
                    
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        role: 'Ментор'
                    },
                ]
            },
            {
                id: 3,
                name: 'Apple Special Event',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 8, 1),
                endDate: new Date(currentYear, 8, 1),
                userNum: 652,
                mainUserNum: 22,
                month: 'Какойто',
                timeFrom: '9:00',
                timeTo: '17:00',
                comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                mainPer: 'Анваров Санжар Тухтабаевич',
                mainOrg: 'Мирабатский отдел СМУ',
                userList: [
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        volounList:[
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                            {   id:0,
                                name: 'Ахмадалиев Миршод Махмудович'},
                                    ],
                        role: 'Дизайнер'
                    },
                    
                    {
                        userId: 0,
                        userName: 'Jahongir',
                        timeFrom: '9:00',
                        timeTo: '17:00',
                        number: 6,
                        role: 'Ментор'
                    },
                ]
            },
            {
                id: 4,
                name: 'Apple Keynote',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 8, 9),
                endDate: new Date(currentYear, 8, 9)
            },
            {
                id: 5,
                name: 'Chrome Developer Summit',
                location: 'Mountain View, CA',
                startDate: new Date(currentYear, 10, 17),
                endDate: new Date(currentYear, 10, 18)
            },
            {
                id: 6,
                name: 'F8 2015',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 2, 25),
                endDate: new Date(currentYear, 2, 26)
            },
            {
                id: 7,
                name: 'Yahoo Mobile Developer Conference',
                location: 'New York',
                startDate: new Date(currentYear, 7, 25),
                endDate: new Date(currentYear, 7, 26)
            },
            {
                id: 8,
                name: 'Android Developer Conference',
                location: 'Santa Clara, CA',
                startDate: new Date(currentYear, 11, 1),
                endDate: new Date(currentYear, 11, 4)
            },
            {
                id: 9,
                name: 'LA Tech Summit',
                location: 'Los Angeles, CA',
                startDate: new Date(currentYear, 10, 17),
                endDate: new Date(currentYear, 10, 17)
            }
        ]
    });
        
    
    $('#save-event').click(function() {
        saveEvent();
    });
    
    
    
});

    




