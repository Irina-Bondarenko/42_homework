"use strict";

class Gallery {
  constructor(data) {
    this.data = data;
  }

  render() {
    this.data = JSON.parse(localStorage.getItem("album"));

    const albumMainWrapperSelector = "#album-content";
    const albumMainWrapper = document.querySelector(albumMainWrapperSelector);

    for (let item of this.data) {
      const albumWrapper = document.createElement("div");
      const albumImage = document.createElement("img");

      albumWrapper.classList.add("gallery_item");

      albumImage.src = item.url;

      albumWrapper.append(albumImage);
      albumMainWrapper.append(albumWrapper);
    }
  }
}

const secondClass = new Gallery();

secondClass.render();
