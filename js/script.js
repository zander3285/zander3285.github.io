	let Button = document.querySelectorAll('.add-btn')

const showElem = function(evt)
{
	let parentButton = evt.target.parentNode;
	let Element = parentButton.querySelector('.choose-elem');
	Element.classList.toggle('hidden');
};

Button.forEach(function(but)
{
	but.addEventListener('click', showElem);
}
);

const changeLayoutHandler = function (evt) {
	const newLayout = evt.target.value;
	//console.log
	const LayoutElement = document.querySelector('.layout');
	LayoutElement.classList.remove('layout--landing');
	LayoutElement.classList.remove('layout--blog');
	LayoutElement.classList.remove('layout--shop');
	LayoutElement.classList.add('layout--' + newLayout );
};

document.querySelector('.grid-select').addEventListener('change', changeLayoutHandler);

/**const h1TemplateElement = document.querySelector('#h1-template').content;
const h1BlockElement = h1TemplateElement.querySelector('.element');
const h1CloneElement = h1BlockElement.cloneNode(true);
const headerWrapperElement = document.querySelector('.header__elements-wrapper');
headerWrapperElement.append(h1CloneElement);
headerWrapperElement.parentNode.classList.remove('header--empty');**/

const ButtonDeleteHandler = function (evt) {
const element = evt.target.parentNode;
const wrapper = element.parentNode;
const block = wrapper.parentNode;
element.remove();

const wrapperItems = wrapper.querySelectorAll('.element');
	if (wrapperItems.length === 0) {
		if(block.classList.contains('header')) {
			block.classList.add('header--empty');
		}

		if(block.classList.contains('content')) {
			block.classList.add('content--empty');
		}

		if(block.classList.contains('footer')) {
			block.classList.add('footer--empty');
		}	
	}
};

const editContentHandler = function (evt) {
	const editedElement = evt.target;
	let currentValue;
	
	if (editedElement.tagName === 'IMG') {
		currentValue = editedElement.src;
	} else {
		currentValue = editedElement.textContent;
	}
		
	const newValue = window.prompt('Вы хотите поменять значение?', currentValue);
	
	if (editedElement.tagName === 'IMG') {
		editedElement.src = newValue;
	} else {
		editedElement.textContent = newValue;
	}
}

const chooseButtonElements = document.querySelectorAll('.choose-elem__btn');

const addElementHandler = function (evt)
{
	const clickedBtn = evt.target;
	const addMenuElement = clickedBtn.parentNode;
	addMenuElement.classList.add('hidden');
	
	const blockType = clickedBtn.dataset.type;
	console.log('#' + blockType + '-template');
	
	const blockContainer = clickedBtn.dataset.container;
	console.log ('.' + blockContainer + '__elements-wrapper');
	
	const template = document.querySelector('#' + blockType + '-template').content;
	const templateElement = template.cloneNode(true);
	const blockElement = templateElement.querySelector('.element');
	
	const containerWrapperElement = document.querySelector('.' + blockContainer + '__elements-wrapper');
	containerWrapperElement.append(blockElement);
	
	if (blockContainer.includes('content')) {
		containerWrapperElement.parentElement.classList.remove('content--empty');
	} else {
		containerWrapperElement.parentElement.classList.remove(blockContainer + '--empty');
	}
	
	blockElement.querySelector('.delete-btn').addEventListener('click', ButtonDeleteHandler);
	blockElement.querySelector('.template-content').addEventListener('dblclick', editContentHandler);
};

chooseButtonElements.forEach(function (item) {
	return item.addEventListener('click', addElementHandler);
});