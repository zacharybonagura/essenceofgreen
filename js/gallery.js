function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let general_gallery_arr = [
  "H 1.jpg",
  "H 11.jpg",
  "H 18.jpg",
  "H 19.jpg",
  "H 2.jpg",
  "H 24.jpg",
  "H 28.jpg",
  "H 33.jpg",
  "H 39.jpg",
  "H 42.jpg",
  "H 46.jpg",
  "H 48.jpg",
  "H 55.jpg",
  "H 59.jpg",
  "H 6.jpg",
  "H 62.png",
  "H 63.jpg",
  "H 66.jpg",
  "HA 1.jpg",
  "HA 19.jpg",
  "HA 2.jpg",
  "HA 24.jpg",
  "HA 31.jpg",
  "HA 32.jpg",
  "HA 4.jpg",
  "HA 5.jpg",
  "HA 6.PNG",
  "HA 9.jpg",
  "HO 6.jpg",
  "HO 8.jpg",
  "HR 12.jpg",
  "HR 17.jpg",
  "HR 20.jpg",
  "HR 24.jpg",
  "HR 25.jpg",
  "HR 28.jpg",
  "HR 3.jpg",
  "HR 30.jpg",
  "HR 31.jpg",
  "HR 38.JPG",
  "HR 4.jpg",
  "HR 6.jpg",
  "HRA 1.jpg",
  "HRO 10.jpg",
  "HRO 12.jpg",
  "HRO 13.jpg",
  "HRO 16.jpg",
  "HRO 17.jpg",
  "HRO 20.jpg",
  "HRO 3.jpg",
  "HRO 33.jpg",
  "HRO 4.jpg",
  "HRO 7.jpg",
  "HRO 8.jpg",
  "HRO 9.jpg",
  "HR_0.jpg",
  "H_0.jpeg",
  "L 1.jpg",
  "L 14.jpg",
  "L 16.jpg",
  "L 17.jpg",
  "L 19.jpg",
  "L 2.jpg",
  "L 20.jpg",
  "L 21.jpg",
  "L 23.jpg",
  "L 26.jpg",
  "L 27.jpg",
  "L 28.jpg",
  "L 31.jpg",
  "L 38.jpg",
  "L 39.jpg",
  "L 40.jpg",
  "L 41.jpg",
  "L 44.jpg",
  "L 5.jpg",
  "L 6.jpg",
  "L 61.jpg",
  "L 62.jpg",
  "L 64.jpg",
  "L 71.jpg",
  "L 73.jpg",
  "LA 1.jpg",
  "LH 1.jpg",
  "LH 11.jpg",
  "LH 12.jpg",
  "LH 16.jpg",
  "LH 17.jpg",
  "LH 18.jpg",
  "LH 2.jpeg",
  "LH 20.jpg",
  "LH 21.jpg",
  "LH 22.jpg",
  "LH 26.jpg",
  "LH 28.jpg",
  "LH 29.jpg",
  "LH 3.jpg",
  "LH 32.jpg",
  "LH 36.jpg",
  "LH 38.jpg",
  "LH 40.jpg",
  "LH 43.jpg",
  "LH 47.jpg",
  "LH 48.jpg",
  "LH 5.jpg",
  "LH 51.jpg",
  "LH 53.jpg",
  "LH 8.jpg",
  "LHA 1.jpg",
  "LHA 11.jpg",
  "LHA 14.jpg",
  "LHA 15.jpg",
  "LHA 17.jpg",
  "LHA 18.jpg",
  "LHA 2.jpg",
  "LHA 21.jpg",
  "LHA 23.jpg",
  "LHA 24.jpg",
  "LHA 27.jpg",
  "LHA 28.jpg",
  "LHA 3.jpg",
  "LHA 34.jpg",
  "LHA 35.jpg",
  "LHA 37.jpg",
  "LHA 39.jpg",
  "LHA 40.jpg",
  "LHA 43.jpg",
  "LHA 45.jpg",
  "LHA 47.jpg",
  "LHA 49.jpg",
  "LHA 5.jpg",
  "LHA 56.jpg",
  "LHA 57.jpg",
  "LHA 6.jpg",
  "LHA 61.jpg",
  "LHA 63.jpg",
  "LHA 64.jpg",
  "LHA 65.jpg",
  "LHA 66.jpg",
  "LHA 8.jpg",
  "LHO 2.jpg",
  "LHO 4.jpg",
  "LHR 1.jpg",
  "LHR 13.jpg",
  "LHR 14.jpg",
  "LHR 2.jpg",
  "LHR 27.jpg",
  "LHR 28.jpg",
  "LHR 5.jpg",
  "LHR 6.jpg",
  "LHR 9.jpg",
  "LHRO 1.jpg",
  "LHRO 3.jpg",
  "LR 13.jpg",
  "LR 15.jpg",
  "LR 20.jpg",
  "LR 22.jpg",
  "LR 8.jpg",
  "LR 9.jpg",
  "LR_0.jpg",
  "O 10.jpg",
  "O 12.jpg",
  "O 9.jpg",
  "R 2.jpg",
  "R 6.jpg",
  "RO 1.jpg",
  "RO 2.jpg",
  "RO 7.jpg",
];
// shuffleArray(general_gallery_arr);

