"use strict";

class Gallery {
  constructor() {
    this.API_URL = null;
    this.data = null;
  }

  async getData(url) {
    this.data = fetch(url, {
      method: "GET",
    });

    let response = await this.data;
    response = await response.json();

    return response;
  }

  render() {
    this.API_URL = "https://jsonplaceholder.typicode.com/albums";
    const galleryWrapperSelector = "#gallery";
    const galleryWrapper = document.querySelector(galleryWrapperSelector);

    this.getData(this.API_URL).then((response) => {
      this.data = response;

      for (let item of this.data) {
        const gallery = document.createElement("div");
        gallery.classList.add("col-2", "gallery_item", "m-1");
        gallery.setAttribute("id", item.id);
        gallery.innerHTML = `${item.title}`;

        galleryWrapper.append(gallery);
      }
    });

    galleryWrapper.addEventListener("click", this.albumLoadHandler);
  }

  albumLoadHandler = (event) => {
    event.stopPropagation();

    if (!event.target.classList.contains("gallery_item")) return;

    const albumID = Number(event.target.closest("[id]").id);
    this.renderAlbum(albumID);
  };

  renderAlbum = (id) => {
    const API_URL_ALBUM = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

    this.getData(API_URL_ALBUM).then((response) => {
      this.data = response;

      localStorage.setItem("album", JSON.stringify(this.data));
      window.location.href = "../pages/album.html";
    });
  };
}

const firstGallery = new Gallery();
firstGallery.render();
