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

export function getAlbum(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp2 => {
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
            resolve({
                images, aName, aDesc

            })
        })
    })
}

export function getImage(id) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/images/${id}`).then(resp3 => {
            const albumId = resp3.data.albumId
            const iArt = resp3.data.url
            const iName = resp3.data.name
            const iId = resp3.data.id

            axios.get(`http://localhost:3001/images?albumId=${albumId}`).then(resp4 => {
                const images = resp4.data
                const current = images.findIndex(i => i.id === Number(id))

                let prevPic, nextPic

                if (current === 0) {
                    prevPic = 0
                } else {
                    prevPic = current - 1
                }

                if (current === images.length - 1) {
                    nextPic = images.length - 1
                } else {
                    nextPic = current + 1
                }

                const prev = images[prevPic].id
                const next = images[nextPic].id

                resolve({
                    images, iArt, albumId, iName, iId, prev, next
                })
            })

        })
    })
}