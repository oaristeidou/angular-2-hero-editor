import { Angular2TutorialHeroEditorPage } from './app.po';

describe('angular-2-tutorial-hero-editor App', function() {
  let page: Angular2TutorialHeroEditorPage;

  beforeEach(() => {
    page = new Angular2TutorialHeroEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
