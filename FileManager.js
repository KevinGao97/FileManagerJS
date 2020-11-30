//Global counters
let numberOfFiles = 0;
let numberOfFolders = 0;

//Global Arrays
const files = [];
const folders = [];

//File Constructor
const File = function (fileName, size, userSpecifiedName, folderId, color) {
  this.userSpecifiedName = userSpecifiedName;
  this.fileName = fileName;
  this.size = size;
  this.folderId = folderId;
  this.color = color;

  //set the file ID
  this.fileGlobalId = numberOfFiles;
  numberOfFiles++;
};

//Folder Constructor
const Folder = function (name, parentFolderName) {
  this.name = name;
  this.parentFolderName = parentFolderName;

  //set the folder ID
  this.folderGlobalId = numberOfFolders;
  numberOfFolders++;
};

//Event Listeners
const addNewFileform = document.getElementById('addFileForm');
if (addNewFileform) {
  addNewFileform.addEventListener('submit', getUploadedFileInfo);
}

const addNewNestedFolder = document.getElementById('addNestedFolderForm');
if (addNewNestedFolder) {
  addNewNestedFolder.addEventListener('submit', getNestedFolderInfo);
}

const renameElementForm = document.getElementById('renameElementDivForm');
if (renameElementForm) {
  renameElementForm.addEventListener('submit', getRenameElementInfo);
}

const deleteAnElementForm = document.getElementById('deleteElementForm');
if (deleteAnElementForm) {
  deleteAnElementForm.addEventListener('submit', getDeletedElementInfo);
}

const changeFileColorForm = document.getElementById('fileColorChangeForm');
if (changeFileColorForm) {
  changeFileColorForm.addEventListener('submit', getChangedFileColorInfo);
}

/* Functions which do not manipulate the DOM */

//Handle user events
function getUploadedFileInfo(e) {
  e.preventDefault();
  //console.log('Here1');
  if (document.getElementById('userFile').files.length === 0) {
    alert('Please upload the file.');
    return;
  }
  if (document.getElementById('fileName').value === '') {
    alert('Please enter a desired file name');
    return;
  } else {
    const fileActualName = document.getElementById('userFile').files[0].name;
    const fileSize = document.getElementById('userFile').files[0].size;
    const userSpecifiedName = document.getElementById('fileName').value;
    const folderId = document.getElementById('folderId').value;
    let fileColor = document.getElementById('fileColor').value;
    console.log(fileColor);
    //If the user left the File color input blank, defaults to the black color
    if (fileColor === '') {
      fileColor = 'black';
    }
    //Checks if the user entered color is a valid color by calling the helper function
    if (checkColor(fileColor) == false) {
      alert('The following is not a valid color');
      return;
    }

    //Checks if the folder being added to exists
    const checkFolderExists = document.getElementById(folderId);
    if (!checkFolderExists) {
      alert('The following folder does not exist');
      return;
    }

    //Add to global file array
    const addNewFile = new File(
      fileActualName,
      fileSize,
      userSpecifiedName,
      folderId,
      fileColor
    );

    //Calls the addFile function to add file to the DOM
    addFile(addNewFile);

    //Clear the Input Fields
    document.getElementById('userFile').value = '';
    document.getElementById('fileName').value = '';
    document.getElementById('folderId').value = '';
    document.getElementById('fileColor').value = '';
  }
}

function getNestedFolderInfo(e) {
  e.preventDefault();
  //console.log('Here3');
  if (document.getElementById('folderName2').value === '') {
    alert('Cannot have an empty folder name');
    return false;
  } else if (document.getElementById('folderId2').value === '') {
    alert('Cannot have an empty parent folder name');
    return false;
  } else {
    const folderId = document.getElementById('folderId2').value;
    //console.log(folderId);
    const userFolderNameNested = document.getElementById('folderName2').value;
    //Checks if there is a folder with the same name
    const checkFolderName = document.getElementById(userFolderNameNested);
    if (checkFolderName) {
      alert('Please choose another folder name');
      return;
    }
    //Create New Folder Object
    const folder = new Folder(userFolderNameNested, folderId);
    //Create DOM representation of a folder
    addNestedFolder(folder);

    //Clear the Input Fields
    document.getElementById('folderId2').value = '';
    document.getElementById('folderName2').value = '';
  }
}

function getRenameElementInfo(e) {
  e.preventDefault();
  //console.log('Here');
  if (document.getElementById('oldElementNameId').value === '') {
    alert('Cannot have an empty old folder/file name');
    return false;
  } else if (document.getElementById('newElementNameId').value === '') {
    alert('Cannot have an empty new folder/file name');
    return false;
  } else {
    const oldEleName = document.getElementById('oldElementNameId').value;
    const newEleName = document.getElementById('newElementNameId').value;

    renameFolder(oldEleName, newEleName);
  }
  //Clear the Input Fields
  document.getElementById('oldElementNameId').value = '';
  document.getElementById('newElementNameId').value = '';
}

function getDeletedElementInfo(e) {
  e.preventDefault();
  //console.log('Here4');
  if (document.getElementById('elementName').value === '') {
    alert('Cannot have an empty folder name');
    return false;
  } else {
    const eleName = document.getElementById('elementName').value;
    //console.log(eleName);
    deleteElement(eleName);
  }
  //Clear the Input Fields
  document.getElementById('elementName').value = '';
}

