import { Component, OnInit } from '@angular/core';
import { SchemeIso20022XmlService } from '../../service/scheme-iso20022-xml.service';

@Component({
  selector: 'app-iso20022-xml-connection-settings',
  templateUrl: './iso20022-xml-connection-settings.component.html',
  styleUrls: ['./iso20022-xml-connection-settings.component.css']
})
export class Iso20022XmlConnectionSettingsComponent implements OnInit {

  connectionItems: any[] = [];
  selectedConnection: any;
  visibleConnectionDialog: boolean = false;
  dialogMode: string = ''

  constructor(private xmlService: SchemeIso20022XmlService) {}
  ngOnInit(): void {
  //  this.jsonService.fetchConnection().subscribe((response) => {
  //   this.connectionItems = response
  //  })
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
