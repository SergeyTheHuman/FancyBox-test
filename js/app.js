import { isWebp } from './components/isWebp.js'
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui'

isWebp()

const $btn = document.querySelector('.btn')
const $text = document.querySelector('.text')
const $link = document.querySelector('.link')

console.log(document.querySelectorAll('[data-src]'))

document.addEventListener('click', (e) => {
	// Если идет переход из одного попапа в другой, то закрываем предыдущий
	if (e.target.hasAttribute('data-src') && e.target.closest('.modal')) {
		let currentModalId = Fancybox.getInstance().id
		const currentModal = Fancybox.getInstance(currentModalId - 1)
		currentModal.close()
	}
})

const myPanzoom = new Panzoom(document.querySelector('#myPanzoom'), {
	// Your options go here
})
