const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$('.tab-2').onclick = function () {
    this.classList.remove('inactive')
    this.classList.add('active')
    $('.tab-3').classList.remove('active')
    $('.payment').classList.remove('active')
    $('.deli-infor').classList.add('active')
}

function pickAddress(v) {
    var selectDistrict = document.getElementById('district')
    switch (parseInt(v)) {
        case 1:
            selectDistrict.innerHTML =
                "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 71:
            selectDistrict.innerHTML =
                "<option>Thành Phố Sông Công</option>" +
                "<option>Huyện Phú Bình</option>" +
                "<option>Thị xã Phổ Yên</option>" +
                "<option>Huyện Đại Từ</option>" +
                "<option>Huyện Định Hóa</option>" +
                "<option>Huyện Phú Lương</option>" +
                "<option>Huyện Võ Nhai</option>" +
                "<option>Huyện Đồng Hỷ</option>" +
                "<option>Thành Phố Thái Nguyên</option>"

            break;
        case 78:
            selectDistrict.innerHTML =

                "<option >Quận Ngô Quyền</option>" +
                "<option>Huyện Tiên Lãng</option>" +
                "<option>Quận Lê Chân</option>" +
                "<option>Huyện Thủy Nguyên</option>" +
                "<option>Quận Kiến An</option>" +
                "<option>Quận Đồ Sơn</option>" +
                "<option>Quận Dương Kinh</option>" +
                "<option>Quận Hải An</option>" +
                "<option>Quận Hồng Bàng</option>" +
                "<option>Huyện An Dương</option>" +
                "<option>Huyện An LĂ£o</option>" +
                "<option>Huyện Bạch Long Vĩ</option>" +
                "<option>Huyện Cát Hải</option>" +
                "<option>Huyện Kiến Thụy</option>" +
                "<option>Huyện Vĩnh Bảo</option>"

            break;
        case 81:
            selectDistrict.innerHTML =
                "<option>Thành Phố Bắc Giang</option>" +
                "<option>Huyện Lạc Giang</option>" +
                "<option>Huyện Tân Yên</option>" +
                "<option>Huyện Lục Nam</option>" +
                "<option>Huyện Lục Ngạn</option>" +
                "<option>Huyện Hiệp Hòa </option>" +
                "<option>Huyện Sơn Động</option>" +
                "<option>Huyện Việt Yên</option>" +
                "<option>Huyện Yên Dũng</option>" +
                "<option>Huyện Yên Thế</option>"

            break;
        case 84:
            selectDistrict.innerHTML =
                "<option>Thành Phố Vĩnh Yên</option>" +
                "<option>Huyện Tam Dương</option>" +
                "<option >Huyện Vĩnh Tường</option>" +
                "<option >Thị xã Phúc Yên</option>" +
                "<option>Huyện Bình Xuyên</option>" +
                "<option >Huyện Lập Trạch</option>" +
                "<option>Huyện Sông Lô</option>" +
                "<option >Huyện Tam Đảo</option>" +
                "<option>Huyện Yên Lạc</option>"

            break;
        case 90:
            selectDistrict.innerHTML =
                "<option>Thành Phố Thanh Hóa</option>" +
                "<option>Huyện Quan Hóa</option>" +
                "<option>Huyện Quan Sơn</option>" +
                "<option>Huyện Mường Lát</option>" +
                "<option>Huyện Bá Thước</option>" +
                "<option >Huyện Thường Xuân</option>" +
                "<option>Huyện Như Xuân</option>" +
                "<option>Huyện Như Thanh</option>" +
                "<option>Huyện Lang Chánh</option>" +
                "<option>Huyện Ngọc Lặc</option>" +
                "<option>Huyện Thạch Thành</option>" +
                "<option>Huyện Cẩm Thủy</option>" +
                "<option>Huyện Thọ Xuân</option>" +
                "<option>Huyện Vĩnh Lộcn</option>" +
                "<option>Huyện Thiệu Hóa</option>" +
                "<option>Huyện Triệu Sơn</option>" +
                "<option>Huyện Nông Cống</option>" +
                "<option>Huyện Đông Sơn</option>" +
                "<option >Huyện Hà Trung</option>" +
                "<option>Huyện Hoằng Hóa</option>" +
                "<option>Huyện Nga Sơn</option>" +
                "<option>Huyện Hậu Lộc</option>" +
                "<option>Huyện Quảng Xương</option>" +
                "<option >Thị xã Bỉm Sơn</option>" +
                "<option >Huyện Tĩnh Gia</option>" +
                "<option >Huyện Yên Định</option>"

            break;
        case 92:
            selectDistrict.innerHTML =
                "<option>	Thành phố Hà Tĩnh	</option>" +
                "<option>	Thị xã Hồng Lĩnh	</option>" +
                "<option>	Huyện Hương Sơn	</option>" +
                "<option>	Huyện Đức Thọ	</option>" +
                "<option>	Huyện Nghi Xuân	</option>" +
                "<option>	Huyện Can Lộc	</option>" +
                "<option>	Huyện Hương Khê	</option>" +
                "<option>	Huyện Thạch Hà	</option>" +
                "<option>	Huyện Cẩm Xuyên	</option>" +
                "<option>	Huyện Kỳ Anh	</option>" +
                "<option>	Huyện Vũ Quang	</option>" +
                "<option>	Huyện Lộc Hà	</option>" +
                "<option>	Thị xã Kỳ Anh	</option>" 


            break;
        case 97:
            selectDistrict.innerHTML =
                "<option>	Thành phố Tam Kỳ	</option>" +
                "<option>	Thành phố Hội An	</option>" +
                "<option>	Huyện Duy Xuyên	</option>" +
                "<option>	Thị xã Điện Bàn	</option>" +
                "<option>	Huyện Đại Lộc	</option>" +
                "<option>	Huyện Quế Sơn	</option>" +
                "<option>	Huyện Hiệp Đức	</option>" +
                "<option>	Huyện Thăng Bình	</option>" +
                "<option>	Huyện Núi Thành	</option>" +
                "<option>	Huyện Tiên Phước	</option>" +
                "<option>	Huyện Bắc Trà My	</option>" +
                "<option>	Huyện Đông Giang	</option>" +
                "<option>	Huyện Nam Giang	</option>" +
                "<option>	Huyện Phước Sơn	</option>" +
                "<option>	Huyện Nam Trà My	</option>" +
                "<option>	Huyện Tây Giang	</option>" +
                "<option>	Huyện Phú Ninh	</option>" +
                "<option>	Huyện Nông Sơn	</option>" 

            break;
        case 100:
            selectDistrict.innerHTML =
                "<option>	Thành phố Tuy Hòa	</option>" +
                "<option>	Huyện Đồng Xuân	</option>" +
                "<option>	Thị xã Sông Cầu	</option>" +
                "<option>	Huyện Tuy An	</option>" +
                "<option>	Huyện Sơn Hòa	</option>" +
                "<option>	Huyện Sông Hinh	</option>" +
                "<option>	Huyện Đông Hòa	</option>" +
                "<option>	Huyện Phú Hòa	</option>" +
                "<option>	Huyện Tây Hòa	</option>" 

            break;
        case 101:
            selectDistrict.innerHTML = 
                "<option>	Thành phố Nha Trang	</option>" +
                "<option>	Huyện Vạn Ninh	</option>" +
                "<option>	Thị xã Ninh Hòa	</option>" +
                "<option>	Huyện Diên Khánh	</option>" +
                "<option>	Huyện Khánh Vĩnh	</option>" +
                "<option>	Thành phố Cam Ranh	</option>" +
                "<option>	Huyện Khánh Sơn	</option>" +
                "<option>	Huyện đảo Trường Sa	</option>" +
                "<option>	Huyện Cam Lâm	</option>" 

            break;
        case 104:
            selectDistrict.innerHTML =
                "<option>	Thành phố Pleiku	</option>" +
                "<option>	Huyện Chư Păh	</option>" +
                "<option>	Huyện Mang Yang	</option>" +
                "<option>	Huyện KBang	</option>" +
                "<option>	Thị xã An Khê	</option>" +
                "<option>	Huyện Kông Chro	</option>" +
                "<option>	Huyện Đức Cơ	</option>" +
                "<option>	Huyện Chư Prông	</option>" +
                "<option>	Huyện Chư Sê	</option>" +
                "<option>	Thị xã Ayun Pa	</option>" +
                "<option>	Huyện Krông Pa	</option>" +
                "<option>	Huyện Ia Grai	</option>" +
                "<option>	Huyện Đak Đoa	</option>" +
                "<option>	Huyện Ia Pa	</option>" +
                "<option>	Huyện Đak Pơ	</option>" +
                "<option>	Huyện Phú Thiện	</option>" +
                "<option>	Huyện Chư Pưh	</option>" 


            break;
        case 112:
            selectDistrict.innerHTML =
                "<option>	Thành phố Tây Ninh	</option>" +
                "<option>	Huyện Tân Biên	</option>" +
                "<option>	Huyện Tân Châu	</option>" +
                "<option>	Huyện Dương Minh Châu	</option>" +
                "<option>	Huyện Châu Thành	</option>" +
                "<option>	Huyện Hòa Thành	</option>" +
                "<option>	Huyện Bến Cầu	</option>" +
                "<option>	Huyện Gò Dầu	</option>" +
                "<option>	Huyện Trảng Bàng	</option>" 


            break;
        case 113:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 115:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 117:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 119:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 120:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 121:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 122:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 123:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 124:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 125:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 126:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 127:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 128:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 129:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 130:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 131:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 132:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 133:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 135:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 136:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 137:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 138:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 139:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 140:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 141:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 142:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 143:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 144:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 145:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 146:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 147:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 148:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 149:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 150:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 151:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 152:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 153:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 154:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 155:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 156:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 157:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 158:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 159:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 160:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 161:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 162:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 163:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 164:
            selectDistrict.innerHTML = "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"



            break;
        case 165:
            selectDistrict.innerHTML =
                "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 166:
            selectDistrict.innerHTML =
                "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;
        case 167:
            selectDistrict.innerHTML =
                "<option>Quận 1</option>" +
                "<option>Quận 2</option>" +
                "<option>Quận 3</option>" +
                "<option>Quận 4</option>" +
                "<option>Quận 5</option>" +
                "<option>Quận 6</option>" +
                "<option>Quận 7</option>" +
                "<option>Quận 8</option>" +
                "<option>Quận 9</option>" +
                "<option>Quận 10</option>" +
                "<option>Quận 11</option>" +
                "<option>Quận Gò Vấp</option>" +
                "<option>Quận Tân Bình</option>" +
                "<option>Quận Bình Thạnh</option>" +
                "<option>Quận Phú Nhuận</option>" +
                "<option>Quận Thủ Đức</option>" +
                "<option>Quận Tân Phú</option>" +
                "<option>Quận Bình Tân</option>" +
                "<option>Huyện Bình Chánh</option>"

            break;

    }
}

$('#submit-infor').onclick = function checkMissingField() {
    const form = document.forms['form-cus-infor']
    if (form.name.value == "" || form.email.value == "" || form.numberphone.value == "" ||
        form.city.value == "" || form.district.value == "" ||
        form.wards.value == "" || form.location.value == "") {
        alert("Vui lòng nhập đầy đủ thông tin")
    }
    else {
        confirm("Thông tin đã được lưu")
        $('.payment').classList.add('active')
        $('.deli-infor').classList.remove('active')
        $('.tab-2').classList.remove('active')
        $('.tab-3').classList.remove('inactive')
        $('.tab-3').classList.add('active')
    }
}
