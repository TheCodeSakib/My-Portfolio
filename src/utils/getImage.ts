const getImageUrl = (folderName: string, imageName: string) => {
  return new URL(`../assets/images/${folderName}/${imageName}`, import.meta.url).href;
};

export default getImageUrl;
