let arr = [
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1560171649/marketing/liinlnkozof8mdtelot2.png",
		name: "General Physician ",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624208/marketing/fcqsjqyummdc0wv8eepm.png",
		name: "Skin and Hair Specialist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1560171754/marketing/zsreblulpofk1bqqi0vp.png",
		name: "Sexologist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624427/marketing/y7x2wylau943va6dcxyr.png",
		name: "Gynaecologist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624722/marketing/tesj5p15sruirjuy9jix.png",
		name: "Bone and Joint Specialist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1595408574/marketing/Kaya-Clinic-Logo.png",
		name: "Derma Care by Kaya",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624455/marketing/ll4mli8zbol6ovededr6.png",
		name: "Ear Nose Throat Specialist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624362/marketing/ahdy9o2zqjq8gi4v4hes.png",
		name: "Pathologist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1560172081/marketing/mops8f1it8faurfk5cqo.png",
		name: "Dietician",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624294/marketing/ew6o5oyhll6fftiaf7nb.png",
		name: "Psycologist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1560172025/marketing/ttaqvdla22lbpswd7gbg.png",
		name: "Dentist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624104/marketing/wh9j8lamt8bjognviwan.png",
		name: "Urologist",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624400/marketing/h3eaimhsl7lypjkxivck.png",
		name: "Homeopathy",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1559624785/marketing/zkvxs7knmdazinxhof1h.png",
		name: "Ayurveda",
	},
	{
		img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1560172172/marketing/nmln0dvwqgqfyx3lpruf.png",
		name: "Neurologist",
	},
];

slider(arr);
function slider(arr) {
	arr.forEach(function (e) {
		let { name, img } = e;
		let div = document.createElement("div");
		let image = document.createElement("img");
		image.src = img;
		let p = document.createElement("p");
		p.textContent = name;

		div.append(image, p);
		document.querySelector(".slider_flow").append(div);
	});
}
Footer