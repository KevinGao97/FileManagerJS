function loadPicture() {
  const codeMainDiv = document.createElement('div');
  const footer = document.createElement('footer');
  const footerParagraph = document.createElement('p');
  footerParagraph.className = 'defaultParagraph';
  footerParagraph.textContent = 'FileManagerJS v1.0. Created by: Kevin Gao';
  footer.appendChild(footerParagraph);

  codeMainDiv.className = 'cardLayout2';
  const img = document.createElement('img');
  const header = document.createElement('h3');
  header.className = 'defaultHeader2';
  header.textContent = 'Code used to create this example:';
  img.src = 'img/mainExampleCode.PNG';
  img.className = 'defaultImage3';
  codeMainDiv.appendChild(header);
  codeMainDiv.appendChild(img);

  document.getElementsByTagName('body')[0].appendChild(codeMainDiv);
  document.getElementsByTagName('body')[0].appendChild(footer);
}

loadPicture();
