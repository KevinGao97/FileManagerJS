function loadPicture() {
  const codeMainDiv = document.createElement('div');
  codeMainDiv.className = 'cardLayout2';
  const img = document.createElement('img');
  const header = document.createElement('h3');
  header.className = 'defaultHeader2';
  header.textContent = 'Code Used to create this example:';
  img.src = 'img/mainExampleCode.PNG';
  img.className = 'defaultImage3';
  codeMainDiv.appendChild(header);
  codeMainDiv.appendChild(img);

  document.getElementsByTagName('body')[0].appendChild(codeMainDiv);
}

loadPicture();
