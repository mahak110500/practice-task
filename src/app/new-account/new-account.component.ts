import { Component, OnInit} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService,AccountsService]
})
export class NewAccountComponent implements OnInit {
 
  

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private loggingService : LoggingService, private accountsService : AccountsService) {}


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);

    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

  }

}
