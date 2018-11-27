import { PublicMsg } from '../main-page/models/publicMsg.model';
import { Subject } from 'rxjs';

export class PublicMsgServices {

    publicRandomFailMsg: PublicMsg[] = [];
    publicRandomSuccessMsg: PublicMsg[] = [];
    successAlert = new Subject();
    failAlert = new Subject();
    successMessagesUpdated = new Subject();
    failMessagesUpdated = new Subject();

    getAllFailMessages() {
        return this.publicRandomFailMsg;
    }

    getAllSuccessMessages() {
        return this.publicRandomSuccessMsg;
    }

    addFailMessage(message: PublicMsg) {
        this.publicRandomFailMsg.push(message);
        this.failMessagesUpdated.next(this.publicRandomFailMsg);
    }

    addSuccessMessage(message: PublicMsg) {
        this.publicRandomSuccessMsg.push(message);
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }

    setFailMessages(publicMsg: PublicMsg[]) {
      this.publicRandomFailMsg = publicMsg;
      this.failMessagesUpdated.next(this.publicRandomFailMsg);
    }

    setSuccessMessages(publicMsg: PublicMsg[]) {
        this.publicRandomSuccessMsg = publicMsg;
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }
    setOnAddTipMessage(tip) {
      const ammount = tip != null ? tip : '0';
      const numFa =  Math.floor(Math.random() * this.publicRandomFailMsg.length);
      const numSu =  Math.floor(Math.random() * this.publicRandomSuccessMsg.length);
       if (ammount === '0') {
         this.failAlert.next(this.publicRandomFailMsg[numFa]);
       } else {
         this.successAlert.next(this.publicRandomSuccessMsg[numSu]);
       }
    }
}