let landscape_gallery_arr = [
  "L 1.jpg",
  "L 14.jpg",
  "L 16.jpg",
  "L 17.jpg",
  "L 19.jpg",
  "L 2.jpg",
  "L 20.jpg",
  "L 21.jpg",
  "L 23.jpg",
  "L 26.jpg",
  "L 27.jpg",
  "L 28.jpg",
  "L 31.jpg",
  "L 38.jpg",
  "L 39.jpg",
  "L 40.jpg",
  "L 41.jpg",
  "L 44.jpg",
  "L 5.jpg",
  "L 6.jpg",
  "L 61.jpg",
  "L 62.jpg",
  "L 64.jpg",
  "L 71.jpg",
  "L 73.jpg",
  "LA 1.jpg",
  "LH 1.jpg",
  "LH 11.jpg",
  "LH 12.jpg",
  "LH 16.jpg",
  "LH 17.jpg",
  "LH 18.jpg",
  "LH 2.jpeg",
  "LH 20.jpg",
  "LH 21.jpg",
  "LH 22.jpg",
  "LH 26.jpg",
  "LH 28.jpg",
  "LH 29.jpg",
  "LH 3.jpg",
  "LH 32.jpg",
  "LH 36.jpg",
  "LH 38.jpg",
  "LH 40.jpg",
  "LH 43.jpg",
  "LH 47.jpg",
  "LH 48.jpg",
  "LH 5.jpg",
  "LH 51.jpg",
  "LH 53.jpg",
  "LH 8.jpg",
  "LHA 1.jpg",
  "LHA 11.jpg",
  "LHA 14.jpg",
  "LHA 15.jpg",
  "LHA 17.jpg",
  "LHA 18.jpg",
  "LHA 2.jpg",
  "LHA 21.jpg",
  "LHA 23.jpg",
  "LHA 24.jpg",
  "LHA 27.jpg",
  "LHA 28.jpg",
  "LHA 3.jpg",
  "LHA 34.jpg",
  "LHA 35.jpg",
  "LHA 37.jpg",
  "LHA 39.jpg",
  "LHA 40.jpg",
  "LHA 43.jpg",
  "LHA 45.jpg",
  "LHA 47.jpg",
  "LHA 49.jpg",
  "LHA 5.jpg",
  "LHA 56.jpg",
  "LHA 57.jpg",
  "LHA 6.jpg",
  "LHA 61.jpg",
  "LHA 63.jpg",
  "LHA 64.jpg",
  "LHA 65.jpg",
  "LHA 66.jpg",
  "LHA 8.jpg",
  "LHO 2.jpg",
  "LHO 4.jpg",
  "LHR 1.jpg",
  "LHR 13.jpg",
  "LHR 14.jpg",
  "LHR 2.jpg",
  "LHR 27.jpg",
  "LHR 28.jpg",
  "LHR 5.jpg",
  "LHR 6.jpg",
  "LHR 9.jpg",
  "LHRO 1.jpg",
  "LHRO 3.jpg",
  "LR 13.jpg",
  "LR 15.jpg",
  "LR 20.jpg",
  "LR 22.jpg",
  "LR 8.jpg",
  "LR 9.jpg",
  "LR_0.jpg",
];
// shuffleArray(landscape_gallery_arr);

