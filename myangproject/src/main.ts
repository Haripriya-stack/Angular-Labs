import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(PortfolioComponent, appConfig)
  .catch((err) => console.error(err));
