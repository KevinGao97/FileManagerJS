function loadPicture() {
  const loadPicMainDiv = document.createElement('div');
  loadPicMainDiv.className = 'cardLayout2';
  const img = document.createElement('img');
  const header = document.createElement('h3');
  header.className = 'defaultHeader2';
  header.textContent = 'Code Used to create this example:';
  img.src = '../img/CloudStorageExampleCode.PNG';
  img.className = 'defaultImage';
  loadPicMainDiv.appendChild(header);
  loadPicMainDiv.appendChild(img);

  document.getElementsByTagName('body')[0].appendChild(loadPicMainDiv);
}

loadPicture();
