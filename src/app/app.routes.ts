import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProjectDetailsComponent} from './components/project-details/project-details.component';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'project/:name', component: ProjectDetailsComponent}
];