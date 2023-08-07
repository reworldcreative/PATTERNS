class Settings {
  private static instance: Settings;

  private theme: string;
  private language: string;
  private notifications: boolean;

  private constructor() {
    this.theme = "light";
    this.language = "en";
    this.notifications = true;
  }

  public static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }

  public getTheme(): string {
    return this.theme;
  }

  public setTheme(theme: string): void {
    this.theme = theme;
  }

  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(language: string): void {
    this.language = language;
  }

  public getNotifications(): boolean {
    return this.notifications;
  }

  public setNotifications(notifications: boolean): void {
    this.notifications = notifications;
  }
}

const Page1 = Settings.getInstance();
const Page2 = Settings.getInstance();
// console.log(Page1 === Page2); // true

Page1.setTheme("dark");
Page2.setLanguage("fr");
Page1.setNotifications(false);

console.log(Page2.getTheme()); //  dark
console.log(Page1.getLanguage()); //  fr
console.log(Page2.getNotifications()); // false
