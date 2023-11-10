import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SchemeIso20022JsonService } from '../../service/scheme-iso20022-json.service';

@Component({
  selector: 'app-iso20022-json-connection-settings',
  templateUrl: './iso20022-json-connection-settings.component.html',
  styleUrls: ['./iso20022-json-connection-settings.component.css']
})
export class Iso20022JsonConnectionSettingsComponent implements OnInit {

  connectionItems: any[] = [];
  selectedConnection: any;
  visibleConnectionDialog: boolean = false;
  dialogMode: string = ''

  constructor(private jsonService: SchemeIso20022JsonService) {}
  ngOnInit(): void {
   this.jsonService.fetchConnection().subscribe((response) => {
    this.connectionItems = response
   })
  }

  onCloseListDialog(stat: boolean) {
    this.visibleConnectionDialog = stat;
  }

  onLoading(stat: boolean) {

  }

  addConnectionDialog() {
    this.dialogMode = 'ADD'
    this.visibleConnectionDialog = true;
  }

}
