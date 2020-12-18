(function (global, document, $) {
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

  //File Creator
  function FileCreator(fileName, size, userSpecifiedName, folderId, color) {
    const newFile = new File(
      fileName,
      size,
      userSpecifiedName,
      folderId,
      color
    );
    return newFile;
  }

  //Folder Creator
  function FolderCreator(name, parentFolderName) {
    const newFolder = new Folder(name, parentFolderName);
    return newFolder;
  }

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

  const moveElementForm = document.getElementById('moveElementForm');
  if (moveElementForm) {
    moveElementForm.addEventListener('submit', getMoveElementFormInfo);
  }

  /* Event Handlers for the UI components / Functions which do not manipulate the DOM */

  //Handles the user's adding a new file event.
  function getUploadedFileInfo(e) {
    e.preventDefault();

    //Checks if either fields are empty.
    if (document.getElementById('userFile').files.length === 0) {
      alert('Please upload the file.');
      return;
    }
    if (document.getElementById('fileName').value === '') {
      alert('Please enter a desired file name');
      return;
    } else {
      //Get all the field values
      const fileActualName = document.getElementById('userFile').files[0].name;
      const fileSize = document.getElementById('userFile').files[0].size;
      const userSpecifiedName = document.getElementById('fileName').value;
      const folderId = document.getElementById('folderId').value;
      let fileColor = document.getElementById('fileColor').value;

      //If the user left the File color input blank, defaults to the black color
      if (fileColor === '') {
        fileColor = 'black';
      }

      //Checks if the folder being added to exists
      const checkFolderExists = document.getElementById(folderId);
      if (!checkFolderExists) {
        alert('The following folder does not exist');
        return;
      } else if (checkFolderExists.className === 'file') {
        alert('Cannot add a file inside another file');
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

  //Handles the user's adding a new folder event
  function getNestedFolderInfo(e) {
    e.preventDefault();

    //Checks if either fields are empty.
    if (document.getElementById('folderName2').value === '') {
      alert('Cannot have an empty folder name');
      return false;
    } else if (document.getElementById('folderId2').value === '') {
      alert('Cannot have an empty parent folder name');
      return false;
    } else {
      //Get all the field values
      const folderId = document.getElementById('folderId2').value;
      const userFolderNameNested = document.getElementById('folderName2').value;

      //Check if the folder is an existing folder in the DOM
      const checkFolderExist = document.getElementById(folderId);

      if (checkFolderExist === null) {
        alert('The following parent folder does not exist');
        return;
      } else if (checkFolderExist.className === 'file') {
        alert('Cannot add a folder inside a file');
        return;
      }
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

  //Handles the user's renaming a file or folder event.
  function getRenameElementInfo(e) {
    e.preventDefault();

    //Checks if either field is empty.
    if (document.getElementById('oldElementNameId').value === '') {
      alert('Cannot have an empty old folder/file name');
      return false;
    } else if (document.getElementById('newElementNameId').value === '') {
      alert('Cannot have an empty new folder/file name');
      return false;
    } else {
      //Get all the field values
      const oldEleName = document.getElementById('oldElementNameId').value;
      const newEleName = document.getElementById('newElementNameId').value;

      //Modify the DOM representation of the name of the file or folder.
      renameElement(oldEleName, newEleName);
    }
    //Clear the Input Fields
    document.getElementById('oldElementNameId').value = '';
    document.getElementById('newElementNameId').value = '';
  }

  //Handles the user's deleting a file or folder event
  function getDeletedElementInfo(e) {
    e.preventDefault();

    //Checks if the field is empty
    if (document.getElementById('elementName').value === '') {
      alert('Cannot have an empty folder name');
      return false;
    } else {
      //Get the field value
      const eleName = document.getElementById('elementName').value;

      //Deletes the DOM representation of the file or folder.
      deleteElement(eleName);
    }
    //Clear the Input Fields
    document.getElementById('elementName').value = '';
  }

  //Handles the user's change a file to a new color event
  function getChangedFileColorInfo(e) {
    e.preventDefault();

    //Checks if either field is empty
    if (document.getElementById('oldFileColorId').value === '') {
      alert('Cannot have an empty file name');
      return false;
    } else if (document.getElementById('newFileColorId').value === '') {
      alert('Cannot have an empty new folder/file name');
      return false;
    } else {
      //Get all the field values
      const oldEleName = document.getElementById('oldFileColorId').value;
      const newEleName = document.getElementById('newFileColorId').value;

      //Modify the DOM representation of the file's color.
      changeFileColor(oldEleName, newEleName);
    }
    //Clear the Input Fields
    document.getElementById('oldFileColorId').value = '';
    document.getElementById('newFileColorId').value = '';
  }

  //Handles the user's moving a file or folder to another existing folder event.
  function getMoveElementFormInfo(e) {
    e.preventDefault();

    //Checks if either field is empty.
    if (document.getElementById('moveElementId').value === '') {
      alert('Cannot have an empty file/folder name');
      return false;
    } else if (document.getElementById('newFolderLocationId').value === '') {
      alert('Cannot have an empty new folder name');
      return false;
    } else {
      //Get all the field values.
      const eleOldLocationName = document.getElementById('moveElementId').value;
      const eleNewLocationName = document.getElementById('newFolderLocationId')
        .value;

      //Modify the DOM representation to move a file or folder to the new existing folder.
      moveElements(eleOldLocationName, eleNewLocationName);
    }
    //Clear the Input Fields
    document.getElementById('moveElementId').value = '';
    document.getElementById('newFolderLocationId').value = '';
  }

  /* DOM Manipulation Functions */

  //Create inital Div and  Ul Tag necessary for the library to display contents properly.
  function initFileManagerJS() {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'main';
    const rootUl = document.createElement('ul');
    rootUl.className = 'root';
    rootUl.id = 'root';
    mainDiv.appendChild(rootUl);
    document.getElementsByTagName('body')[0].appendChild(mainDiv);
  }

  //Add an Individual File to a folder.
  function addFile(file) {
    const li = document.createElement('li');

    //Push the file object to the global files array.
    files.push(file);

    //Create the DOM elements.
    const fileInfo = document.createTextNode(file.userSpecifiedName);
    const fileOriginalName = document.createTextNode('---' + file.fileName);

    li.appendChild(fileInfo);
    li.appendChild(fileOriginalName);

    li.id = file.userSpecifiedName;
    li.className = 'file';
    li.style.color = file.color;

    //If the user wishes to add the File to the 'root' directory.
    if (file.folderId === 'root') {
      document.getElementsByClassName('root')[0].appendChild(li);
    } else {
      //Add the File to the user specified folder by that folder name.
      document.getElementById('folder' + file.folderId).appendChild(li);
    }
  }

  //Adds a folder inside another Folder.
  function addNestedFolder(folder) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    //Add the folder object to the folders array.
    folders.push(folder);

    //Create the DOM elements.
    const folderName = document.createTextNode(folder.name);
    li.appendChild(folderName);
    li.appendChild(ul);
    li.id = folder.name;
    ul.className = 'style';
    li.className = 'folder';

    ul.id = 'folder' + folder.name;

    //If the user wishes to add the Folder to the 'root' directory.
    if (folder.parentFolderName == 'root') {
      document.getElementsByClassName('root')[0].appendChild(li);
    } else {
      //Add the Folder to an existing folder in the DOM through the user specified folder name.
      document
        .getElementById('folder' + folder.parentFolderName)
        .appendChild(li);
    }
    //Adds in the expanding and collapsing effect of folders during an onClick Event using the slideToggle effect in JQuery.
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

  //Rename a File or Folder.
  function renameElement(oldElementName, newElementName) {
    const EleName = document.getElementById(oldElementName);
    //If the Element is a folder.
    if (EleName && EleName.className == 'folder') {
      //Update 'name' property in folders global array.
      const index = folders.findIndex(folder => folder.name === EleName.id);
      folders[index].name = newElementName;

      //Rename the element in the DOM.
      EleName.firstChild.textContent = newElementName;
      EleName.id = newElementName;

      //If the Element is a file.
    } else if (EleName && EleName.className == 'file') {
      //Update 'name' property in files global array.
      const index = files.findIndex(
        file => file.userSpecifiedName === EleName.id
      );
      files[index].userSpecifiedName = newElementName;

      //Rename the element in the DOM.
      EleName.firstChild.textContent = newElementName;
      EleName.id = newElementName;
    } else {
      alert('The File/Folder does not exist');
      return false;
    }
  }

  //Delete a Folder or File.
  function deleteElement(userElementName) {
    const checkEleName = document.getElementById(userElementName);
    if (checkEleName) {
      //Create a backup copy of that element.
      const backUpElement = checkEleName;

      //Remove element from DOM.
      checkEleName.remove();

      //Save the backup copy of the Element in case the user wishes to restore.
      restoreElement(backUpElement);
    } else {
      alert('The Folder or File does not exist');
      return false;
    }
  }

  //Change the color of a file.
  function changeFileColor(fileName, newColor) {
    const checkEleName = document.getElementById(fileName);
    if (checkEleName) {
      //Update 'color' property in files global array.
      const index = files.findIndex(
        file => file.userSpecifiedName === checkEleName.id
      );
      files[index].color = newColor;

      //Update the file Color in the DOM.
      checkEleName.style.color = newColor;
    } else {
      alert('The file does not exist');
      return;
    }
  }

  //Move around a Folder or File to another existing Folder.
  function moveElements(elementName, folderName) {
    const checkEleName = document.getElementById(elementName);
    const checkFolderName = document.getElementById(folderName);

    if (
      (checkEleName &&
        checkFolderName &&
        checkFolderName.className == 'folder') ||
      (checkEleName && checkFolderName && checkFolderName.id == 'root')
    ) {
      //Update the file/folder new location in the DOM.

      //If the user wanted to move to the root directory.
      if (checkFolderName.id === 'root') {
        document.getElementById('root').appendChild(checkEleName);
      } else {
        //If the user wanted to move to another folder.
        document
          .getElementById('folder' + folderName)
          .appendChild(checkEleName);
      }
    } else if (!checkEleName && checkFolderName) {
      alert('The file/folder does not exist');
      return;
    } else {
      alert('The folder does not exist');
      return;
    }
  }

  //Restores or permanently deletes a File or Folder after calling the deleteElement Function.
  function restoreElement(elementName) {
    //Creates the initial Restore Location at the bottom.
    const tempDiv = document.createElement('div');
    const undoBtn = document.createElement('button');
    undoBtn.appendChild(document.createTextNode('Undo Delete'));
    const deletePerm = document.createElement('button');
    deletePerm.appendChild(document.createTextNode('Delete Forever'));
    tempDiv.appendChild(document.createTextNode(elementName.id));
    tempDiv.appendChild(undoBtn);
    tempDiv.appendChild(deletePerm);
    document.getElementsByClassName('main')[0].appendChild(tempDiv);

    //Delete permanently an element.
    deletePerm.onclick = () => {
      //Remove that element from their respective arrays.
      if (elementName.className == 'folder') {
        const indexRemoved = folders.findIndex(
          folder => folder.name === elementName.id
        );
        folders.splice(indexRemoved, 1);
      } else if (elementName.className == 'file') {
        const indexRemoved = files.findIndex(
          files => files.userSpecifiedName === elementName.id
        );
        files.splice(indexRemoved, 1);
      }
      tempDiv.remove();
    };

    //Restores an element back after being deleted.
    undoBtn.onclick = () => {
      //Add the folder back to it's previous location.
      if (elementName.className == 'folder') {
        const index = folders.findIndex(
          folder => folder.name === elementName.id
        );
        parentFolderName = folders[index].parentFolderName;

        //If the folder was a 'root' folder.
        if (document.getElementById('folder' + parentFolderName) == null) {
          document.getElementById('root').appendChild(elementName);
        } else {
          //If the folder was nested inside another folder.
          document
            .getElementById('folder' + parentFolderName)
            .appendChild(elementName);
        }

        //Add the file back to its previous location.
      } else if (elementName.className == 'file') {
        const index = files.findIndex(
          files => files.userSpecifiedName === elementName.id
        );
        parentFolderName = files[index].folderId;

        //If the file was at the 'root' folder.
        if (document.getElementById('folder' + parentFolderName) == null) {
          document.getElementById('root').appendChild(elementName);
        } else {
          //If the file was inside another folder before.
          document
            .getElementById('folder' + parentFolderName)
            .appendChild(elementName);
        }
      }

      tempDiv.remove();
    };
  }

  //Add the FileManagerJS functions to the window object
  global.FolderCreator = global.FolderCreator || FolderCreator;
  global.FileCreator = global.FileCreator || FileCreator;
  global.getUploadedFileInfo =
    global.getUploadedFileInfo || getUploadedFileInfo;
  global.getNestedFolderInfo =
    global.getNestedFolderInfo || getNestedFolderInfo;
  global.getRenameElementInfo =
    global.getRenameElementInfo || getRenameElementInfo;
  global.getDeletedElementInfo =
    global.getDeletedElementInfo || getDeletedElementInfo;
  global.getChangedFileColorInfo =
    global.getChangedFileColorInfo || getChangedFileColorInfo;
  global.getMoveElementFormInfo =
    global.getMoveElementFormInfo || getMoveElementFormInfo;
  global.initFileManagerJS = global.initFileManagerJS || initFileManagerJS;
  global.addFile = global.addFile || addFile;
  global.addNestedFolder = global.addNestedFolder || addNestedFolder;
  global.renameElement = global.renameElement || renameElement;
  global.deleteElement = global.deleteElement || deleteElement;
  global.changeFileColor = global.changeFileColor || changeFileColor;
  global.moveElements = global.moveElements || moveElements;
  global.restoreElement = global.restoreElement || restoreElement;
})(window, window.document, $);
