/* Create an Initial Example */

function createCloudExample() {
  const pictureFolder = FolderCreator('Pictures', 'root');
  const musicFolder = FolderCreator('Music', 'root');
  const documentFolder = FolderCreator('Documents', 'root');
  const vacationFolder = FolderCreator('Vacation', 'Pictures');
  const rockFolder = FolderCreator('Rock', 'Music');
  const homeworkFolder = FolderCreator('Homework', 'Documents');
  const biologyFolder = FolderCreator('Biology', 'Homework');

  const pictureFile1 = new FileCreator(
    'picture.png',
    100223,
    'VacationPicture1',
    'Vacation',
    'purple'
  );
  const pictureFile2 = new FileCreator(
    'picture2.jpeg',
    78601,
    'AnOldPicture',
    'Pictures',
    'green'
  );
  const pictureFile3 = new FileCreator(
    'picture3.png',
    120778,
    'VacationPicture2',
    'Vacation',
    'purple'
  );

  const reportFile = new FileCreator(
    'report.txt',
    203432,
    'Biology Report',
    'Biology'
  );
  const proposalFile = new FileCreator(
    'proposal.pdf',
    37068,
    'Biology Report2',
    'Homework'
  );

  const essayFile = new FileCreator(
    'essay.docx',
    506356,
    'Course Essay',
    'Homework'
  );

  const songFile = new FileCreator(
    'rockSong1.mp3',
    90786,
    'Rock song sample',
    'Rock'
  );

  addNestedFolder(pictureFolder);
  addNestedFolder(documentFolder);
  addNestedFolder(musicFolder);
  addNestedFolder(vacationFolder);
  addNestedFolder(rockFolder);
  addNestedFolder(homeworkFolder);
  addNestedFolder(biologyFolder);
  addFile(pictureFile1);
  addFile(pictureFile2);
  addFile(pictureFile3);
  addFile(reportFile);
  addFile(essayFile);
  addFile(proposalFile);
  addFile(songFile);
}
initFileManagerJS();
createCloudExample();
