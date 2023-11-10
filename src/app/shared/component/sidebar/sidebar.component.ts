import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {StringUtils} from "../../utils/string.utils";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  protected StringUtils = StringUtils

  authorities: string[] = []

  menuList = [
    {
      "text": "Dashboard",
      "icon": "bx bxs-dashboard",
      "routerLink": "dashboard",
      "operation": "VIEW_DASHBOARD"
    },
    {
      "text": "Transaction",
      "icon": "bx bx-qr",
      "routerLink": "transaction",
      "operation": "VIEW_TRANSACTION"
    },
    {
      "text": "Test Case",
      "icon": "bx bx-code-alt",
      "routerLink": "test-case",
      "operation": ""
    },
    {
      "text": "Test Data",
      "icon": "bx bx-data",
      "operation": "",
      "children": [
        {
          "text": "Institution",
          "routerLink": "test-data/institution",
          "operation": ""
        },
        {
          "text": "Terminal",
          "routerLink": "test-data/terminal",
          "operation": ""
        },
        {
          "text": "Merchant",
          "routerLink": "test-data/merchant",
          "operation": ""
        },
        {
          "text": "PAN",
          "routerLink": "test-data/pan",
          "operation": "VIEW_INSTITUTION"
        },
        {
          "text": "Keys",
          "routerLink": "test-data/keys",
          "operation": ""
        },
        {
          "text": "QR Code",
          "routerLink": "test-data/qr-code",
          "operation": "VIEW_INSTITUTION"
        },
      ]
    },
    {
      "text": "Scheme Setting",
      "icon": "bx bx-cog",
      "operation": "",
      "children": [
        {
          "text": "ISO20022 - JSON",
          "routerLink": "scheme-setting/iso20022-json",
          "operation": ""
        },
        {
          "text": "ISO20022 - XML",
          "routerLink": "scheme-setting/iso20022-xml",
          "operation": ""
        },
      ]
    },
    {
      "text": "User Management",
      "icon": "bx bx-group",
      "operation": "USER_MENU",
      "children": [
        {
          "text": "User",
          "routerLink": "user-management/user",
          "operation": "VIEW_USER",
        },
        {
          "text": "Role",
          "routerLink": "user-management/role",
          "operation": "VIEW_ROLE",
        },
        {
          "text": "Institution",
          "routerLink": "user-management/institution",
          "operation": "VIEW_INSTITUTION",
        },
        {
          "text": "Group",
          "routerLink": "user-management/group",
          "operation": "VIEW_USER_GROUP",
        },
        {
          "text": "Audit",
          "routerLink": "user-management/audit",
          "operation": "VIEW_USER_AUDIT",
        }
      ]
    }
  ];

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authorities = this.authService.getAuthorities()
  }
}