let hardscape_gallery_arr = [
  "H 1.jpg",
  "H 11.jpg",
  "H 18.jpg",
  "H 19.jpg",
  "H 2.jpg",
  "H 24.jpg",
  "H 28.jpg",
  "H 33.jpg",
  "H 39.jpg",
  "H 42.jpg",
  "H 46.jpg",
  "H 48.jpg",
  "H 55.jpg",
  "H 59.jpg",
  "H 6.jpg",
  "H 62.png",
  "H 63.jpg",
  "H 66.jpg",
  "HA 1.jpg",
  "HA 19.jpg",
  "HA 2.jpg",
  "HA 24.jpg",
  "HA 31.jpg",
  "HA 32.jpg",
  "HA 4.jpg",
  "HA 5.jpg",
  "HA 6.PNG",
  "HA 9.jpg",
  "HO 6.jpg",
  "HO 8.jpg",
  "HR 12.jpg",
  "HR 17.jpg",
  "HR 20.jpg",
  "HR 24.jpg",
  "HR 25.jpg",
  "HR 28.jpg",
  "HR 3.jpg",
  "HR 30.jpg",
  "HR 31.jpg",
  "HR 38.JPG",
  "HR 4.jpg",
  "HR 6.jpg",
  "HRA 1.jpg",
  "HRO 10.jpg",
  "HRO 12.jpg",
  "HRO 13.jpg",
  "HRO 16.jpg",
  "HRO 17.jpg",
  "HRO 20.jpg",
  "HRO 3.jpg",
  "HRO 33.jpg",
  "HRO 4.jpg",
  "HRO 7.jpg",
  "HRO 8.jpg",
  "HRO 9.jpg",
  "HR_0.jpg",
  "H_0.jpeg",
  "LH 1.jpg",
  "LH 11.jpg",
  "LH 12.jpg",
  "LH 16.jpg",
  "LH 17.jpg",
  "LH 18.jpg",
  "LH 2.jpeg",
  "LH 20.jpg",
  "LH 21.jpg",
  "LH 22.jpg",
  "LH 26.jpg",
  "LH 28.jpg",
  "LH 29.jpg",
  "LH 3.jpg",
  "LH 32.jpg",
  "LH 36.jpg",
  "LH 38.jpg",
  "LH 40.jpg",
  "LH 43.jpg",
  "LH 47.jpg",
  "LH 48.jpg",
  "LH 5.jpg",
  "LH 51.jpg",
  "LH 53.jpg",
  "LH 8.jpg",
  "LHA 1.jpg",
  "LHA 11.jpg",
  "LHA 14.jpg",
  "LHA 15.jpg",
  "LHA 17.jpg",
  "LHA 18.jpg",
  "LHA 2.jpg",
  "LHA 21.jpg",
  "LHA 23.jpg",
  "LHA 24.jpg",
  "LHA 27.jpg",
  "LHA 28.jpg",
  "LHA 3.jpg",
  "LHA 34.jpg",
  "LHA 35.jpg",
  "LHA 37.jpg",
  "LHA 39.jpg",
  "LHA 40.jpg",
  "LHA 43.jpg",
  "LHA 45.jpg",
  "LHA 47.jpg",
  "LHA 49.jpg",
  "LHA 5.jpg",
  "LHA 56.jpg",
  "LHA 57.jpg",
  "LHA 6.jpg",
  "LHA 61.jpg",
  "LHA 63.jpg",
  "LHA 64.jpg",
  "LHA 65.jpg",
  "LHA 66.jpg",
  "LHA 8.jpg",
  "LHO 2.jpg",
  "LHO 4.jpg",
  "LHR 1.jpg",
  "LHR 13.jpg",
  "LHR 14.jpg",
  "LHR 2.jpg",
  "LHR 27.jpg",
  "LHR 28.jpg",
  "LHR 5.jpg",
  "LHR 6.jpg",
  "LHR 9.jpg",
  "LHRO 1.jpg",
  "LHRO 3.jpg",
];
// shuffleArray(hardscape_gallery_arr);

