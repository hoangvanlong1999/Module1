
document.getElementById('kiemtra').addEventListener('click',function(){
        var tang = document.getElementById('chontang1').value
        var mau = document.getElementById('chonmau2').value
        var kg = document.getElementById('nhap').value
        switch (tang){
            case 'sonlot':
                switch (mau){
                    case 'vang':
                        document.getElementById('banghienthi').innerHTML = lotvang(kg)
                        break;
                    case 'do':
                        document.getElementById('banghienthi').innerHTML = lotdo(kg)
                        break;  
                    case 'nau':
                        document.getElementById('banghienthi').innerHTML = lotnau(kg)
                        break;
                    case 'xanhla':
                        document.getElementById('banghienthi').innerHTML = lotxanhla(kg)
                        break; 
                    case 'xanhduong':
                        document.getElementById('banghienthi').innerHTML = lotxanhduong(kg)
                        break;   
                }
            case 'sonlamdep':
                switch (mau){
                    case 'vang':
                        document.getElementById('banghienthi').innerHTML = ngoaivang(kg)
                        break;
                    case 'do':
                        document.getElementById('banghienthi').innerHTML = ngoaido(kg)
                        break;  
                    case 'nau':
                        document.getElementById('banghienthi').innerHTML = ngoainau(kg)
                        break;
                    case 'xanhla':
                        document.getElementById('banghienthi').innerHTML = ngoaixanhla(kg)
                        break; 
                    case 'xanhduong':
                        document.getElementById('banghienthi').innerHTML = ngoaixanhduong(kg)
                        break;   
                }  
        }
        



})

function lotvang(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Vàng Như Sau :</li> <br> <br> <li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.3+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.14+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function lotdo(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Đỏ Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.32+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.2+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function lotnau(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Nâu Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.35+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.15+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function lotxanhla(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Xanh Lá Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.6+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.16+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function lotxanhduong(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Xanh Dương Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.45+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.25+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function ngoaivang(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Vàng Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.42+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.18+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function ngoaido(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Đỏ Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.23+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.15+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function ngoainau(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Nâu Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.54+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.14+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function ngoaixanhla(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Xanh Lá Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.34+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.12+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}

function ngoaixanhduong(kg) {
    var g='<li>Tỷ Lệ Pha Sơn Màu Xanh Dương Như Sau :</li> <br> <br><li>khối Lượng : '+ kg+' kg' +'</li> <br> <br>'+'<li>Dung Môi : '+ kg*0.31+' kg' +'</li> <br> <br> <li> Keo Kết Sơn :'+ kg*0.14+' kg' +'</li> <br> </br> *lưu ý: trộn đều hỗn hợp sơn, và mặc bảo hộ khi sơn!' ;
    return g; 

}