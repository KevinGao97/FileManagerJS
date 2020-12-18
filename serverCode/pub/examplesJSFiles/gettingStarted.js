/* Create a Starting Example */

//Initializes the Library
initFileManagerJS();

function createStartingExample() {
  //Creates 3 Folder Objects
  const Folder1 = FolderCreator('Folder1', 'root');
  const Folder2 = FolderCreator('Folder2', 'root');
  const Folder3 = FolderCreator('Folder3', 'root');

  //Creates 3 File Objects
  const File1 = new FileCreator(
    'File1.jpeg',
    75655,
    'Picture1',
    'Folder1',
    'green'
  );
  const File2 = new FileCreator(
    'File2.txt',
    12032,
    'Report1',
    'Folder2',
    'red'
  );
  const File3 = new FileCreator(
    'File3.pdf',
    8513,
    'Document1',
    'Folder3',
    'purple'
  );

  //Adds both the Folder and File Objects to the DOM
  addNestedFolder(Folder1);
  addNestedFolder(Folder3);
  addNestedFolder(Folder2);
  addFile(File1);
  addFile(File2);
  addFile(File3);

  //Rename a File name to 'PictureFile'
  renameElement(File1.userSpecifiedName, 'PictureFile');

  //Move File 2 into Folder 3
  moveElements(File2.userSpecifiedName, Folder3.name);
}

createStartingExample();
