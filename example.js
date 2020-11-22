/* Create an Initial Example */

function createInitalExample() {
  const pictureFolder = new Folder('Pictures', 'root');
  const musicFolder = new Folder('Music', 'root');
  const documentFolder = new Folder('Documents', 'root');
  const vacationFolder = new Folder('Vacation', 'Pictures');
  const rockFolder = new Folder('Rock', 'Music');
  const homeworkFolder = new Folder('Homework', 'Documents');

  const pictureFile1 = new File(
    'picture.png',
    100223,
    'VacationPicture1',
    'Vacation'
  );
  const pictureFile2 = new File(
    'picture2.jpeg',
    78601,
    'AnOldPicture',
    'Pictures'
  );
  const pictureFile3 = new File(
    'picture3.png',
    120778,
    'VacationPicture2',
    'Vacation'
  );

  addNestedFolder(pictureFolder);
  addNestedFolder(documentFolder);
  addNestedFolder(musicFolder);
  addNestedFolder(vacationFolder);
  addNestedFolder(rockFolder);
  addNestedFolder(homeworkFolder);
  addFile(pictureFile1);
  addFile(pictureFile2);
  addFile(pictureFile3);
}

createInitalExample();
