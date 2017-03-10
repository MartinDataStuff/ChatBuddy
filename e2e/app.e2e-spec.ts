import { ChatBuddyPage } from './app.po';

describe('chat-buddy App', () => {
  let page: ChatBuddyPage;

  beforeEach(() => {
    page = new ChatBuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