let rooftops_courtyards_gallery_arr = [
  "HR 12.jpg",
  "HR 17.jpg",
  "HR 20.jpg",
  "HR 24.jpg",
  "HR 25.jpg",
  "HR 28.jpg",
  "HR 3.jpg",
  "HR 30.jpg",
  "HR 31.jpg",
  "HR 38.JPG",
  "HR 4.jpg",
  "HR 6.jpg",
  "HRA 1.jpg",
  "HRO 10.jpg",
  "HRO 12.jpg",
  "HRO 13.jpg",
  "HRO 16.jpg",
  "HRO 17.jpg",
  "HRO 20.jpg",
  "HRO 3.jpg",
  "HRO 33.jpg",
  "HRO 4.jpg",
  "HRO 7.jpg",
  "HRO 8.jpg",
  "HRO 9.jpg",
  "HR_0.jpg",
  "LHR 1.jpg",
  "LHR 13.jpg",
  "LHR 14.jpg",
  "LHR 2.jpg",
  "LHR 27.jpg",
  "LHR 28.jpg",
  "LHR 5.jpg",
  "LHR 6.jpg",
  "LHR 9.jpg",
  "LHRO 1.jpg",
  "LHRO 3.jpg",
  "LR 13.jpg",
  "LR 15.jpg",
  "LR 20.jpg",
  "LR 22.jpg",
  "LR 8.jpg",
  "LR 9.jpg",
  "LR_0.jpg",
  "R 2.jpg",
  "R 6.jpg",
  "RO 1.jpg",
  "RO 2.jpg",
  "RO 7.jpg",
];
// shuffleArray(rooftops_courtyards_gallery_arr);

let water_features_gallery_arr = [
  "HA 1.jpg",
  "HA 19.jpg",
  "HA 2.jpg",
  "HA 24.jpg",
  "HA 31.jpg",
  "HA 32.jpg",
  "HA 4.jpg",
  "HA 5.jpg",
  "HA 6.PNG",
  "HA 9.jpg",
  "HRA 1.jpg",
  "LA 1.jpg",
  "LHA 1.jpg",
  "LHA 11.jpg",
  "LHA 14.jpg",
  "LHA 15.jpg",
  "LHA 17.jpg",
  "LHA 18.jpg",
  "LHA 2.jpg",
  "LHA 21.jpg",
  "LHA 23.jpg",
  "LHA 24.jpg",
  "LHA 27.jpg",
  "LHA 28.jpg",
  "LHA 3.jpg",
  "LHA 34.jpg",
  "LHA 35.jpg",
  "LHA 37.jpg",
  "LHA 39.jpg",
  "LHA 40.jpg",
  "LHA 43.jpg",
  "LHA 45.jpg",
  "LHA 47.jpg",
  "LHA 49.jpg",
  "LHA 5.jpg",
  "LHA 56.jpg",
  "LHA 57.jpg",
  "LHA 6.jpg",
  "LHA 61.jpg",
  "LHA 63.jpg",
  "LHA 64.jpg",
  "LHA 65.jpg",
  "LHA 66.jpg",
  "LHA 8.jpg",
];
// shuffleArray(water_features_gallery_arr);

let custom_woodwork_gallery_arr = [
  "HO 6.jpg",
  "HO 8.jpg",
  "HRO 10.jpg",
  "HRO 12.jpg",
  "HRO 13.jpg",
  "HRO 16.jpg",
  "HRO 17.jpg",
  "HRO 20.jpg",
  "HRO 3.jpg",
  "HRO 33.jpg",
  "HRO 4.jpg",
  "HRO 7.jpg",
  "HRO 8.jpg",
  "HRO 9.jpg",
  "LHO 2.jpg",
  "LHO 4.jpg",
  "LHRO 1.jpg",
  "LHRO 3.jpg",
  "O 10.jpg",
  "O 12.jpg",
  "O 9.jpg",
  "RO 1.jpg",
  "RO 2.jpg",
  "RO 7.jpg",
];
// shuffleArray(custom_woodwork_gallery_arr);

let drainage_gallery_arr = [
  "D 1.jpg",
  "D 10.jpg",
  "D 11.jpg",
  "D 12.jpg",
  "D 13.jpg",
  "D 14.jpg",
  "D 15.jpg",
  "D 16.jpg",
  "D 17.jpg",
  "D 18.jpg",
  "D 19.jpg",
  "D 2.jpg",
  "D 20.jpg",
  "D 21.jpg",
  "D 22.jpg",
  "D 23.jpg",
  "D 24.jpg",
  "D 3.jpg",
  "D 4.jpg",
  "D 5.jpg",
  "D 6.jpg",
  "D 7.jpg",
  "D 8.jpg",
  "D 9.jpg",
  "D-25.jpg",
];
// shuffleArray(drainage_gallery_arr);

