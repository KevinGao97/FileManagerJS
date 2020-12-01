/* Create an Initial Example */

function createInitalExample() {
  const pictureFolder = new Folder('Pictures', 'root');
  const musicFolder = new Folder('Music', 'root');
  const documentFolder = new Folder('Documents', 'root');
  const vacationFolder = new Folder('Vacation', 'Pictures');
  const rockFolder = new Folder('Rock', 'Music');
  const homeworkFolder = new Folder('Homework', 'Documents');
  const biologyFolder = new Folder('Biology', 'Homework');

  const pictureFile1 = new File(
    'picture.png',
    100223,
    'VacationPicture1',
    'Vacation',
    'purple'
  );
  const pictureFile2 = new File(
    'picture2.jpeg',
    78601,
    'AnOldPicture',
    'Pictures',
    'green'
  );
  const pictureFile3 = new File(
    'picture3.png',
    120778,
    'VacationPicture2',
    'Vacation',
    'purple'
  );

  const reportFile = new File(
    'report.txt',
    203432,
    'Biology Report',
    'Biology'
  );
  const proposalFile = new File(
    'proposal.pdf',
    37068,
    'Biology Report2',
    'Homework'
  );

  const essayFile = new File('essay.docx', 506356, 'Course Essay', 'Homework');

  const songFile = new File('rockSong1.mp3', 90786, 'Rock song sample', 'Rock');

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
createInitalExample();
