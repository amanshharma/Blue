import { BluePage } from './app.po';

describe('blue App', () => {
  let page: BluePage;

  beforeEach(() => {
    page = new BluePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
