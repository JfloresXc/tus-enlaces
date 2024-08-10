import { Routes } from '@angular/router';
import { ReportAllUsersComponent } from './pages/report-all-users/report-all-users.component';
import { LayoutAccountComponent } from '../shared/components/layout-account/layout-account.component';

export const routes: Routes = [
    {
        path: '', component: LayoutAccountComponent, children: [
            { path: 'report-all-users', component: ReportAllUsersComponent },
        ]
    },
];
