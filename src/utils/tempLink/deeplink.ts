import { TempLinkType } from 'src/types/tempLink';
import InApp from './inapp'; // Import the detect-inapp package
import { OPENERS } from './openers';


interface appIdentifierType {
  isDesktop: boolean;
  isMobile: boolean;
  isInApp: boolean;
  browser: string;
  ua: string;
}

export default class LinkOpener<T extends TempLinkType> {
  private linkData: T;

  constructor(linkData: T) {
    this.linkData = linkData;
  }

  private isIOS(): boolean {
    const { userAgent } = navigator;
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) || (userAgent.includes('Mac') && 'ontouchend' in document);
  }

  private getMobileOperatingSystem(): string {
    const userAgent: string = navigator.userAgent || '';
    const isWindowsPhone: boolean = /windows phone/i.test(userAgent);
    const isAndroid: boolean = /android/i.test(userAgent);
    const isIOS: boolean = /iPad|iPhone|iPod/.test(userAgent) && this.isIOS();

    if (isWindowsPhone) {
      return 'Windows';
    }

    if (isAndroid) {
      return 'Android';
    }

    if (isIOS) {
      return 'iOS';
    }

    return 'other';
  }

  private detectInAppBrowser(userAgent: string): appIdentifierType {
    const inapp = new InApp(userAgent);


    // console.log("isInApp", inapp.isInApp)
    // console.log("browser", inapp.browser)
    // console.log("ua", inapp.ua)
    // console.log("isMobile", inapp.isMobile)
    // console.log("isDesktop", inapp.isDesktop)
    // console.log(Object.keys(BROWSER))
    return {
      isDesktop: inapp.isDesktop,
      isMobile: inapp.isMobile,
      isInApp: inapp.isInApp,
      browser: inapp.browser,
      ua: inapp.ua,
    }
  }

  private openInDefaultBrowser(link: string): void {
    window.open(link, '_blank');
  }



  private openInNonBrowser(appIdentifier: appIdentifierType, link: string, opener: string): void {

    // const availableOpenerSetupKey = Object.keys(setups).find((item) => item.toLowerCase() === opener.toLowerCase()) 
    // if (availableOpenerSetupKey) {
    //   console.log("availableOpenerSetup",setups[availableOpenerSetupKey])
    //   console.log("opener",opener)
    //   const deeplink = new Deeplink(setups[availableOpenerSetupKey])
    //   deeplink.open(link,opener)
    // } else{
    // }
    // console.log("appIdentifier",appIdentifier)
    if (this.isIOS()) {
      console.log("isIOS")
      this.openInApp(appIdentifier.browser, link, opener);
    } else if (this.getMobileOperatingSystem() === 'Android') {
      console.log("Android")
      this.openInApp(appIdentifier.browser, link, opener);
    } else {
      console.log("neither Android nor iOS")
      this.openInDefaultBrowser(link);
    }

  }
  private openInApp(platform: string, link: string, opener: string): void {
    let appScheme = '';
    const availableOpener = OPENERS.find((item) => item.id.toLowerCase() === opener.toLowerCase())
    if (availableOpener && availableOpener.getOpener) {
      let snatisedLink = link.replace("https", "").replace("http", "").replace(":", "").replace("//", "").replace("www.", "").replace("m.youtube", "youtube")
      console.log("snatisedLink", snatisedLink)
      appScheme = availableOpener.getOpener(snatisedLink) || '';
      console.log("Going to open", appScheme)
      window.open(appScheme, '_blank');
      return;
    }

    if (appScheme) {
      if (this.getMobileOperatingSystem() === 'Android') {
        const androidIntent = `intent://${appScheme}#Intent;scheme=${platform};package=com.${platform};S.browser_fallback_url=${encodeURIComponent(link)};end;`;
        window.location.assign(androidIntent) // Open in Android app
        window.setTimeout(() => {
          window.location.href = link; // Open in browser if Android app not installed
        })
      } else {
        window.location.href = appScheme; // Open in iOS app
      }
    } else {
      // If platform not found or unsupported, open in default browser
      window.open(link, '_blank');
    }
  }
  public openLinkInAppOrBrowser(): void {
    const userAgent = navigator.userAgent || '';
    const appIdentifier = this.detectInAppBrowser(userAgent);

    if (appIdentifier.isDesktop && appIdentifier.browser) {
      this.openInDefaultBrowser(this.linkData.url);
    } else {
      this.openInNonBrowser(appIdentifier, this.linkData.url, this.linkData.opener);
    }
  }

}