/* Create an Initial Example */

function createInitalExample() {
  const Folder1 = FolderCreator('Folder1', 'root');
  const Folder3 = FolderCreator('Folder3', 'root');
  const Folder2 = FolderCreator('Folder2', 'root');
  const Folder4 = FolderCreator('Folder4', 'Folder1');
  const Folder7 = FolderCreator('Folder7', 'Folder3');
  const Folder5 = FolderCreator('Folder5', 'Folder2');
  const Folder6 = FolderCreator('Folder6', 'Folder5');

  const File1 = new FileCreator(
    'File1.png',
    100223,
    'File1',
    'Folder4',
    'purple'
  );
  const File2 = new FileCreator(
    'File2.jpeg',
    78601,
    'File2',
    'Folder1',
    'green'
  );
  const File3 = new FileCreator(
    'File3.png',
    120778,
    'File3',
    'Folder4',
    'purple'
  );

  const File4 = new FileCreator('File4.txt', 203432, 'File4', 'Folder6', 'red');
  const File5 = new FileCreator(
    'File5.pdf',
    37068,
    'File5',
    'Folder5',
    'DarkOrange'
  );

  const File6 = new FileCreator(
    'File6.docx',
    506356,
    'File6',
    'Folder5',
    'DarkCyan'
  );

  const File7 = new FileCreator(
    'File7.mp3',
    90786,
    'File7',
    'Folder7',
    'Crimson'
  );

  const File8 = new FileCreator(
    'File8.exe',
    90786,
    'File8',
    'root',
    'Chocolate'
  );

  addNestedFolder(Folder1);
  addNestedFolder(Folder2);
  addNestedFolder(Folder3);
  addNestedFolder(Folder4);
  addNestedFolder(Folder7);
  addNestedFolder(Folder5);
  addNestedFolder(Folder6);
  addFile(File1);
  addFile(File2);
  addFile(File3);
  addFile(File4);
  addFile(File6);
  addFile(File5);
  addFile(File7);
  addFile(File8);
}
initFileManagerJS();
createInitalExample();
