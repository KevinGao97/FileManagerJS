//Add New File
function newFileSection() {
  const addNewFileDiv = document.createElement('div');
  addNewFileDiv.id = 'AddNewFile';
  const addNewFileForm = document.createElement('form');
  addNewFileForm.id = 'addFileForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Upload a new File:';
  addNewFileForm.appendChild(label);

  const userFile = document.createElement('input');
  userFile.type = 'file';
  userFile.id = 'userFile';
  addNewFileForm.appendChild(userFile);
  const userFileName = document.createElement('input');
  userFileName.type = 'text';
  userFileName.id = 'fileName';
  userFileName.placeholder = 'File Name';
  addNewFileForm.appendChild(userFileName);
  const userDesiredFolder = document.createElement('input');
  userDesiredFolder.type = 'text';
  userDesiredFolder.id = 'folderId';
  userDesiredFolder.placeholder = 'Add to Folder Name';
  addNewFileForm.appendChild(userDesiredFolder);
  const addFileButton = document.createElement('button');
  addFileButton.className = 'addBtn';
  addFileButton.type = 'submit';
  addFileButton.appendChild(document.createTextNode('Add File'));
  addNewFileForm.appendChild(addFileButton);
  addNewFileDiv.appendChild(addNewFileForm);

  document.getElementsByTagName('body')[0].appendChild(addNewFileDiv);
}

// Add New Folder
function newNestedFolderSection() {
  const addNewNestedFolderDiv = document.createElement('div');
  addNewNestedFolderDiv.id = 'addNewNestedFolder';
  const addNestedFolderFormTag = document.createElement('form');
  addNestedFolderFormTag.id = 'addNestedFolderForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Add a new Folder ("root" for root dir):';
  addNestedFolderFormTag.appendChild(label);

  const UserDesiredFolderName = document.createElement('input');
  UserDesiredFolderName.type = 'text';
  UserDesiredFolderName.id = 'folderName2';
  UserDesiredFolderName.placeholder = 'Folder Name';
  addNestedFolderFormTag.appendChild(UserDesiredFolderName);
  const parentFolderName = document.createElement('input');
  parentFolderName.type = 'text';
  parentFolderName.id = 'folderId2';
  parentFolderName.placeholder = 'Parent Folder Name';
  addNestedFolderFormTag.appendChild(parentFolderName);
  const addNestedFileFolder = document.createElement('button');
  addNestedFileFolder.className = 'addBtn';
  addNestedFileFolder.type = 'submit';
  addNestedFileFolder.appendChild(document.createTextNode('Add Folder'));
  addNestedFolderFormTag.appendChild(addNestedFileFolder);
  addNewNestedFolderDiv.appendChild(addNestedFolderFormTag);

  document.getElementsByTagName('body')[0].appendChild(addNewNestedFolderDiv);
}

// document.getElementsByTagName('body')[0].appendChild(addNewFileDiv);

//Rename an Folder Element
function renameElementSection() {
  const renameElementDiv = document.createElement('div');
  renameElementDiv.id = 'renameElementDiv';
  const renameElementForm = document.createElement('form');
  renameElementForm.id = 'renameElementDivForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Rename a Folder:';
  renameElementForm.appendChild(label);

  const oldElementName = document.createElement('input');
  oldElementName.type = 'text';
  oldElementName.id = 'oldElementNameId';
  oldElementName.placeholder = 'Old Folder Name';
  renameElementForm.appendChild(oldElementName);
  const newElementName = document.createElement('input');
  newElementName.type = 'text';
  newElementName.id = 'newElementNameId';
  newElementName.placeholder = 'New Folder Name';
  renameElementForm.appendChild(newElementName);
  const submitRenameRequest = document.createElement('button');
  submitRenameRequest.className = 'addBtn';
  submitRenameRequest.type = 'submit';
  submitRenameRequest.appendChild(document.createTextNode('Rename'));
  renameElementForm.appendChild(submitRenameRequest);
  renameElementDiv.appendChild(renameElementForm);

  document.getElementsByTagName('body')[0].appendChild(renameElementDiv);
}

// Delete an Element
function deleteElementSection() {
  const deleteElementDiv = document.createElement('div');
  deleteElementDiv.id = 'deleteElement';
  const addDeleteElementForm = document.createElement('form');
  addDeleteElementForm.id = 'deleteElementForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Delete a Folder/File:';
  addDeleteElementForm.appendChild(label);

  const userSpecifiedElement = document.createElement('input');
  userSpecifiedElement.type = 'text';
  userSpecifiedElement.id = 'elementName';
  userSpecifiedElement.placeholder = 'Folder/File Name';
  addDeleteElementForm.appendChild(userSpecifiedElement);
  const deleteElementButton = document.createElement('button');
  deleteElementButton.className = 'addBtn';
  deleteElementButton.type = 'submit';
  deleteElementButton.appendChild(
    document.createTextNode('Delete File/Folder')
  );
  addDeleteElementForm.appendChild(deleteElementButton);
  deleteElementDiv.appendChild(addDeleteElementForm);

  document.getElementsByTagName('body')[0].appendChild(deleteElementDiv);
}

//Create Div and inital Ul Tag
function initFileManagerJS() {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main';
  const rootUl = document.createElement('ul');
  rootUl.className = 'root';
  mainDiv.appendChild(rootUl);
  document.getElementsByTagName('body')[0].appendChild(mainDiv);
}

//Create User Interaction input fields, buttons and main div
newFileSection();
newNestedFolderSection();
renameElementSection();
deleteElementSection();
initFileManagerJS();