let images = [];
let currentIndex = 0;

// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", () => {
  // Function to initialize a gallery if its grid ID exists
  const safeInitGallery = (path, id, imageArray) => {
    const galleryElement = document.getElementById(`${id}-grid`);
    if (galleryElement) {
      initGallery(path, id, imageArray);
    }
  };

  // Initialize galleries
  safeInitGallery("img/", "landscape-gallery", landscape_gallery_arr);

  safeInitGallery("img/", "hardscape-gallery", hardscape_gallery_arr);

  safeInitGallery(
    "img/",
    "rooftops-courtyards-gallery",
    rooftops_courtyards_gallery_arr
  );

  safeInitGallery("img/", "water-features-gallery", water_features_gallery_arr);

  safeInitGallery(
    "img/",
    "custom-woodwork-gallery",
    custom_woodwork_gallery_arr
  );

  safeInitGallery("img/", "drainage-gallery", drainage_gallery_arr);

  safeInitGallery("img/", "general-gallery", general_gallery_arr);
});

// Function to initialize a gallery
function initGallery(folderPath, galleryId, imageFilenames) {
  const galleryGrid = document.getElementById(`${galleryId}-grid`);

  if (!galleryGrid) {
    console.error(`Gallery grid with ID '${galleryId}-grid' not found.`);
    return;
  }

  if (galleryGrid.getAttribute("data-initialized") === "true") {
    return;
  }

  galleryGrid.setAttribute("data-initialized", "true");

  images = imageFilenames;

  imageFilenames.forEach((filename, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = `${folderPath}${filename}`;
    imgElement.alt = `Gallery Image ${index + 1}`;
    imgElement.className = "service-item__gallery-item";
    imgElement.style.opacity = 0;
    imgElement.style.transition =
      "opacity 0.3s ease-in-out, transform 0.3s ease";

    // Wait until the image is fully loaded
    imgElement.onload = () => {
      imgElement.style.opacity = 1;
    };

    imgElement.onerror = () => {
      console.error(`Error loading image: ${filename}`);
    };

    imgElement.setAttribute("onclick", `openModal(${index}, '${galleryId}')`);
    galleryGrid.appendChild(imgElement);
  });
}

// Open modal and display the selected image
function openModal(index, galleryId) {
  const galleryGrid = document.getElementById(`${galleryId}-grid`);
  if (!galleryGrid) {
    console.error(`Gallery grid with ID '${galleryId}-grid' not found.`);
    return;
  }

  // Get images array from the gallery grid
  const images = Array.from(galleryGrid.querySelectorAll("img")).map(
    (img) => img.src
  );

  const modal = document.getElementById(`${galleryId}-modal`);
  const modalImage = document.getElementById(`${galleryId}-modalImage`);

  if (!modal || !modalImage) {
    console.error(`Modal or modalImage for gallery '${galleryId}' not found.`);
    return;
  }

  modal.style.display = "flex";
  modalImage.src = images[index];

  currentIndex = index;

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      changeImage(1, galleryId);
    } else if (event.key === "ArrowLeft") {
      changeImage(-1, galleryId);
    } else if (event.key === "Escape") {
      closeModal(galleryId);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  modal.onclick = (event) => {
    if (event.target === modal) {
      closeModal(galleryId);
      document.removeEventListener("keydown", handleKeyDown);
    }
  };
}

function changeImage(direction, galleryId) {
  const galleryGrid = document.getElementById(`${galleryId}-grid`);
  const images = Array.from(galleryGrid.querySelectorAll("img")).map(
    (img) => img.src
  );

  currentIndex = (currentIndex + direction + images.length) % images.length;

  // Update the modal image
  const modalImage = document.getElementById(`${galleryId}-modalImage`);
  modalImage.src = images[currentIndex];
}

function closeModal(galleryId) {
  const modal = document.getElementById(`${galleryId}-modal`);
  if (modal) {
    modal.style.display = "none";
  }
}