function getChangedFileColorInfo(e) {
  e.preventDefault();

  if (document.getElementById('oldFileColorId').value === '') {
    alert('Cannot have an empty file name');
    return false;
  } else if (document.getElementById('newFileColorId').value === '') {
    alert('Cannot have an empty new folder/file name');
    return false;
  } else {
    const oldEleName = document.getElementById('oldFileColorId').value;
    const newEleName = document.getElementById('newFileColorId').value;
    //console.log(oldEleName);
    //console.log(newEleName);

    changeFileColor(oldEleName, newEleName);
  }
  //Clear the Input Fields
  document.getElementById('oldFileColorId').value = '';
  document.getElementById('newFileColorId').value = '';
}

/* DOM Manipulation Functions */

//Create inital Div and  Ul Tag necessary for the library to display contents properly
function initFileManagerJS() {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main';
  const rootUl = document.createElement('ul');
  rootUl.className = 'root';
  mainDiv.appendChild(rootUl);
  document.getElementsByTagName('body')[0].appendChild(mainDiv);
}

//Add an Individual File to a folder
function addFile(file) {
  const li = document.createElement('li');

  //Push file object to the global files array
  files.push(file);
  //console.log(files);

  const fileInfo = document.createTextNode(file.userSpecifiedName);
  const fileOriginalName = document.createTextNode('---' + file.fileName);

  li.appendChild(fileInfo);
  li.appendChild(fileOriginalName);

  li.id = file.userSpecifiedName;
  li.className = 'file';
  li.style.color = file.color;

  document.getElementById('folder' + file.folderId).appendChild(li);
}

//Adds a folder inside another Folder
function addNestedFolder(folder) {
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  //Add the folder object to the folders array
  folders.push(folder);
  //console.log(folders);

  const folderName = document.createTextNode(folder.name);
  li.appendChild(folderName);
  li.appendChild(ul);
  li.id = folder.name;
  ul.className = 'style';
  li.className = 'folder';

  ul.id = 'folder' + folder.name;
  //console.log(folders);

  if (folder.parentFolderName == 'root') {
    document.getElementsByClassName('root')[0].appendChild(li);
  } else {
    document.getElementById('folder' + folder.parentFolderName).appendChild(li);
  }
  addCollapsingEffect();
}

//Adds in the expanding and expanding effect of folders during an onClick Event using the slideToggle effect in JQuery
function addCollapsingEffect() {
  $('li > ul').each(function () {
    const parent = $(this).parent();
    $(this).parent().wrapInner("<a href='#' />");
    parent.append($(this));
    $(this)
      .parent()
      .find('a')
      .on('click', function (e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle('slow');
      });
  });
}

//Rename a folder
function renameFolder(oldElementName, newElementName) {
  const EleName = document.getElementById(oldElementName);
  //If the Element is a folder
  if (EleName && EleName.className == 'folder') {
    //Update 'name' property in folders global array
    const index = folders.findIndex(folder => folder.name === EleName.id);
    folders[index].name = newElementName;
    //console.log(folders);

    //Rename the element in the DOM
    EleName.firstChild.textContent = newElementName;
    //console.log('Renamed Folder');

    //If the Element is a file
  } else if (EleName && EleName.className == 'file') {
    //Update 'name' property in files global array
    const index = files.findIndex(
      file => file.userSpecifiedName === EleName.id
    );
    files[index].userSpecifiedName = newElementName;
    console.log(files);

    //Rename the element in the DOM
    EleName.firstChild.textContent = newElementName;
    //console.log('renaming file');
  } else {
    alert('The File/Folder does not exist');
    return false;
  }
}

//delete a folder or file Node
function deleteElement(userElementName) {
  const checkEleName = document.getElementById(userElementName);
  if (checkEleName) {
    //Update folders/files global array to remove specified element
    if (checkEleName.className == 'folder') {
      const indexRemoved = folders.findIndex(
        folder => folder.name === checkEleName.id
      );
      folders.splice(indexRemoved, 1);

      //console.log(folders);
    } else if (checkEleName.className == 'file') {
      const indexRemoved = files.findIndex(
        files => files.userSpecifiedName === checkEleName.id
      );
      files.splice(indexRemoved, 1);

      //console.log(files);
    }

    //Remove element from DOM
    checkEleName.remove();

    //console.log('Removed Folder/File');
  } else {
    alert('The Folder or File does not exist');
    return false;
  }
}

//Change the color of a file
function changeFileColor(fileName, newColor) {
  const checkEleName = document.getElementById(fileName);
  if (checkEleName) {
    //Checks if the user entered color is a valid color by calling the helper function
    if (checkColor(newColor) == false) {
      alert('The new specified color is not a valid color');
      return;
    } else {
      checkEleName.style.color = newColor;
    }
  } else {
    alert('The file does not exist');
    return;
  }
}

/*  Helper Functions  */

//Checks if a user specified color is a valid CSS color
//Citiation: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
function checkColor(inputColor) {
  var opt = new Option().style;
  opt.color = inputColor;
  return opt.color == inputColor;
}
