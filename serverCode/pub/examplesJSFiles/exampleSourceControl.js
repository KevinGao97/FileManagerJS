/* Create a Source Control Example */

function createSourceExample() {
  const mainAppFolder = FolderCreator('application', 'root');
  const htmlFolder = FolderCreator('html', 'application');
  const jsFolder = FolderCreator('js', 'application');
  const cssFolder = FolderCreator('css', 'application');
  const pages = FolderCreator('pages', 'html');
  const scriptsFolder = FolderCreator('scripts', 'js');
  const bootstrapFolder = FolderCreator('bootstrap', 'js');
  const styleFolder = FolderCreator('style', 'css');
  const libraryFolder = FolderCreator('libraries', 'js');

  const htmlFile1 = new FileCreator(
    'index.html',
    100223,
    'IndexPage',
    'html',
    'purple'
  );
  const htmlFile2 = new FileCreator(
    'about.html',
    100223,
    'AboutPage',
    'pages',
    'green'
  );
  const htmlFile3 = new FileCreator(
    'contact.html',
    100223,
    'ContactUsPage',
    'pages',
    'black'
  );

  const htmlFile4 = new FileCreator(
    'application.html',
    100223,
    'ApplicationPage',
    'pages',
    'orchid'
  );

  const htmlFile5 = new FileCreator(
    'footer.html',
    100223,
    'FooterPage',
    'pages',
    'teal'
  );
  const htmlFile6 = new FileCreator(
    'useCases.html',
    100223,
    'UseCasesPage',
    'pages',
    'rebeccaPurple'
  );

  const styleFile = new FileCreator(
    'styles.css',
    100223,
    'StylesCSSFile',
    'style',
    'blue'
  );
  const styleFile2 = new FileCreator(
    'landingPage.css',
    100223,
    'LandingPageCSSFile',
    'style',
    'MediumAquaMarine'
  );

  const styleFile3 = new FileCreator(
    'bootstrap.css',
    100223,
    'BootstrapCSSFile',
    'style',
    'Navy'
  );

  const scriptFile1 = new FileCreator(
    'script.js',
    100223,
    'mainScriptFile',
    'scripts',
    'red'
  );
  const scriptFile2 = new FileCreator(
    'bootstrap.js',
    100223,
    'BootStrapLibrary',
    'bootstrap',
    'black'
  );

  const scriptFile3 = new FileCreator(
    'jquery.js',
    100223,
    'JqueryLibrary',
    'libraries',
    'LightCoral'
  );

  const readmeFile = new FileCreator(
    'README.md',
    100223,
    'ReadMeFile',
    'root',
    'Indigo'
  );

  addNestedFolder(mainAppFolder);
  addNestedFolder(htmlFolder);
  addNestedFolder(cssFolder);
  addNestedFolder(jsFolder);
  addNestedFolder(pages);
  addNestedFolder(scriptsFolder);
  addNestedFolder(styleFolder);
  addNestedFolder(bootstrapFolder);
  addNestedFolder(libraryFolder);

  addFile(htmlFile1);
  addFile(htmlFile2);
  addFile(htmlFile3);
  addFile(htmlFile4);
  addFile(htmlFile5);
  addFile(htmlFile6);
  addFile(styleFile);
  addFile(styleFile2);
  addFile(styleFile3);
  addFile(scriptFile1);
  addFile(scriptFile2);
  addFile(scriptFile3);
  addFile(readmeFile);
}
initFileManagerJS();
createSourceExample();
