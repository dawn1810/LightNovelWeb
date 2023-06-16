const avtBtn = document.querySelector(".dropdown-trigger");
const avtUpLoad = document.getElementById('file-upload');
const avatar = document.querySelector('.your-avt');
const dropZone = document.querySelector('.drop-zone');

const button_file = document.querySelectorAll('.button_file')

for(const button of button_file){
	button.onclick = function(){
        console.log('ok')
		button.parentElement.querySelector('#fullname').click()
	}
}

// // Set avt as default:
// if (localStorage.getItem('avt')) {
// 	setAvtDefault(localStorage.getItem('avt'));
// }

// function setAvtDefault(base64Data) {
// 	avatar.src = base64Data;
// }

// change the avatar image
avtBtn.addEventListener("click", function (event) {
	avtUpLoad.click();
	return false;
});

avtUpLoad.addEventListener("change", function (event) {
	const file = event.target.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result
		avatar.src = reader.result;
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar.src !== '') {
		dropZone.innerHTML = '';
	} 
});

function allowDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		const base64 = reader.result
		avatar.src = reader.result;
	};
	reader.readAsDataURL(file);

	// disappear drop text
	if (avatar.src !== '') {
		dropZone.innerHTML = '';
	}
}




document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let unicycle = new UnicycleRangeSlider("#unicycle1");
    }, 500);
});
class UnicycleRangeSlider {
    constructor(el) {
        this.wheel = document.querySelector(`${el} input[type=range]`);
        this.marker = document.querySelector(`${el} .unicycle__marker`);
        this.flag = document.querySelector(`${el} .unicycle__flag`);

        this.updateBodyPos();
        this.wheel.addEventListener("input", () => { this.updateBodyPos(); });
    }
    updateBodyPos() {
        let max = this.wheel.max,
            min = this.wheel.min,
            realValue = this.wheel.value,
            ticks = max - min,
            relValue = realValue - min,
            percent = relValue / ticks,
            revs = 1,
            left = percent * 100,
            emAdjust = percent * 1.5,
            pedalRot = percent * (360 * revs),
            period = (1 / ((ticks / revs) / 2)) * relValue * Math.PI,
            rightLegRot = -22.5 * Math.sin(period + (1.85 * Math.PI)) - 22.5,
            rightLowerLegRot = 45 * Math.sin(period + (0 * Math.PI)) + 45,
            leftLegRot = -22.5 * Math.sin(period + (2.85 * Math.PI)) - 22.5,
            leftLowerLegRot = 45 * Math.sin(period + (1 * Math.PI)) + 45,
            cssVars = {
                "--pedalRot": `${pedalRot}deg`,
                "--rightLegRot": `${rightLegRot}deg`,
                "--rightLowerLegRot": `${rightLowerLegRot}deg`,
                "--leftLegRot": `${leftLegRot}deg`,
                "--leftLowerLegRot": `${leftLowerLegRot}deg`
            };
        // position stick figure and unicycle body
        this.marker.style.left = `calc(${left}% - ${emAdjust}em)`;
        // update the variables in CSS
        for (let v in cssVars)
            this.marker.style.setProperty(v, cssVars[v]);
        // number in the flag
        // if (realValue == 100) {
        //     this.flag.innerHTML = 'Nữ';
        // }
        // else if (realValue == 0) {
        //     this.flag.innerHTML = 'Nam';
        // }
        // else {
        //     this.flag.innerHTML = '3D';
        // }
        this.flag.innerHTML = realValue;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let unicycle = new UnicycleRangeSlider("#unicycle1");
    }, 500);
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let unicycle = new UnicycleRangeSlider("#unicycle12");
    }, 500);
});




function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
  
  // Danh sách các phần tử
  const myList = ['Súng ống đầy đủ', 'Ngực công, mông thủ', 'Thay đổi theo nồng độ cồn', '3D siêu chân thực', 'Không có giới tính', 'Sướng là được','Thú tính','Lưỡng long nhất thể','Quan trọng là thần thái'];
  
  


  document.querySelector('.button_random').onclick = function(e){
    e.preventDefault();
    // Gọi hàm để tạo số ngẫu nhiên
    const randomElement = getRandomElement(myList);
    console.log(randomElement);
  document.querySelector('.sex_random').innerHTML = randomElement
  }




const yourinfo_btn=querySelector(".yourinfo");

const yourfollow_btn=querySelector(".yourfollow");

const yournotify_btn=querySelector(".yournotify");

const yourchangepass_btn=querySelector(".yourchangepass");


