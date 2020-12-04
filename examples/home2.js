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
  const userDesiredColor = document.createElement('input');
  userDesiredColor.type = 'text';
  userDesiredColor.id = 'fileColor';
  userDesiredColor.placeholder = 'File color';
  addNewFileForm.appendChild(userDesiredColor);
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
  label.innerHTML = 'Add a new Folder ("root" for base dir):';
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
  label.innerHTML = 'Rename a File/Folder:';
  renameElementForm.appendChild(label);

  const oldElementName = document.createElement('input');
  oldElementName.type = 'text';
  oldElementName.id = 'oldElementNameId';
  oldElementName.placeholder = 'Old File/Folder Name';
  renameElementForm.appendChild(oldElementName);
  const newElementName = document.createElement('input');
  newElementName.type = 'text';
  newElementName.id = 'newElementNameId';
  newElementName.placeholder = 'New File/Folder Name';
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

// Change Color of a file
function fileColorChange() {
  const fileColorChange = document.createElement('div');
  fileColorChange.id = 'fileColorChange';
  const fileColorChangeForm = document.createElement('form');
  fileColorChangeForm.id = 'fileColorChangeForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Change Color of a File:';
  fileColorChangeForm.appendChild(label);

  const oldFileColor = document.createElement('input');
  oldFileColor.type = 'text';
  oldFileColor.id = 'oldFileColorId';
  oldFileColor.placeholder = 'File Name';
  fileColorChangeForm.appendChild(oldFileColor);
  const newFileColor = document.createElement('input');
  newFileColor.type = 'text';
  newFileColor.id = 'newFileColorId';
  newFileColor.placeholder = 'New File Color';
  fileColorChangeForm.appendChild(newFileColor);
  const submitRequest = document.createElement('button');
  submitRequest.className = 'addBtn';
  submitRequest.type = 'submit';
  submitRequest.appendChild(document.createTextNode('Change'));
  fileColorChangeForm.appendChild(submitRequest);
  fileColorChange.appendChild(fileColorChangeForm);

  document.getElementsByTagName('body')[0].appendChild(fileColorChange);
}

// Move a File/Folder to another location
function moveElement() {
  const moveElement = document.createElement('div');
  moveElement.id = 'moveElement';
  const moveElementForm = document.createElement('form');
  moveElementForm.id = 'moveElementForm';
  const label = document.createElement('label');
  label.className = 'defaultLabel';
  label.innerHTML = 'Move a File/Folder to another Folder:';
  moveElementForm.appendChild(label);

  const moveElementId = document.createElement('input');
  moveElementId.type = 'text';
  moveElementId.id = 'moveElementId';
  moveElementId.placeholder = 'File/Folder Name';
  moveElementForm.appendChild(moveElementId);
  const newFolderLocation = document.createElement('input');
  newFolderLocation.type = 'text';
  newFolderLocation.id = 'newFolderLocationId';
  newFolderLocation.placeholder = 'New Folder Name';
  moveElementForm.appendChild(newFolderLocation);
  const submitRequest = document.createElement('button');
  submitRequest.className = 'addBtn';
  submitRequest.type = 'submit';
  submitRequest.appendChild(document.createTextNode('Change'));
  moveElementForm.appendChild(submitRequest);
  moveElement.appendChild(moveElementForm);

  document.getElementsByTagName('body')[0].appendChild(moveElement);
}
