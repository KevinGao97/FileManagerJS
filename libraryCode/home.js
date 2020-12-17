//Create User Interaction input fields and buttons
function createAllInteractionFields() {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'cardLayout';

  //Upload a new File field
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
  mainDiv.appendChild(addNewFileDiv);

  //Add a new Folder field
  const addNewNestedFolderDiv = document.createElement('div');
  addNewNestedFolderDiv.id = 'addNewNestedFolder';
  const addNestedFolderFormTag = document.createElement('form');
  addNestedFolderFormTag.id = 'addNestedFolderForm';
  const labelAddNewFolder = document.createElement('label');
  labelAddNewFolder.className = 'defaultLabel';
  labelAddNewFolder.innerHTML = 'Add a new Folder ("root" for base dir):';
  addNestedFolderFormTag.appendChild(labelAddNewFolder);

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
  mainDiv.appendChild(addNewNestedFolderDiv);

  //Rename a File/Folder Field
  const renameElementDiv = document.createElement('div');
  renameElementDiv.id = 'renameElementDiv';
  const renameElementForm = document.createElement('form');
  renameElementForm.id = 'renameElementDivForm';
  const labelRenameElement = document.createElement('label');
  labelRenameElement.className = 'defaultLabel';
  labelRenameElement.innerHTML = 'Rename a File/Folder:';
  renameElementForm.appendChild(labelRenameElement);

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
  mainDiv.appendChild(renameElementDiv);

  //Delete a Folder/File Field
  const deleteElementDiv = document.createElement('div');
  deleteElementDiv.id = 'deleteElement';
  const addDeleteElementForm = document.createElement('form');
  addDeleteElementForm.id = 'deleteElementForm';
  const labelDeleteElement = document.createElement('label');
  labelDeleteElement.className = 'defaultLabel';
  labelDeleteElement.innerHTML = 'Delete a Folder/File:';
  addDeleteElementForm.appendChild(labelDeleteElement);

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
  mainDiv.appendChild(deleteElementDiv);

  //Change File Color Field
  const fileColorChange = document.createElement('div');
  fileColorChange.id = 'fileColorChange';
  const fileColorChangeForm = document.createElement('form');
  fileColorChangeForm.id = 'fileColorChangeForm';
  const labelFileColorChange = document.createElement('label');
  labelFileColorChange.className = 'defaultLabel';
  labelFileColorChange.innerHTML = 'Change Color of a File:';
  fileColorChangeForm.appendChild(labelFileColorChange);

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
  mainDiv.appendChild(fileColorChange);

  //Move a File/Folder to another Folder field
  const moveElement = document.createElement('div');
  moveElement.id = 'moveElement';
  const moveElementForm = document.createElement('form');
  moveElementForm.id = 'moveElementForm';
  const labelMoveElement = document.createElement('label');
  labelMoveElement.className = 'defaultLabel';
  labelMoveElement.innerHTML = 'Move a File/Folder to another Folder:';
  moveElementForm.appendChild(labelMoveElement);

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
  const submitRequestMoveElement = document.createElement('button');
  submitRequestMoveElement.className = 'addBtn';
  submitRequestMoveElement.type = 'submit';
  submitRequestMoveElement.appendChild(document.createTextNode('Change'));
  moveElementForm.appendChild(submitRequestMoveElement);
  moveElement.appendChild(moveElementForm);
  mainDiv.appendChild(moveElement);

  //Add all fields to main div
  document.getElementsByTagName('body')[0].appendChild(mainDiv);
}

createAllInteractionFields();
