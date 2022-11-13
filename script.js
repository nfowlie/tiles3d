const wrapper = document.getElementById('tiles')

const createTile = (index) => {
	const tile = document.createElement('div')
	tile.classList.add('tile')
	tile.style.opacity = 1
	tile.dataset.index = index
	tile.style.zIndex = index

	const cubeSides = `
	<div class="left"></div>
	<div class="right"></div>
	<div class="top"></div>
	`
	tile.innerHTML = cubeSides

	tile.addEventListener('pointerenter', () => {
		tile.style.transform = 'translateX(200px) translateY(-200px)'
		tile.children[0].style.backgroundColor = 'rgb(180, 180, 180)'
		tile.children[1].style.backgroundColor = 'rgb(180, 180, 180)'
		tile.children[2].style.backgroundColor = 'rgb(180, 180, 180)'
	})
	tile.addEventListener('pointerleave', () => {
		tile.children[0].style.backgroundColor = 'rgb(20, 20, 20)'
		tile.children[1].style.backgroundColor = 'rgb(20, 20, 20)'
		tile.children[2].style.backgroundColor = 'rgb(20, 20, 20)'
		tile.style.transform = 'translateX(0px) translateY(0px)'
	})

	return tile
}

const createTiles = (quantity) => {
	Array.from(Array(quantity)).map((tile, index) => {
		wrapper.appendChild(createTile(index))
	})
}

const createGrid = () => {
	wrapper.innerHTML = ''
	let rows = Math.floor(document.body.clientHeight / 50)
	let columns = Math.floor(document.body.clientWidth / 50)

	wrapper.style.setProperty('--rows', rows)
	wrapper.style.setProperty('--columns', columns)

	createTiles(rows * columns)
}

window.onresize = () => createGrid()

createGrid()
