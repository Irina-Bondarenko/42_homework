"use strict";

class Gallery {
    constructor(API_URL, data) {
        this.API_URL = null;
        this.data = null;
    }

    async getData(url) {

        this.data = fetch(url, {
            method: "GET"
        })


        let response = await this.data;
        response = await response.json();

        return response;
    }

    render() {
        this.API_URL = "https://jsonplaceholder.typicode.com/albums";
        const galleryWrapperSelector = "#gallery";
        const galleryWrapper = document.querySelector(galleryWrapperSelector);

        this.getData(this.API_URL)
            .then(response => {
            this.data = response;
                console.log(this.data)
        })
    }





}

const firstGallery = new Gallery();



