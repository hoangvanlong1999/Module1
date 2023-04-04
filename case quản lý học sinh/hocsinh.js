function ktemail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

let hocsinh = []
var chiso = -1
function save() {
    let fullname = document.getElementById('fullname').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let adress = document.getElementById('adress').value
    let gt = ''
    if (document.getElementById('gt1').checked) {
        gt = document.getElementById('gt1').value
    } else if (document.getElementById('gt2').checked) {
        gt = document.getElementById('gt2').value
    }
    if (fullname == '') {
        document.getElementById('loi').innerHTML = 'Vui Lòng Nhập'
        fullname = ''
    } else if ((fullname.trim().length) < 2) {
        document.getElementById('loi').innerHTML = 'nhiều hơn 2 kí tự'
        fullname = ''
    } else if ((fullname.trim().length) > 50) {
        document.getElementById('loi').innerHTML = 'ít hơn 50 kí tự'
        fullname = ''
    } else document.getElementById('loi').innerHTML = ''


    if (email == '') {
        document.getElementById('loi2').innerHTML = 'Vui Lòng Nhập'
        email = ''
    } else if (!ktemail(email)) {
        document.getElementById('loi2').innerHTML = 'email khong đúng định dạng'
        email = ''
    }
    else if ((email.trim().length) < 2) {
        document.getElementById('loi2').innerHTML = 'nhiều hơn 2 kí tự'
        email = ''
    } else if ((email.trim().length) > 50) {
        document.getElementById('loi2').innerHTML = 'ít hơn 50 kí tự'
        email = ''
    } else document.getElementById('loi2').innerHTML = ''

    if (phone == '') {
        document.getElementById('loi3').innerHTML = 'Vui Lòng Nhập'
        phone = ''
    } else if ((phone.trim().length) < 2) {
        document.getElementById('loi3').innerHTML = 'nhiều hơn 2 kí tự'
        phone = ''
    } else if ((phone.trim().length) > 20) {
        document.getElementById('loi3').innerHTML = 'ít hơn 10 kí tự'
        phone = ''
    } else document.getElementById('loi3').innerHTML = ''

    if (adress == '') {
        document.getElementById('loi4').innerHTML = 'Vui Lòng Nhập'
        adress = ''
    } else if ((adress.trim().length) < 2) {
        document.getElementById('loi4').innerHTML = 'nhiều hơn 2 kí tự'
        adress = ''
    } else document.getElementById('loi4').innerHTML = ''

    if (gt == '') {
        document.getElementById('loi5').innerHTML = 'Vui Lòng chọn GT'
        gt = ''
    } else document.getElementById('loi5').innerHTML = ''

    if (fullname && email && phone && adress && gt) {
        hocsinh.push({
            fullname: fullname,
            email: email,
            phone: phone,
            adress: adress,
            gt: gt
        })

        hienthi()


        
    }


}
function xoa(id) {
    hocsinh.splice(id, 1);
    console.log(hocsinh);
    hienthi();
}

function sua(id) {
    var g = []
    let hocsinhb = hocsinh[id]
    
    document.getElementById('fullname').value = hocsinhb.fullname
    document.getElementById('email').value = hocsinhb.email
    document.getElementById('phone').value = hocsinhb.phone
    document.getElementById('adress').value = hocsinhb.adress
    a = ''
    if (document.getElementById('gt1').checked) {
        a = document.getElementById('gt1').value
    } else if (document.getElementById('gt2').checked) {
        a = document.getElementById('gt2').value
    } 
    document.getElementById('capnhat').addEventListener('click',function(){

        hocsinh[id] = {
            fullname : document.getElementById('fullname').value,
            email : document.getElementById('email').value,
            phone : document.getElementById('phone').value,
            adress :  document.getElementById('adress').value,
            gt : a
        }
        console.log('123');  
        console.log(hocsinhb);

        hienthi()
    })
    
}

function hienthi() {

        let banghtml = `<tr>
            <td>STT</td>
            <td>Họ Và Tên</td>
            <td>Email</td>
            <td>Điện THoại</td>
            <td>Địa Chỉ</td>
            <td>Giới Tính</td>
            <td width='130px' >Hành Động</td>
        </tr>`;

        hocsinh.forEach((hocsinhb, KEY) => {  
            banghtml += `<tr>
                    <td>${KEY}</td>
                    <td>${hocsinhb.fullname}</td>
                    <td>${hocsinhb.email}</td>
                    <td>${hocsinhb.phone}</td>
                    <td>${hocsinhb.adress}</td>
                    <td>${hocsinhb.gt}</td>
                    <td> <button onclick="sua(${KEY})" id="${KEY}">Edit</button> | <button onclick="xoa(${KEY})" id="${KEY}">delete</button></td>
                </tr>`

        });


        document.getElementById('bang1').innerHTML = banghtml

        document.getElementById('fullname').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('adress').value = ''
    }

    
