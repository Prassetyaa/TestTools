import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./shared/component/default/default.component";
import {TransactionComponent} from "./feature/transaction/transaction.component";
import {RuleComponent} from "./feature/rule/rule.component";
import {RulecrudComponent} from "./feature/rule/component/rulecrud/rulecrud.component";
import {LoginComponent} from "./feature/login/login.component";
import {DashboardComponent} from "./feature/dashboard/dashboard.component";
import {ResetPasswordComponent} from "./feature/reset-password/reset-password.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {AlertInvestigationComponent} from "./feature/alert-investigation/alert-investigation.component";
import {UserComponent} from "./feature/user/user.component";
import {InstitutionComponent} from "./feature/institution/institution.component";
import {ExtIntISO8583Component} from "./feature/ext-int-iso8583/ext-int-iso8583.component";
import {Iso8583DetailsComponent} from "./feature/ext-int-iso8583/component/iso8583-details/iso8583-details.component";
import {UserGroupComponent} from "./feature/user-group/user-group.component";
import {UserAuditComponent} from "./feature/user-audit/user-audit.component";
import {UserRoleComponent} from "./feature/user-role/user-role.component";
import {UnauthorizedScreenComponent} from './shared/component/unauthorized-screen/unauthorized-screen.component';
import {ExtIntJsonComponent} from "./feature/ext-int-json/ext-int-json.component";
import {JsonDetailsComponent} from "./feature/ext-int-json/component/json-details/json-details.component";
import { TestCaseComponent } from './feature/test-case/test-case.component';
import { TestCaseDetailsComponent } from './feature/test-case/component/test-case-details/test-case-details.component';
import { TestDataInstitutionComponent } from './feature/test-data-institution/test-data-institution.component';
import { TestDataTerminalComponent } from './feature/test-data-terminal/test-data-terminal.component';
import { TestDataMerchantComponent } from './feature/test-data-merchant/test-data-merchant.component';
import { TestDataKeysComponent } from './feature/test-data-keys/test-data-keys.component';
import { TestDataPanComponent } from './feature/test-data-pan/test-data-pan.component';
import { MessageSettingComponent } from './feature/message-setting/message-setting.component';
import { ConnectionSettingComponent } from './feature/connection-setting/connection-setting.component';
import { KeyManagementComponent } from './feature/key-management/key-management.component';
import { TransactionTypeComponent } from './feature/transaction-type/transaction-type.component';
import { ResponseCodeComponent } from './feature/response-code/response-code.component';
import { TransactionDetailsComponent } from './feature/transaction/component/transaction-details/transaction-details.component';
import { SchemeIso20022JsonComponent } from './feature/scheme-iso20022-json/scheme-iso20022-json.component';
import { Iso20022JsonDetailsComponent } from './feature/scheme-iso20022-json/component/iso20022-json-details/iso20022-json-details.component';
import { SchemeIso20022XmlComponent } from './feature/scheme-iso20022-xml/scheme-iso20022-xml.component';
import { TestDataQrCodeComponent } from './feature/test-data-qr-code/test-data-qr-code.component';
import { Iso20022XmlDetailsComponent } from './feature/scheme-iso20022-xml/component/iso20022-xml-details/iso20022-xml-details.component';
import { NotifTemplateComponent } from './feature/notification-template/notif-template.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: {
          operations: 'VIEW_DASHBOARD'
        }
      },
      {
        path: 'notification',
        component: NotifTemplateComponent
      },
      {
        path: 'transaction',
        children: [
          {
            path: '',
            component: TransactionComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_EXT_JSON'
            }
          },
          {
              path: ':id',
              component: TransactionDetailsComponent,
              canActivate: [AuthGuard],
              data: {
                operations: 'VIEW_EXT_JSON'
              } 
          }
        ]
      },

      {
        path: 'baseline',
        component: TransactionComponent,
        canActivate: [AuthGuard],
        data: {
          operations: 'VIEW_BASELINE'
        }
      },

      {
        path: 'test-case',
        children: [
          {
            path: '',
            component: TestCaseComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_EXT_JSON'
            },
          },
          {
            path: ':id',
            component: TestCaseDetailsComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_EXT_JSON'
            }
          }
        ]
      },

      {
        path: 'test-data',
        children: [
          {
            path: 'institution',
            component: TestDataInstitutionComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            },
          },
          {
            path: 'terminal',
            component: TestDataTerminalComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            }
          },
          {
            path: 'merchant',
            component: TestDataMerchantComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            }
          },
          {
            path: 'keys',
            component: TestDataKeysComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            }
          },
          {
            path: 'pan',
            component: TestDataPanComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            }
          },
          {
            path: 'qr-code',
            component: TestDataQrCodeComponent,
            canActivate: [AuthGuard],
            data: {
              operations: ''
            }
          }
        ]
      },
      {
        path: 'scheme-setting',
        children: [
          {
            path: 'iso20022-json',
            children: [
              {
                path: '',
                component: SchemeIso20022JsonComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: ''
                }
              },
              {
                path: ':id',
                component: Iso20022JsonDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: ''
                }
              }
            ]
          },
        ]
      },
      {
        path: 'scheme-setting',
        children: [
          {
            path: 'iso20022-xml',
            children: [
              {
                path: '',
                component: SchemeIso20022XmlComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: ''
                }
              },
              {
                path: ':id',
                component: Iso20022XmlDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: ''
                }
              }
            ]
          },
        ]
      },
      {
        path: 'user-management',
        children: [
          {
            path: 'user',
            component: UserComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_USER'
            }
          },
          {
            path: 'role',
            component: UserRoleComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_ROLE'
            }
          },
          {
            path: 'institution',
            component: InstitutionComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_INSTITUTION'
            }
          },
          {
            path: 'audit',
            component: UserAuditComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_USER_AUDIT'
            }
          },
          {
            path: 'group',
            component: UserGroupComponent,
            canActivate: [AuthGuard],
            data: {
              operations: 'VIEW_USER_GROUP'
            }
          },
        ]
      },
      // {
      //   path: 'system-parameters',
      //   children: [
      //     {
      //       path: 'response-code',
      //       component: ResponseCodeComponent,
      //       canActivate: [AuthGuard],
      //       data: {
      //         operations: 'VIEW_RULE_GROUP'
      //       }
      //     },
      //     {
      //       path: 'transaction-type',
      //       component: TransactionTypeComponent,
      //       canActivate: [AuthGuard],
      //       data: {
      //         operations: 'VIEW_RULE_GROUP'
      //       }
      //     },
      //     {
      //       path: 'transaction-parameter',
      //       component: TransParamComponent,
      //       canActivate: [AuthGuard],
      //       data: {
      //         operations: 'VIEW_ALERT'
      //       }
      //     },
      //     {
      //       path: 'aid-parameter',
      //       component: AidParameterComponent,
      //       canActivate: [AuthGuard],
      //       data: {
      //         operations: 'VIEW_ALERT'
      //       }
      //     }
      //   ]
      // },
      {
        path: 'ext-interfaces',
        children: [
          {
            path: 'ISO8583',
            children: [
              {
                path: '',
                component: ExtIntISO8583Component,
                canActivate: [AuthGuard],
                data: {
                  operations: 'VIEW_EXT_ISO8583'
                },
              },
              {
                path: ':id',
                component: Iso8583DetailsComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: 'VIEW_EXT_ISO8583'
                }
              }
            ]
          },
          {
            path: 'JSON',
            children: [
              {
                path: '',
                component: ExtIntJsonComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: 'VIEW_EXT_JSON'
                },
              },
              {
                path: ':id',
                component: JsonDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                  operations: 'VIEW_EXT_JSON'
                }
              }
            ]
          },
        ]
      },
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'unauthorized',
        component: UnauthorizedScreenComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'auth/login',}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
