document.addEventListener("DOMContentLoaded",function(){
var nutPhai = document.querySelector('.nuts b.phai');
var nutTrai = document.querySelector('.nuts b.trai');
var slides = document.querySelectorAll('.slides ul li');
console.log(slides);
var chiSoHienTai = 0;
var soLuongSlide = slides.length;
var trangthai = 'dangdungyen';


// xac ding slide hien tai va slide tiep theo
// goi su kien click vao nut
var chuyenSlideChoNutPhai = function(){
	if (trangthai == 'dangchuyendong') {return false;}
	trangthai = 'dangchuyendong';
	var biendem = 0;
	var phanTuHienTai = slides[chiSoHienTai];
	if (chiSoHienTai < soLuongSlide - 1) {
		chiSoHienTai++;
	}
	else{
		chiSoHienTai = 0;
	}

	var phanTuTiepTheo = slides[chiSoHienTai];
	var xuLyHienTaiKetThucCD = function () {
		this.classList.remove('dangxem');
		this.classList.remove('bienMatKhiAnNext');
		biendem++;
		if (biendem == 2) {trangthai = 'dangdungyen';}
		
	}
	
	var xuLyTiepTheoKetThucCD = function () {
		this.classList.remove('diVaoKhiAnNext');
		this.classList.add('dangxem');
		biendem++;
		if (biendem == 2) {trangthai = 'dangdungyen';}
		console.log(biendem);
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
	phanTuHienTai.classList.add('bienMatKhiAnNext');
	phanTuTiepTheo.classList.add('diVaoKhiAnNext');
	
};

nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
// xong nut phai
 var chuyenSlideChoNutTrai = function () {
 	if (trangthai =='dangchuyendong') {return false;}
 	trangthai ='dangchuyendong';
 	// 1-xac dinh phan tu hien tai va tiep theo
 	var phanTuHienTai = slides[chiSoHienTai];
 	var biendem = 0;
 	// phan tu tiep theo
 	if (chiSoHienTai > 0) {chiSoHienTai--;}
 	
 	else{chiSoHienTai = soLuongSlide - 1;}
 	var phanTuTiepTheo=slides[chiSoHienTai];
 	var xuLyHienTaiKetThucCD = function () {
 		this.classList.remove('dangxem');
 		this.classList.remove('bienMatKhiAnPrev');
 		biendem++;
 		if (biendem == 2) {trangthai = 'dangdungyen';}
 	}
 	var xuLyTiepTheoKetThucCD = function () {
 		this.classList.add('dangxem');
 		this.classList.remove('diVaoKhiAnPrev');
 		biendem++;
 		if (biendem == 2) {trangthai = 'dangdungyen';}
 	}
 	phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucCD);
 	phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);
 	phanTuHienTai.classList.add('bienMatKhiAnPrev');
 	phanTuTiepTheo.classList.add('diVaoKhiAnPrev');

 }
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);
},false)
