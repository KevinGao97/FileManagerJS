function loadPicture() {
  const img = document.createElement('img');
  const header = document.createElement('h3');
  header.className = 'defaultHeader2';
  header.textContent = 'Code Used to create this example:';
  img.src = '../img/SourceControlExampleCode.PNG';
  img.className = 'defaultImage3';
  document.getElementsByTagName('body')[0].appendChild(header);
  document.getElementsByTagName('body')[0].appendChild(img);
}

loadPicture();
