import { isWebp } from './components/isWebp.js'
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui'

isWebp()

const $btn = document.querySelector('.btn')
const $text = document.querySelector('.text')
const $link = document.querySelector('.link')

console.log(document.querySelectorAll('[data-src]'))
document.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-src')) {
		const self = e.target
		const nextModalId = self.getAttribute('data-src')
		const currentModal = self.closest('.modal')
		const $nextModal = document.querySelector(`${nextModalId}`)
		const asd = Fancybox.getInstance(nextModalId)
	}
})
const myPanzoom = new Panzoom(document.querySelector('#myPanzoom'), {
	// Your options go here
})
