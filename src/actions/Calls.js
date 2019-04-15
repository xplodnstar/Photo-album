import axios from 'axios'

export function getAlbumList() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/albums').then(resp1 => {
            const albums = resp1.data.map((item1) => {
                return {
                    aPath: '/album/' + item1.id,
                    aArt: item1.img,
                    aName: item1.name,
                    aDesc: item1.description,
                    aId: item1.id
                }
            })
            resolve(albums)
        })
    })
}

export function getAlbum(aId) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/albums/${aId}?_embed=images`).then(resp2 => {
            const aName = resp2.data.name
            const aDesc = resp2.data.description

            const images = resp2.data.images.map((item2) => {
                return {
                    iPath: '/image/' + item2.id,
                    iArt: item2.url,
                    iName: item2.name,
                    iSite: item2.description,
                    iId: item2.id,
                    albumId: item2.albumId
                }
            })
            resolve(
                images, aName, aDesc
            )
        })
    })
}

export function getImage(iId) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/images/${iId}`).then(resp3 => {
            const albumId = resp3.data.albumId
            const image = resp3.data.url

            axios.get(`http://localhost:3001/images?albumId=${albumId}`).then(resp4 => {
                const images = resp4.data
                const current = images.findIndex(i => i.iId === Number(iId))

                let prev, next

                if (current === 0) {
                    prev = 0
                } else {
                    prev = current - 1
                }

                if (current === images.length - 1) {
                    next = images.length - 1
                } else {
                    next = current + 1
                }
                resolve(
                    image, albumId, prev, next
                )
            })

        })
    })
}