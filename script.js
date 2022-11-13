const wrapper = document.getElementById('tiles')
const targetWrapper = document.getElementById('targetTiles')

const createTile = (index, isTarget) => {
	const tile = document.createElement('div')
	tile.classList.add('tile')
	tile.style.opacity = 1
	tile.dataset.index = index
	tile.style.zIndex = index

	if (isTarget) {
		let animationTile = wrapper.querySelector('[data-index="' + index + '"]')
		tile.addEventListener('pointerenter', () => {
			animationTile.style.transform = 'translateX(200px) translateY(-200px)'
			animationTile.children[0].style.backgroundColor = 'rgb(180, 180, 180)'
			animationTile.children[1].style.backgroundColor = 'rgb(180, 180, 180)'
			animationTile.children[2].style.backgroundColor = 'rgb(180, 180, 180)'
		})
		tile.addEventListener('pointerleave', () => {
			animationTile.children[0].style.backgroundColor = 'rgb(20, 20, 20)'
			animationTile.children[1].style.backgroundColor = 'rgb(20, 20, 20)'
			animationTile.children[2].style.backgroundColor = 'rgb(20, 20, 20)'
			animationTile.style.transform = 'translateX(0px) translateY(0px)'
		})
	} else {
		const cubeSides = `
			<div class="left"></div>
			<div class="right"></div>
			<div class="top"></div>
		`
		tile.innerHTML = cubeSides


	}

	return tile
}

const createTiles = (quantity) => {
	Array.from(Array(quantity)).map((tile, index) => {
		wrapper.appendChild(createTile(index, false))
		targetWrapper.appendChild(createTile(index, true))
	})
}

const createGrid = () => {
	wrapper.innerHTML = ''
	targetWrapper.innerHTML = ''
	let rows = Math.floor(document.body.clientHeight / 50)
	let columns = Math.floor(document.body.clientWidth / 50)

	wrapper.style.setProperty('--rows', rows)
	wrapper.style.setProperty('--columns', columns)
	targetWrapper.style.setProperty('--rows', rows)
	targetWrapper.style.setProperty('--columns', columns)

	createTiles(rows * columns)
}

window.onresize = () => createGrid()

createGrid()
