import axios from "axios";

export default class API {
    // no params
    async getProduct() {
        let a = await axios.get(`http://localhost:4001/product`)
        return a.data;
    }
    async createProduct(id,name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb ) {
        let a = await axios.post(`http://localhost:4001/product/create`,{
            id_product : id,
            product_name: name,
            product_price: price,
            description: description,
            slug: slug,
            categories: category,
            color: col,
            style: sty,
            detail_info: detail,
            discount: disc,
            discount_percent: disc_percent,
            thumbnail: thumb

        })
        return a;
    }
    async getComment() {
        let a = await axios.get(`http://localhost:4001/comment`)
        return a.data;
    }
    async getOrderbyIDuser(id) {
        let a = await axios.get(`http://localhost:4001/order/`+ id)
        return a.data;
    }
    async createNewOrder(iduser,idproduct,productname,price,img,col,sty,quantity,siz) {
        let a = await axios.post(`http://localhost:4001/order/create`,{
            id_user: iduser,
            id_product: idproduct,
            product_name: productname,
            product_price: price,
            thumbnail:img,
            color: col,
            style: sty,
            quantity: quantity,
            size: siz
        })
        return a;
    }
    async deleteOneInOrder(iduser,idproduct){
        let a = await axios.post(`http://localhost:4001/order/deleteOne`,{
            id_user:iduser,
            id_product: idproduct
        })
        return a;
    }
    async createNewCart(iduser, tot, add, phon)
    {
        let a = await axios.post(`http://localhost:4001/cart/create`,{
            id_user: iduser,
            total: tot,
            address: add,
            phone: phon
        })
        return a;
    }
    // async getChartHome() {
    //     let a = await axios.get(`${global.config.API}/chart-home`)
    //     return a.data;
    // }
    // async getNewReleaseChart() {
    //     let a = await axios.get(`${global.config.API}/new-release-chart`)
    //     return a.data;
    // }
    // // 1 param
    // async getSong(id) {
    //     let a = await axios.get(`${global.config.API}/song?id=${id}`)
    //     return a.data;
    // }
    // async getDetailPlaylist(id) {
    //     let a = await axios.get(`${global.config.API}/detail-playlist?id=${id}`)
    //     return a.data;
    // }
    // async getHome(id) {
    //     let a = await axios.get(`${global.config.API}/home?id=${id}`)
    //     return a.data;
    // }
    // async getInfoSong(id) {
    //     let a = await axios.get(`${global.config.API}/song-info?id=${id}`)
    //     return a.data;
    // }
    // async getArtist(name) {
    //     let a = await axios.get(`${global.config.API}/artist?name=${name}`)
    //     return a.data;
    // }
    // async getLyric(id) {
    //     let a = await axios.get(`${global.config.API}/lyric?id=${id}`)
    //     return a.data;
    // }
    // async search(name) {
    //     let a = await axios.get(`${global.config.API}/search?name=${name}`)
    //     return a.data;
    // }
    // async getCategoryMV(id) {
    //     let a = await axios.get(`${global.config.API}/category-mv?id=${id}`)
    //     return a.data;
    // }
    // async getVideo(id) {
    //     let a = await axios.get(`${global.config.API}/video-mv?id=${id}`)
    //     return a.data;
    // }
    // // 3 params
    // async getListMV(id, page, count) {
    //     let a = await axios.get(`${global.config.API}/list-mv?id=${id}&page=${page}&count=${count}`)
    //     return a.data;
    // }
}