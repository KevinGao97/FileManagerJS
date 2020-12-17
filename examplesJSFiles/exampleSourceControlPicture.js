function loadPicture() {
  const loadPictureMainDiv = document.createElement('div');
  loadPictureMainDiv.className = 'cardLayout2';
  const img = document.createElement('img');
  const header = document.createElement('h3');
  header.className = 'defaultHeader2';
  header.textContent = 'Code used to create this example:';
  img.src = '../img/SourceControlExampleCode.PNG';
  img.className = 'defaultImage';
  loadPictureMainDiv.appendChild(header);
  loadPictureMainDiv.appendChild(img);

  document.getElementsByTagName('body')[0].appendChild(loadPictureMainDiv);
}

loadPicture();
